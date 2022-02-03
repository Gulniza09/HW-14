import React from 'react'
import Card from '../UI/Card'
import './Expenses.css'
import ExpensesFilter from './ExpensesFiltir'
import { useState } from 'react'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'

function Expenses({items}) {
	const [filteredYear, setFilteredYear] = useState('2022')

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear)
	} 
	const filteredExpenses = items.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear
	}) 
	return (
		<Card className='expenses'>
			<ExpensesFilter
				selected={filteredYear}
				onChangeFilter={filterChangeHandler} 
			/>
			<ExpensesChart expenses ={filteredExpenses} /> 
			<ExpensesList expenses ={filteredExpenses} filtired ={filteredYear} items={items}  />
		</Card>
	)
}

export default Expenses
