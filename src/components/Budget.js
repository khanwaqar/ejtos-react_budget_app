import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
    
const Budget = () => {
    const { budget, currency, expenses } = useContext(AppContext);
    const { dispatch } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const handleChange = (event) => {
        const budget = {
            name: budget,
            value: event.target.value,
            expense : totalExpenses
        };
        dispatch({
            type: 'SET_BUDGET',
            payload: budget
        });
      };
    
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}<input
            type="number"
            className='form-control'
            id="budget"
            name="budget"
            value={budget}
            onChange={handleChange}
        /></span>
        </div>
    );
};

export default Budget;