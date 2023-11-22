import css from "./Button.module.css";

export default function Button({ onLoadClick }) {
    return (
        <button type="button" className={css.Button} onClick={onLoadClick}>Load</button>
    );
}