import './Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {

    const [currentYear, setYear] = useState('2021');

    const onYearSelectedHandler = (year) => {
        console.log(year);
        setYear(year);
    };

    const filteredExpenses = props.items.filter(item => item.date.getFullYear().toString() === currentYear.toString());

    return (
        <Card className="expenses">
            <ExpensesFilter selected={currentYear} onYearSelected={onYearSelectedHandler} />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpenseList items={filteredExpenses} />
        </Card>
    );

}

export default Expenses;