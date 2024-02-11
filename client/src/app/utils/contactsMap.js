function initializationMap() {
	window.ymaps.ready(init)
	function init() {
		const map = new window.ymaps.Map("map", {
			center: [42.8746, 74.5698],
			zoom: 15,
			controls: ["zoomControl"]
		})
		function getBodyPlacemark(header, body, footer, content) {
			return {
				balloonContentHeader: `<h1 style="color: red; font-weight: bold">${header}</h1>`,
				balloonContentBody: `<div style="font-weight: bold">${body}</div>`,
				balloonContentFooter: footer,
				hintContent: content
			}
		}
		map.behaviors.disable("scrollZoom")
		const myPlacemark = new window.ymaps.Placemark(
			[42.873575, 74.594137],
			getBodyPlacemark(
				"Главный офис",
				"Режим работы 10:00 – 21:00. Адрес: г. Бишкек, ул. Советская, 30",
				"+(996) 555 55 55 55",
				"Fitness офис"
			)
		)
		map.geoObjects.add(myPlacemark)
	}
}

export default initializationMap
