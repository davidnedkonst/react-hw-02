import React, { Component } from "react";
import Section from "../../Section";
import Modal from "../../Modal";
import ContactForm from "../ContactForm";
import ContactFilter from "../ContactFilter";
import ContactList from "../ContactList";
import { FirstToUpperCase, isName, toNumber } from "../../../utils";
import { initialContacts } from "../../../constants/initialContacts";
import { nanoid } from "nanoid";

export default class Phonebook extends Component {
    state = {
        contacts: [...initialContacts],
        filter: '',
    };

    componentDidMount() {
        const localeContacts = JSON.parse(localStorage.getItem("contacts"));
        if (!localeContacts) {
            localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
            return;
        }
        if (localeContacts) this.setState({ contacts: localeContacts });
    };

    componentDidUpdate(prevProps, { contacts }) {
        const newContacts = this.state.contacts;
        if (contacts !== newContacts) {
            localStorage.setItem("contacts", JSON.stringify(newContacts));
        }
    };

    addContact = ({ name, tel }) => {
        const Name = FirstToUpperCase(name);

        if (this.state.contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
            alert(`${Name} is already in contacts.`);
            return;
        };

        const newContact = {
            name: Name,
            tel: toNumber(tel),
            id: nanoid(),
        };

        this.setState(({ contacts }) => ({ contacts: [newContact, ...contacts] }));
    };

    deleteContact = deleteId => {
        this.setState(({ contacts }) => (
            { contacts: contacts.filter(({ id }) => (id !== deleteId)) }
        ))
    };

    onContactFilterChange = ({target}) => {
        const { value } = target;
        this.setState(
            { filter: value.toLowerCase() }
        );
    };

    getFilterContacts = () => {
        const { filter, contacts } = this.state;
        const filterContacts = contacts.filter(
            ({ name, tel }) => {
                const n = name.toLowerCase();
                if (isName(filter)) return n.includes(filter);

                const t = toNumber(tel);
                return t.includes(toNumber(filter));
            }
        );
        return filterContacts;
    };

    render() {
        const { filter } = this.state;
        const filterContacts = this.getFilterContacts();

        return (
            <div>
                <h2>Phonebook</h2>

                <Section title='ContactForm'>
                    <Modal
                        openButtonText="Add contact"
                        closeButtonText="Close"
                    >
                        <ContactForm onSubmit={this.addContact} />
                    </Modal>
                </Section>

                <Section title='Filter'>
                    <ContactFilter
                        value={filter}
                        onChange={this.onContactFilterChange}
                    />
                </Section>

                <Section title='Contacts'>
                    <ContactList
                        contacts={filterContacts}
                        onDelete={this.deleteContact}
                    />
                </Section>
            </div>
        );
    };
};