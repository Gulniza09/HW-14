import './ExpensesList.css'
import ExpenseItem from './ExpenseItem'
const ExpensesList =(props)=>{ //props Филтрованный массив алат
if(props.expenses.length ===0){
    return <h2 className='expenses-list__fallback'>
        No expenses Found
    </h2>
}

return <ul className='expenses-list'>
    {props.expenses.map(expense =>{
       
       return(<ExpenseItem
					title={expense.title}
					amount={expense.amount}
					date={expense.date}
					key={expense.id} //  ар бир элементтин озунун уникальный id си болушу керек.
				/>
       )
    })}
</ul>
}
export default ExpensesList;
