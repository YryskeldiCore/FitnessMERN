import React from "react"
import NotFoundContainer from "../../components-ui/notFоundContainer"
import withWrapPage from "../../../HOC/withWrapPage"

const NotFoundPage = () => {
	const NotFoundContainerWithWrapPage = withWrapPage(NotFoundContainer)
	return <NotFoundContainerWithWrapPage />
}

export default NotFoundPage
