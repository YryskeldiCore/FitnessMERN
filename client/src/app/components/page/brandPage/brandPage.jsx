import React from "react"
import BrandContainer from "../../components-ui/brandContainer"
import withWrapPage from "../../../HOC/withWrapPage"

const BrandPage = () => {
	const BrandContainerWithWrapPage = withWrapPage(
		BrandContainer,
		null,
		true,
		true
	)
	return <BrandContainerWithWrapPage />
}

export default BrandPage
