import './ExpensesList.css'
import ExpenseItem from './ExpenseItem'
const ExpensesList =({ filtired,items,expenses})=>{ 

if (filtired === 'All') {
    return items.map((element) => {
        return (
            <ExpenseItem
                key={element.id}
                title={element.title}
                amount={element.amount}
                date={element.date}
            />
        )
    })
}
if(expenses.length ===0){
    return <h2 className='expenses-list__fallback'>
        No expenses Found
    </h2>
}
return <ul className='expenses-list'>
    {expenses.map(expense =>{
       
       return(<ExpenseItem
					title={expense.title}
					amount={expense.amount}
					date={expense.date}
					key={expense.id} 
				/>
       )
    })}
</ul>

}

export default ExpensesList;
