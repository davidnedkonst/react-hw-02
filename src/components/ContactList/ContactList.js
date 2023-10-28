import StatisticsItem from "../StatisticsItem";

export default function ContactList({ contacts, onDelete }) {
    return (
        <ul>
            {
                contacts.map(({ id, name, tel }) =>
                    <li key={id}>
                        <StatisticsItem name={name} value={tel} />
                        <button onClick={() => onDelete(id)}>Delete</button>
                    </li>
                )
            }
        </ul>
    );
};