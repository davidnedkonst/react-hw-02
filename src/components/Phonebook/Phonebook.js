import React from "react";
import Section from "../Section";
import ContactForm from "../ContactForm";
import ContactFilter from "../ContactFilter";
import ContactList from "../ContactList";
import { initialContacts } from "../../constants/initialContacts";
import { nanoid } from "nanoid";

export default class Phonebook extends React.Component {
    state = {
        'contacts': initialContacts,
        'name': '',
        'tel': '',
    };

    addContact = contact => {
        contact.id = nanoid();
        this.setState(({ contacts }) => (
            { 'contacts': [...contacts, contact] }
        ));
    };

    deleteContact = deleteId => {
        this.setState(({contacts}) => (
            { 'contacts': contacts.filter(({ id }) => (id !== deleteId)) }
        ))
    };

    render() {
        return (
            <div>
                <Section title='ContactForm'>
                    <ContactForm onSubmit={this.addContact} />
                </Section>
                <Section title='Filter'>
                    <ContactFilter />
                </Section>
                <Section title='Contacts'>
                    <ContactList
                        contacts={this.state.contacts}
                        onDelete={this.deleteContact}
                    />
                </Section>
            </div>
        );
    };
};