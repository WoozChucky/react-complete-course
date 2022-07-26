import './NewExpense.css'

import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {

    const onFormSubmittedHandler = (data) => {
        props.onExpenseAdded({...data, id: Math.random().toString()});
    };

    return (
        <div className="new-expense">
            <ExpenseForm onFormSubmitted={onFormSubmittedHandler} />
        </div>
    );

}

export default NewExpense;