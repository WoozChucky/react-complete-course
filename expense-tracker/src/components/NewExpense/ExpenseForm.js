import './ExpenseForm.css'
import {useState} from "react";

function ExpenseForm(props) {

    const [showingForm, setShowingForm] = useState(true);

    const onAddExpenseHandler = () => {
        setShowingForm(true);
    }

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });

    const titleChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredTitle: event.target.value
        });
    };

    const amountChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredAmount: event.target.value
        });
    }

    const dateChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredDate: event.target.value
        });
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: userInput.enteredTitle,
            amount: +userInput.enteredAmount,
            date: new Date(userInput.enteredDate)
        }

        console.log(expenseData);

        setUserInput({
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: ''
        });

        props.onFormSubmitted(expenseData);
    };

    const cancelHandler = (event) => {
        event.preventDefault();

        setUserInput({
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: ''
        });

        setShowingForm(false);
    }

    return (
        <form onSubmit={submitHandler}>
            {
                showingForm && (
                    <div className="new-expense__controls">
                        <div className="new-expense__control">
                            <label>Title</label>
                            <input type="text" value={userInput.enteredTitle} onChange={titleChangeHandler} />
                        </div>
                        <div className="new-expense__control">
                            <label>Amount</label>
                            <input type="number" value={userInput.enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
                        </div>
                        <div className="new-expense__control">
                            <label>Date</label>
                            <input type="date" value={userInput.enteredDate} min="2020-01-01" max="2030-12-31" onChange={dateChangeHandler} />
                        </div>
                        <div className="new-expense__actions">
                            <button type="button" onClick={cancelHandler}>Cancel</button>
                        </div>
                        <div className="new-expense__actions">
                            <button type="submit">Add Expense</button>
                        </div>
                    </div>
                )
            }
            {
                !showingForm && (
                    <div className="new-expense__controls">
                        <div className="new-expense__actions">
                            <button type="button" onClick={onAddExpenseHandler}>Add New Expense</button>
                        </div>
                    </div>
                )
            }
        </form>
    );

}

export default ExpenseForm;