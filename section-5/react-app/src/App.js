
import './App.css';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import {useState} from "react";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        title: 'Chocolate',
        date: new Date(2021, 2, 15),
        amount: 10.30
    },
    {
        id: 'e2',
        title: 'Car Insurance',
        date: new Date(2021, 3, 28),
        amount: 200.30
    }
];

const App = () => {

    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const addExpenseHandler = expense => {
        setExpenses(prevExpenses => {
            return [expense, ...prevExpenses];
        });
    }

    return (
        <div className="App">
            <header className="App-header">

                <NewExpense onAddExpense={addExpenseHandler}/>
                <Expenses expenses={expenses}/>
            </header>
        </div>
    );
}

export default App;
