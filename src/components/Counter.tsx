import { useState } from "react";
import * as styles from "./Counter.module.scss";

const Counter = () => {
    const [count, setCount] = useState(0);

    const incremet = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h1 className={styles.title}>{count}</h1>
            <button onClick={incremet}>+</button>
        </div>
    );
};

export default Counter;
