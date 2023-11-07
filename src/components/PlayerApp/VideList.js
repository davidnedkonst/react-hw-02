export default function VideoList({ data, select }) {
    console.log("VideoList() run...");
    console.log("data = ", data);

    return (
        <ul>
            {data.map(
                ({ id, link }) => {
                    return (
                        <li key={id} onClick={() => select(link)}>{link}</li>
                    );
                }
            )}
        </ul>
    );
};