import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expenses = (props) => {
    return (
        <Card className="expenses">
            <ExpenseItem name={props.expenses[0].name} amount={props.expenses[0].amount} date={props.expenses[0].date}/>
        </Card>
    );
}

export default Expenses;