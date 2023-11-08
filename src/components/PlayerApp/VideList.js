import Section from "../Section";

export default function VideoList({ data, select }) {
    return (
        <Section title="Video list">
            <ul>
                {data.map(
                    ({ id, link }) => {
                        return (
                            <li
                                key={id}
                                onClick={() => select(link)}
                            >{link}
                            </li>
                        );
                    }
                )}
            </ul>
        </Section>
    );
};