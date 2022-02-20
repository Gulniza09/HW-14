import { useState } from 'react'
import './ExpenseForm.css'
const ExpenseForm = (props) => {
	const [title, setTitle] = useState('')
	const [amount, setAmount] = useState('')
	const [date, setDate] = useState('')
	const [show,setShow]=useState(false)


	// __________VERSION 1____________
	const inputChangeHandler = (event) => { // События журуп жатат
		const currentInput = event.target.name // name  аркылуу данныйга доступ алып жатабыз
		if (currentInput === 'title') {    // currentInput переменныйга биздин данныйыбыз келип тушот анын ичинен биз только title ды корсотуп бер деп жазып жатабыз
			setTitle(event.target.value)   //setTitle функциясынын ичиндеги данныйды корсотуп берет 
		} else if (currentInput === 'amount') {
			setAmount(event.target.value)
		} else if (currentInput === 'date') {
			setDate(event.target.value)
		}
	}

	const submitHandler = (event) => { //Button дын событиясы
		event.preventDefault()  //жазган нерсебиз перезагрузка болуп кетип очуп калат.preventDefault что-бы отключить действию по умолчанию форму
		
		const dataWithId = {
			title,
			amount,
			date: new Date(date) // дайыма жаны датаны корсотуп турат
		}
		props.onSaveExpenseData(dataWithId)  // currentData га биздин данныйлар келет аны пропс аркылуу onSaveExpenseData берип жатабыз 
	}
	let showExpenses 
	if(show){
		showExpenses =(
			<>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Title</label> {/*Название инпута  */}
					<input
						name='title'
						type='text'
						value={title} //  последний значениени input ка корсотуп берет
						onChange={inputChangeHandler} // Биз интупка жазган тексттибиз onChange теги inputChangeHandler функцияга барат и жаны значение алат
					/>
				</div>
				<div className='new-expense__control'>
					<label>Amount</label>
					<input
						name='amount'
						type='number'
						min='0.1'  //Номер канчадан башталышы керектигин корсотуп турат
						step='1'
						onChange={inputChangeHandler} value={amount}
					/>
				</div>
				<div className='new-expense__control'>
					<label>Date</label>
					<input
						name='date'
						type='date'
						min='2022-01-01'
						onChange={inputChangeHandler} value={date} //
					/>
				</div>
			</div>
			<div className='new-expense__actions'>
				<button type='submit'>Add Expense</button> {/* Add Expense деген кнопка */}
				<button onClick={()=>setShow(false)}>Cencel</button>
			</div>
			</>
		)
	}else{
		showExpenses=(
			<button onClick={()=>setShow(true)}>Add new expense</button>
		)
	}
	
	return (
		<form onSubmit={submitHandler}> 
			{showExpenses}
		</form>
	)
}
export default ExpenseForm
