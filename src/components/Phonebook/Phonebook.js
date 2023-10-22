import React from "react";
import InputForm from "../InputForm";
import Contacts from "../Contacts";

export default class Phonebook extends React.Component{
    state = {};

    render() {
        return (
            <div>
                <InputForm />
                <Contacts/>
            </div>
        );
    };
}