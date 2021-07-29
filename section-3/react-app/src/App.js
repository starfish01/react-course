import logo from './logo.svg';
import './App.css';
import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
    const expenses = [
        {
            id: 'e1',
            name: 'Car Insurance',
            date: new Date(2021, 2, 28),
            amount: 200.30
        },
        {
            id: 'e2',
            name: 'Car Insurance',
            date: new Date(2021, 2, 28),
            amount: 200.30
        }
    ];


    return (
        <div className="App">
            <header className="App-header">
                <Expenses expenses={expenses}/>
            </header>
        </div>
    );
}

export default App;
