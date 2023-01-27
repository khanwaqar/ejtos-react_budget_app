import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency, setCurrency } = useContext(AppContext);
    const { dispatch } = useContext(AppContext);
    const alertType = 'alert-secondary';

    const handleChange = (event) => {
        const currency = {
            name: currency,
            value: event.target.value
        };
        alert(currency.value)
        dispatch({
            type: 'CHG_CURRENCY',
            payload: currency.value
        });
      };

    return (
        <div className={`alert ${alertType}`}>
            <span>Currency: 
            <select className="form-select btn btn-success" id="inputGroupSelect02" name='currency' onChange={handleChange}>
                <option defaultValue value="£" name="pound">£ - Pound</option>
                <option value="$" name="dollor">$ - Dollor</option>
                <option value="€" name="euro">€ - Euro</option>
                <option value="₹" name="rupee">₹ - Rupee</option>
            </select>
            </span>
        </div>
    );
};

export default Currency;
