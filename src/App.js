import { useState } from 'react'
import './App.css' 
import Expenses from './components/expenses/Expenses'
// import ExpenseItem from './components/ExpenseItem'
import NewExpenses from './components/NewExpenses/NewExpenses'
// import Card from './components/UI/Card'

 
const INIT_STATE = [  //DATA FROM BACKENd-beckendтен келген данныйлар 
	{
		id: 'e1', //Бекендтен келе турган id
		title: 'Toilet Paper', // Данныйдан называниясы
		amount: 399,   // данныйдын количествосу или ценасы
		date: new Date(2025, 2, 14),  // данныйдын датасы
	},
	{
		id: 'e2',
		title: 'Lexus',
		amount: 399,
		date: new Date(2022, 2, 14),
	},
	{
		id: 'e3',
		title: 'Car Instuctor',
		amount: 200,
		date: new Date(2024, 2, 14),
	},
	
]


const helloHandler = () => {
	alert('hello') 
}  // бул функция alert ке hello деген создун чыгышын камсыздайт

const App =()=> { // функциональный компонент
	const [expenses, setExpenses] = useState(INIT_STATE ) //

	const addExpenseDataHendler = (expense) => { 
		console.log(expense);
	setExpenses((PrevExpense) => { // setExpenses массивдин ичиндеги эски данныйларды алат 
			return [expense, ...PrevExpense] //Бул массив озуно expense аркылуу озуно жаны данныйларды алат  ...prevState  эски данныйлар алып, экоону кошуп коёт!
		})
	} //  в этом функции мы возвращаем новый state
	return (
		<div className='App'>
			<h1>Let's get Started!</h1>   {/* возврашает h1 */}
			<NewExpenses onAddExpense={addExpenseDataHendler} />	{/* NewExpenses жаны лист тузгонго жардам берет. Add Expenseти басканда бизге жаны лист чыгат.*/}
			<Expenses items={expenses} />  	{/*Expenses компонентинин ичинде биз берген баардык данныйлар бар ошону бизге jsx  код аркылуу кайтарып берип жатат  */}
			<button onClick={helloHandler}>click</button>  {/*оnClick аркылуу helloHandler ге прослушка койдук  click кнопкасын басканда бизге alert тен hello деген соз чыгат  */}
		</div>
	)
} 


export default App
