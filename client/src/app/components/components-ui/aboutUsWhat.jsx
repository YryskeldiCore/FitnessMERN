import React from "react"
import ImageLink from "../common/imageLink"

const AboutUsWhat = () => {
	return (
		<div className="about-us__what what-about">
			<h2 className="what-about__title chief-sub-title">
				В чем причина нашего успеха?
			</h2>
			<div className="what-about__text">
				Во-первых, мы особенно дорожим своей безупречной репутацией и регулярно
				повышаем планку качества сервиса. Зная, насколько хрупким может
				оказаться доверие покупателя, специалисты Fitness всегда
				ориентируются на интересы клиентов. Во-вторых, мы поставляем только
				самую качественную и надежную продукцию.
			</div>
			<div className="what-about__text what-about__text_last">
				На сегодняшний день в каталоге Fitness представлены лучшие мировые
				бренды спортивного оборудования, среди которых Sole Fitness, Nautilus
				Fitness, Eclipse и др. Продукция
				этих марок отличается безупречным балансом качества и функциональности,
				возглавляет ведущие мировых рейтингах. Если вы ищете надежного поставщика спортивного
				оборудования - мы рады видеть вас в числе наших партнеров и готовы
				предложить лучшие условия для сотрудничества!
			</div>
			<div className="what-about__row">
				<div className="what-about__column">
					<div className="what-about__images">
						<img src="/img/aboutUs/trening.jpg" alt="Гантели" />
					</div>
				</div>
				<div className="what-about__column what-about__column_t">
					<ImageLink
						pathImage="/img/aboutUs/icon/transporter.svg"
						alt="Транспортер"
						classes="what-about__link"
					/>
					Мы имеем довольно широкий, и при том качественный ассортимент. Вся
					продукция в нашем интернет-магазине продается по ценам, которые в
					среднем на 20-25% ниже, чем Вам смогут предложить други магазины.
				</div>
				<div className="what-about__column what-about__column_t">
					<ImageLink
						pathImage="/img/aboutUs/icon/fire.svg"
						alt="Пламя"
						classes="what-about__link"
					/>
					Приятно сообщить, что в наш магазин обращаются покупатели самых разных
					возрастов. Это предприниматели, и
					домохозяйки, и студенты, среди наших клиентов часто можно видеть отцов
					большого семейства, семейные пары и пенсионеры. Все, от мало до
					велика, оценили наш сервис, качество и доступные всем цены.
				</div>
				<div className="what-about__column">
					<div className="what-about__images">
						<img src="/img/aboutUs/girl.jpg" alt="Фитнесс модель" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default AboutUsWhat
