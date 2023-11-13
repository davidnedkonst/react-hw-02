export default function Controls({current, total, handleClick}) {
    const increment = 1;
    const decrement = -1;
    const incrementName = "Вперед";
    const decrementName = "Назад";

    return (
        <div>
            <button
                type="button"
                onClick={() => handleClick(decrement)}
            >{decrementName}</button>

            <button
                type="button"
                onClick={() => handleClick(increment)}
                disabled={current === total}
            >{incrementName}</button>
        </div>
    );
}