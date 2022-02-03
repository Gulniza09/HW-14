import ExpenseForm from './ExpenseForm'
import './NewExpenses.css'


const NewExpenses = (props) => {
	const seveExpenseDataHandler = (expenseData) => { // Биздин функцияга expenseData аркылуу данныйлар келет 
		
		const dataWithId = {
			...expenseData,  // бизге келген маалыматтар кайра копируется
			id: Math.random().toString(), // келген маалыматтардын ар биринин озунун уникальный id си болот
		}
		// console.log(dataWithId);
props.onAddExpense(dataWithId)
	}
	return (
		<div className='new-expense'>
			<ExpenseForm onSaveExpenseData={seveExpenseDataHandler} /> {/*ExpenseForm ге  onSaveExpenseData props берилди ал props озуно функция алат и ушул жерден данныйлар рендер болот */}
		</div>
	)
}
export default NewExpenses
