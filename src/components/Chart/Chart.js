import './Chart.css'
import ChartBar from './ChartBar'
const Chart = (props) => {
	// dataPoints тон келген данныйлар props ко келет
	const dataPointsValues = props.dataPoints.map((data) => data.value) // переменныйга props тон келген dataPoints менен кошо данныйлар келет
	const totalMax = Math.max(...dataPointsValues) //Самый максимальный расходту алып берет.Деструктризациянын жардамы менен

	return (
		<div className='chart'>
			{props.dataPoints.map((dataPoint) => (
				<ChartBar
					key={dataPoint.label} // Ар бир dataPoint тун уникальный ключун алабыз
					value={dataPoint.value} // dataPoint тун ар бир значениесин алабыз ушунун жардамы менен озгортсок болот
					maxValue={totalMax} // самый максимальный  значениясын алат
					label={dataPoint.label} // айларды алган label
				/>
			))}
		</div>
	)
}
export default Chart
