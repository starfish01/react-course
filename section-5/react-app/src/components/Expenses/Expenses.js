import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import {useState} from "react";

const Expenses = (props) => {

    const [enteredYear, setEnteredYear] = useState('2020');
    const changeYearHandler = year => {
        setEnteredYear(year);
    }

    return (
        <Card className="expenses">
            <ExpenseFilter selectedYear={enteredYear} onChangeYearFilter={changeYearHandler}/>
            <ExpenseItem name={props.expenses[0].name} amount={props.expenses[0].amount} date={props.expenses[0].date}/>
        </Card>
    );
}

export default Expenses;