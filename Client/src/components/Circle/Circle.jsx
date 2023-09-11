import styledCircle from './Circle.module.css'

const Circle = ({ right }) => {
	let circleClass = right
		? styledCircle.positionRight
		: styledCircle.positionLeft

	return <div className={`${styledCircle.circle} ${circleClass}`}>Circle</div>
}
export default Circle
