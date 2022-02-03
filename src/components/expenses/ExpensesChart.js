import Chart from "../Chart/Chart";
const ExpensesChart = (props) => { // Бул компонент Ар бир айда канча рассход болгону жонундо диаграмма тузот
	const chartDataPoints = [
		{ label: 'Jan', value: 0 },
		{ label: 'Feb', value: 0 },
		{ label: 'Mar', value: 0 },
		{ label: 'Apr', value: 0 },
		{ label: 'May', value: 0 },
		{ label: 'Jun', value: 0 },
		{ label: 'Jul', value: 0 },
		{ label: 'Aug', value: 0 },
		{ label: 'Sep', value: 0 },
		{ label: 'Oct', value: 0 },
		{ label: 'Nov', value: 0 },
		{ label: 'Dec', value: 0 },
	]
	for (const expense of props.expenses) {
		// массивдин устунон итерация кылабыз
		const expenseMonth = expense.date.getMonth(); //starting at 0 january => 0
		chartDataPoints[expenseMonth].value += expense.amount; // массив аркылуу переменныйдан келген маалыматты алабыз и ага value ну кошуп коёбуз
	}
	return <Chart dataPoints ={chartDataPoints}/>  // dataPoints деген props алат chartDataPoints ичинде биз берген данныйлар бар
}

export default ExpensesChart
