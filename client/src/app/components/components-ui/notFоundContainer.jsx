import React from "react"
import { useHistory } from "react-router-dom"
import UniversalButton from "../common/universalButton"

const NotFoundContainer = () => {
	const history = useHistory()
	const handlerBack = () => history.replace("/")
	return (
		<div className="not-found__body">
			<img
				className="not-found__images"
				src="/img/not-found/not-found.jpg"
				alt="Рука с часами. Error 404"
			/>
			<div className="not-found__content">
				<UniversalButton
					onMethod={handlerBack}
					specificalClass="universal-btn not-found__back"
					text="Вернуться на страницу приветствия"
				/>
			</div>
		</div>
	)
}

export default NotFoundContainer
