import React from "react"
import AboutUsContainer from "../../components-ui/aboutUsContainer"
import withWrapPage from "../../../HOC/withWrapPage"
import configAuxiliary from "../../../configAuxiliary.json"

const AboutUsPage = () => {
	const AboutUsContainerWithWrapPage = withWrapPage(
		AboutUsContainer,
		configAuxiliary.configHeaderControllerNo
	)
	return <AboutUsContainerWithWrapPage />
}

export default AboutUsPage
