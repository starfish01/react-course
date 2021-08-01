
import './App.css';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {

    const expenses = [
        {
            id: 'e1',
            title: 'Car Insurance',
            date: new Date(2021, 2, 28),
            amount: 200.30
        },
        {
            id: 'e2',
            title: 'Car Insurance',
            date: new Date(2021, 2, 28),
            amount: 200.30
        }
    ];

    const addExpenseHandler = expense => {
        console.log(expense);
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
