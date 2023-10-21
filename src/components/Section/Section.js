export default function Section({ title, children }) {
    return (
        <section>
            <h3>{title}</h3>
            {children}
        </section>
    );
};