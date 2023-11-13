export default function Publication({id, title, text}) { 
    return (
        <article>
            <h3>{id}</h3>
            <h2>{title}</h2>
            <p>{text}</p>
        </article>
    );
}