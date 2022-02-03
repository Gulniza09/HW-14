import './ChartBar.css'
const ChartBar = (props) => {
	//Данныйлар пропс аркылуу келет
	let barFillHeight = '0%' // Биздин калонкаларды кандай толтурулушу керектигин корсотот
	if (props.maxValue > 0) {
		// келген данный maxValue 0 дон чонбу
		barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%' //Биздин калонка ушул проценттерге жараша толтурулат
	}
	return (
		<div className='chart-bar'>
			<div className='chart-bar__inner'>
				<div
					className='chart-bar__fill'
					style={{ height: barFillHeight }}  // диаграмманын узундугун корсотот 
				></div>
			</div>
			<div className='chart-bar__label'>{props.label}</div>  
            {/* label ден келген айлар ушул дивке келип тушот */}
		</div>
	)
}
export default ChartBar
