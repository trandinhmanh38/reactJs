import './Checkbox.css';
import {useState} from "react";
import Counter from "../Counter/Counter";

const Checkbox = () =>{
    const[values, setValues] = useState({
        coding: false,
        music: false,
        reading: false
    });
    const allSelected = values.coding && values.music && values.reading;

    const handleCheckBoxClick = (evt) => {
        setValues({
            ...values,
            [evt.target.name]: evt.target.checked
        })
    }

    const handleCheckAllClick = evt =>{
        const checked = evt.target.checked;
        setValues({
            ...values,
            coding: checked,
            music: checked,
            reading: checked
        })
    }
    return(
        <div className="checked-boxs">
            <legend>Choose your habbits</legend>
            <div>
                <input
                    type="checkbox"
                    name="all"
                    checked={ allSelected}
                    onChange={handleCheckAllClick}
            />
                <label>Choose All</label>
            </div>

            <div>
                <input
                    type="checkbox"
                    name="coding"
                    onChange={ handleCheckBoxClick }
                    checked={values.coding}
                />
                <label>Coding</label>
            </div>

            <div>
                <input
                    type="checkbox"
                    name="music"
                    onChange={ handleCheckBoxClick }
                    checked={values.music}
                />
                <label>Listening musix</label>
            </div>

            <div>
                <input
                    type="checkbox"
                    name="reading"
                    onChange={ handleCheckBoxClick }
                    checked={values.reading}
                />
                <label>Reading book</label>
            </div>
            <div>Your selected: {JSON.stringify(values)}</div>

        </div>
    );
};
export default Checkbox;