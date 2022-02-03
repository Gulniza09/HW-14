import './ExpenseDate.css'
// Датаны корсоткон озунчо бир компонент ачтык 
function ExpenseDate(props){ // props ка данныйларыбызды берип жатабыз
    const month = props.date.toLocaleString('en-Us',{ month:'long'}); // это данный про мясяц и аны биз пропска берип жатабыз
	const day = props.date.toLocaleString('en-Us',{ day:'2-digit'});  // это данный про дени
	const year = props.date.getFullYear();  // это данный про годы


    return(
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>           
            <div className="expense-date__day">{day}</div>          {/* ай,жыл,кундорду render  кылып кайтарып берип жатабыз */}
            <div className="expense-date__year">{year}</div>          
        </div>
    )
    
}
export default ExpenseDate