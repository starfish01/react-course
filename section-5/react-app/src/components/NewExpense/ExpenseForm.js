import './ExpenseForm.css';

import {useState} from "react";

const ExpenseForm = (props) => {

    const [enterTitle, setEnteredTitle] = useState('');
    const [enterAmount, setEnteredAmount] = useState('');
    const [enterDate, setEnterDate] = useState('');

    const titleChangeHandle = (event) => {
        setEnteredTitle(event.target.value);
    }
    const amountChangeHandle = (event) => {
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandle = (event) => {
        setEnterDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            id: Date.now(),
            title: enterTitle,
            amount: enterAmount,
            date: new Date(enterDate)
        };

        props.onSaveExpenseData(expenseData);

        setEnteredAmount('');
        setEnteredTitle('');
        setEnterDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandle} value={enterTitle}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' onChange={amountChangeHandle} value={enterAmount}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2022-12-31' onChange={dateChangeHandle} value={enterDate}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
                <button type='button' onClick={props.onCancelExpense}>Cancel</button>
            </div>
        </form>
    );
}

export default ExpenseForm;