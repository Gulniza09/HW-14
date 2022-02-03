import React from 'react'
import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import ExpensesFilter from './ExpensesFiltir'
import { useState } from 'react'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'

function Expenses(props) {
	const [filteredYear, setFilteredYear] = useState('2022')

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear)
	} // метод который используется внутри компонента ExpensesFilter вызывается как пропс для данных
	const filteredExpenses = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear
	}) //

	// let expensesContent = <p>Not Expenses Found</p>
	// if (filteredExpenses.length > 0) {
	// 	expensesContent = filteredExpenses.map((el) => {
	// 		return (
	// 			<ExpenseItem
	// 				title={el.title}
	// 				amount={el.amount}
	// 				date={el.date}
	// 				key={el.id} //  ар бир элементтин озунун уникальный id си болушу керек.
	// 			/>
	// 		)
	// 	})
	// }
	// if (filteredYear === 'All'){
	// 	expensesContent = props.items.map((el) => {
	// 		return (
	// 			<ExpenseItem
	// 				title={el.title}
	// 				amount={el.amount}
	// 				date={el.date}
	// 				key={el.id}
	// 			/>
	// 		)
	// 		})
	// 	}
	return (
		<Card className='expenses'>
			<ExpensesFilter
				selected={filteredYear}
				onChangeFilter={filterChangeHandler} //onChangeFilter деген props ка filterChangeHandler обработчикти беребиз
			/>
			<ExpensesChart expenses ={filteredExpenses} /> 
			<ExpensesList expenses ={filteredExpenses}  />
		</Card>
	)
}

export default Expenses
