import React from "react";
import InputForm from "../Input";
import Contacts from "../Contacts";

export default class Phonebook extends React.Component {
    state = {
        contacts: [
            {
                'name': '0',
                'tel': '0',
            }
        ]
    };

    render() {
        return (
            <div>
                <InputForm />
                <Contacts />
            </div>
        );
    };
}