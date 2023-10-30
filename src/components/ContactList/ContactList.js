import ListItem from "../ListItem";

export default function ContactList({ contacts, onDelete }) {
    return (
        <ul>
            {
                contacts.map(({ id, name, tel }) =>
                    <li key={id}>
                        <ListItem name={name} value={tel} />
                        <button onClick={() => onDelete(id)}>Delete</button>
                    </li>
                )
            }
        </ul>
    );
};