import './ExpenseDate.css'

function ExpenseDate(props) {

    const day = props.date.toLocaleString('pt-PT', { day: '2-digit'});
    const month = props.date.toLocaleString('pt-PT', { month: 'long'}).capitalize();
    const year = props.date.getFullYear();

    return (
      <div className="expense-date">
          <div className="expense-date__year">{year}</div>
          <div className="expense-date__month">{month}</div>
          <div className="expense-date__day">{day}</div>
      </div>
    );
}

export default ExpenseDate;