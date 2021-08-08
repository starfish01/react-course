import './Expenses.css'
import Card from "../UI/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import {useState} from "react";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {

    const [enteredYear, setEnteredYear] = useState('2020');
    const changeYearHandler = year => {
        setEnteredYear(year);
    }

    const filteredExpenseList = props.expenses.filter(expense => expense.date.getFullYear().toString() === enteredYear);


    return (
        <Card className="expenses">
            <ExpenseFilter selectedYear={enteredYear} onChangeYearFilter={changeYearHandler}/>
            <ExpensesList items={filteredExpenseList}/>
        </Card>
    );
}

export default Expenses;