export default function VideoList({ data, select }) {
    return (
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
    );
};