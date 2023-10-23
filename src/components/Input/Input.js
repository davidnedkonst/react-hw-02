import Section from "../Section";

export default function Input() {
    return (
        <div>
            <Section title='Phonebook'>
                <form>
                    <label>Name<input id='text' type='text' required /></label><br />
                    
                    <label>Number<input type='tel' required /></label><br />
                    
                    <button>Add contact</button>
                </form>
            </Section>
        </div>
    );
}