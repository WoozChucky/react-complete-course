import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

function Expenses(props) {

    return (
        <Card className="expenses">
            {
                props.items.map((item, index) => <ExpenseItem key={item.id} title={item.title} date={item.date} amount={item.amount} />
            )}
        </Card>
    );

}

export default Expenses;