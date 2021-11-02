import'./Counter.css';
import{useState} from "react";

const value = 0;
const Counter = () => {
    const [value, setValue] = useState(10);
    console.log('value = ', value);
    console.log('set value', value);
    const handleAddClick = () => {
        console.log('add clicked');
        setValue(value + 1);
    }
    const handleMinusClick = () => {
        console.log('minus clicked');
        setValue(value -1);
    }
    return (
        <div className="counter">
            <button
                className="counter__button"
                onClick={handleMinusClick}
            >
                -
            </button>

            <span className="counter__value">{value}</span>

            <button
                className="counter__button"
                onClick={handleAddClick}
            >
                +
            </button>
        </div>
    )
};
export default Counter;
