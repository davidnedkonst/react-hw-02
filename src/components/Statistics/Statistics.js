export default function Statistics({ good, neutral, bad, total, positivePercentage }) {
    const stringPositivePercentage = `${positivePercentage.toPrecision(2)}%`;

    return (
        <div>
            <p>Good: <span>{good}</span></p>
            <p>Neutral: <span>{neutral}</span></p>
            <p>Bad: <span>{bad}</span></p>
            <p>Total: <span>{total}</span></p>
            <p>Positive feedback: <span>{stringPositivePercentage}</span></p>
        </div>
    );
};