import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import {useState} from "react";

// eslint-disable-next-line no-extend-native
Object.defineProperty(String.prototype, 'capitalize', {
    value: function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    },
    enumerable: false
});

const App = () => {

    const expenses = [
        {
            id: 'e1',
            title: 'Toilet Paper',
            amount: 94.12,
            date: new Date(2020, 7, 14),
        },
        { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
        {
            id: 'e3',
            title: 'Car Insurance',
            amount: 294.67,
            date: new Date(2021, 2, 28),
        },
        {
            id: 'e4',
            title: 'New Desk (Wooden)',
            amount: 450,
            date: new Date(2021, 5, 12),
        },
    ];

    const [currentExpenses, setCurrentExpenses] = useState(expenses);

    const onExpenseAddedHandler = (expense) => {

        // setCurrentExpenses([expense, ...currentExpenses]);

        setCurrentExpenses(prevState => { // safer to keep old snapshot of data
            return [expense, ...prevState];
        });

    }

    return (
        <div>
            <NewExpense onExpenseAdded={onExpenseAddedHandler} />
            <Expenses items={currentExpenses}/>
        </div>
    );
}

export default App;
