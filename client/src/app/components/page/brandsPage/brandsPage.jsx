import React from "react"
import BrandsContainer from "../../components-ui/brandsContainer"
import withWrapPage from "../../../HOC/withWrapPage"
import configAuxiliary from "../../../configAuxiliary.json"

const BrandsPage = () => {
	const BrandsContainerWithWrapPage = withWrapPage(
		BrandsContainer,
		configAuxiliary.configHeaderControllerNo,
		false,
		true
	)
	return <BrandsContainerWithWrapPage />
}

export default BrandsPage
