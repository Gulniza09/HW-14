import { useState } from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'

function ExpenseItem(props) {
	// Биз бул жерге javascript код жазсак болот

	const [title,setTitle]= useState(props.title);  //title дын ичине бизге биринчи значение келип тушот (undefained).setTitle га-функция келип тушот.
	// useState() бул биз эгерде title ды 
	// озгортконубуздо кайрадан биздин компонентти 
	// обновление кылып чыгат то есть занова переоценивает


	// let expenseTitle = props.title // title дын ичиндеги данныйларды props аркылуу алып жатабыз и expenseTitle деген переменныйдын ичине сактап жатабыз
	const expenseAmount = props.amount  //amount тун ичиндеги данныйларды props аркылуу алып жатабыз 
    
	// бул event  биздин title ды озгортот
	const updateTitleHandler = () => {
		setTitle('updated')
		// expenseTitle = 'updated!' // Title  басканда ал update ге озгорот
	}
	

	return (
		<div className='expense-item'>
			<ExpenseDate date={props.date} />   {/*  ExpenseDate деген компонентти рендер кылып жатабыз. Анын ичинде propsаркылуу алынган ExpensesData деген компоненттен алынган данныйлар бар*/}
			<div className='expense-item__description'>{title}</div>  {/* expenseTitle деген переменныйдан ичиндеги данныйларды  рендер кылып жатабыз  */}
			<div className='expense-item__price'> ${expenseAmount}</div>  {/*expenseAmount деген переменныйдан ичиндеги данныйларды  рендер кылып жатабыз */}
			<button onClick={updateTitleHandler}>Update Title</button>  {/*Update Title кнопканы туздук*/}
		</div>
	)
}
export default ExpenseItem
