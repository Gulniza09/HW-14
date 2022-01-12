import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'

function ExpenseItem(props) {
	const expenseDate = props.date
	const expenseTitle = props.title
	const expenseAmount = props.amount

	return (
		<div className='expense-item'>
			<ExpenseDate date={props.date} /> 
			<div className='expense-item__description'>{expenseTitle}</div>
			<div className='expense-item__price'> ${expenseAmount}</div>
		</div>
	)
}
export default ExpenseItem
