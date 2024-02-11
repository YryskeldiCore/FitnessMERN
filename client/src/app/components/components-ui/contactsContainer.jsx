import React, { useEffect } from "react"
import ContactHeadBlock from "./contactHeadBlock"
import initializationMap from "../../utils/contactsMap"
import ContactInfo from "./contactInfo"

const ContactsContainer = () => {
	useEffect(() => {
		initializationMap()
	}, [])
	return (
		<div className="contact container">
			<h1 className="contact__global-title chief-title">Контакты</h1>
			<ContactHeadBlock />
			<h2 className="contact__title chief-sub-title">Офис</h2>
			<div className="contact__office">
				г.Бишкек, ул. Советская, 35
			</div>
			<div className="contact__time">Режим работы 10:00 – 21:00</div>
			<div id="map"></div>
			<ContactInfo />
		</div>
	)
}

export default ContactsContainer
