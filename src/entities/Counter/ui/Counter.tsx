import { Button } from "shared/ui/Button/Button";
import { useSelector } from "react-redux";
import { counterActions } from "../model/slice/counterSlice";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";

export const Counter = () => {
    const dispatch = useAppDispatch();
    const counterValue = useSelector(getCounterValue);

    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button onClick={increment} data-testid="increment-btn">
                +
            </Button>
            <Button data-testid="decrement-btn" onClick={decrement}>
                -
            </Button>
        </div>
    );
};
