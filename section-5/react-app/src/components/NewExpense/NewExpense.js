import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
import {useState} from "react";

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false);

    const SaveExpenseData = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData
        };
        props.onAddExpense(expenseData)
        setIsEditing(false);
    }

    const CancelExpenseHandler = () => {
        setIsEditing(false);
    }

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    let displayForm = <button onClick={startEditingHandler}>Add New Expense</button>;

    if (isEditing) {
        displayForm = <ExpenseForm onCancelExpense={CancelExpenseHandler} onSaveExpenseData={SaveExpenseData}/>
    }

    return (
        <div className="new-expense">
            {displayForm}
        </div>
    );
};

export default NewExpense;