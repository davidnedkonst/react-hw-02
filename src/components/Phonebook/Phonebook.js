import React from "react";
import Section from "../Section";
import ContactForm from "../ContactForm";
import ContactFilter from "../ContactFilter";
import ContactList from "../ContactList";
import { FirstToUpperCase, isName, toNumber } from "../../utils";
import { initialContacts } from "../../constants/initialContacts";
import { nanoid } from "nanoid";

export default class Phonebook extends React.Component {
    state = {
        'contacts': initialContacts,
        'filter': '',
    };

    addContact = ({ name, tel }) => {
        if (this.state.contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
            alert(`${FirstToUpperCase(name)} is already in contacts.`);
            return;
        };

        const newContact = {
            name: FirstToUpperCase(name),
            tel: toNumber(tel),
            id: nanoid(),
        };

        this.setState(({ contacts }) => ({ 'contacts': [newContact, ...contacts] }));
    };

    deleteContact = deleteId => {
        this.setState(({ contacts }) => (
            { 'contacts': contacts.filter(({ id }) => (id !== deleteId)) }
        ))
    };

    onContactFilterChange = event => {
        this.setState(
            { filter: event.target.value.toLowerCase() }
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
                <Section title='ContactForm'>
                    <ContactForm onSubmit={this.addContact} />
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