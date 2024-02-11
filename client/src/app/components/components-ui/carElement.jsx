import React from "react"
import PropTypes from "prop-types"
import ImageCard from "../common/imageCard"
import UniversalButton from "../common/universalButton"
import config from "../../config.json"

const CarElement = ({ count, name, price, _id, onDelete, pathServerImage }) => {
	return (
		<div className="car-element">
			<div className="car-element__container">
				<div className="car-element__column">
					<ImageCard
						imagesPath={`${config.endPointForImg}${pathServerImage?.replaceAll(
							"\\",
							"/"
						)}`}
						name={name}
						to={`/home/${_id}`}
					/>
				</div>
				<div className="car-element__column">
					<div className="car-element__text">
						<div className="car-element__id">{`Идентификатор: ${_id}`}</div>
						<div className="car-element__name">{`Наименование: ${name}`}</div>
					</div>
				</div>
				<div className="car-element__column">
					<div className="car-element__count">{`Количество: ${count}`}</div>
				</div>
				<div className="car-element__column">
					<div className="car-element__price">{`Цена за (${count}x): ${count * price}сом`}</div>
				</div>
				<div className="car-element__column">
					<UniversalButton
						onMethod={onDelete}
						isHandOver={true}
						data={_id}
						specificalClass="universal-btn car-element__btn"
						text="Удалить"
					/>
				</div>
			</div>
		</div>
	)
}

CarElement.propTypes = {
	count: PropTypes.number,
	imagesPath: PropTypes.string,
	name: PropTypes.string,
	price: PropTypes.number,
	_id: PropTypes.string,
	onDelete: PropTypes.func,
	pathServerImage: PropTypes.string
}

export default CarElement
