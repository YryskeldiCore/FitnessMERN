import React, { useEffect } from "react"
import showElementsNumber from "../../utils/showNumberElements"
import AboutUsGeography from "./aboutUsGeography"
import AboutUsWe from "./aboutUsWe"
import AboutUsWhat from "./aboutUsWhat"
import IndicatorElement from "./indicatorElement"
import configAuxiliary from "../../configAuxiliary.json"

const AboutUsContainer = () => {
	useEffect(() => {
		showElementsNumber()
	})
	const arrayIndicators = configAuxiliary.aboutUsStatistics
	return (
		<div className="about-us container">
			<h1 className="chief-title about-us__title">О компании</h1>
			<div className="about-us__start-img-row start-img-row">
				<div className="start-img-row__column">
					<div className="start-img-row__block">
						<h2 className="start-img-row__title">
							<span>Fitness</span> — надежный партнер с 2005 года для сотен
							компаний в КР.
						</h2>
					</div>
				</div>
				<div className="start-img-row__column">
					<div className="start-img-row__image">
						<img
							src="/img/aboutUs/fitness.jpg"
							alt="Магазин спортивных товаров Fitness"
						/>
					</div>
				</div>
			</div>
			<div className="about-us__statistics">
				<div className="about-us__text">
					За годы успешного развития нам удалось консолидировать в своем
					ассортименте продукцию лучших мировых брендов, собрать команду
					профессионалов, завоевать доверие десятков тысяч лояльных покупателей и
					стать настоящим лидером рынка.
				</div>
				<div className="about-us__indicators indicators-row">
					{arrayIndicators.map((item, index) => (
						<IndicatorElement key={index} {...item} />
					))}
				</div>
			</div>
			<AboutUsGeography/>
			<AboutUsWe/>
			<AboutUsWhat/>
		</div>
	)
}

export default AboutUsContainer
