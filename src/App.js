import './App.css'
import ExpenseItem from './components/ExpenseItem'

function App() {
	const expenses = [
		{
			id: 'e1',
			title: 'Toilet Paper',
			amount: 1.5,
			date: new Date(2020, 2, 14),
		},
		{
			id: 'e2',
			title: 'Lexus',
			amount: 3.5,
			date: new Date(2022, 2, 14),
		},
		{
			id: 'e3',
			title: 'Car Instuctor',
			amount: 200,
			date: new Date(2021, 2, 14),
		},
	]
	return (
		<div className='App'>
			<ExpenseItem
				title={expenses[0].title}
				amount={expenses[0].amount}
				date={expenses[0].date}
			/>
			<ExpenseItem
				title={expenses[1].title}
				amount={expenses[1].amount}
				date={expenses[1].date}
			/>
			<ExpenseItem
				title={expenses[2].title}
				amount={expenses[2].amount}
				date={expenses[2].date}
			/>
		</div>
	)
}

export default App
