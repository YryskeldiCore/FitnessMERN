import React, { useState } from "react"
import PropTypes from "prop-types"
import GoodsList from "./goodsList"
import Pagination from "./pagination"
import getNewArrayPagins from "../../utils/pagination"
import SorteredLine from "../common/sorteredLine"
import sortData from "../../utils/sort"
import configAuxiliary from "../../configAuxiliary.json"
import withMessage from "../../HOC/withMessage"
import { useSelector } from "react-redux"
import { getGoodsData } from "../../store/goods"

const GroupBodyGoods = ({
	selectedFilter,
	searchInput,
	onUpdateSorted,
	sortedState
}) => {
	const sorteredObject = configAuxiliary.configSortedGoods
	const [currentPagin, setCurrentPagin] = useState(1) // state Pagin
	const goods = [...useSelector(getGoodsData())]
	const MAX_GOODS_ON_PAGE = 3
	const handlerUpdatePagin = (id) => setCurrentPagin(id)
	const filteredArray =
		(selectedFilter &&
			selectedFilter.customId !== "42q" &&
			goods.filter((item) => item.category === selectedFilter.name)) ||
		(searchInput &&
			goods.filter((element) =>
				element.name.toLowerCase().includes(searchInput.toLowerCase())
			)) ||
		goods // FILTER
	sortData(filteredArray, sortedState) // SORT

	const lengthGoods = filteredArray.length
	const newArrayGoods = getNewArrayPagins(
		MAX_GOODS_ON_PAGE,
		currentPagin,
		filteredArray
	) // PAGINATIONS

	const handlerArrowPagins = (typeMethod) => {
		if (typeMethod === "decrement") {
			setCurrentPagin((prevState) => {
				return prevState - 1
			})
		}
		if (typeMethod === "increment") {
			setCurrentPagin((prevState) => {
				return prevState + 1
			})
		}
	}
	const configMessageForGoodsList = {
		pathImage: "/img/message/vizor.svg",
		alt: "Визор, иконка поиска.",
		title: "По данному фильтру ничего не найдено.",
		offer: "Попробуйте использовать другую фразу для поиска"
	}
	const GoodsListWithMessage = withMessage(
		GoodsList,
		configMessageForGoodsList,
		newArrayGoods.length
	)
	return (
		<section className="group-body-goods">
			<h2 className="group-body-goods__title">
				<svg
					style={{ width: "39px", height: "48px", marginRight: "7px" }}
					aria-hidden="true"
					focusable="false"
					data-prefix="far"
					data-icon="running"
					role="img"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 416 512"
					className="svg-inline--fa fa-running fa-w-13 fa-3x"
				>
					<path
						fill="#861620"
						d="M126.16 316.86l-19.85 46.28c-1.27 2.95-4.14 4.86-7.35 4.86H24.01C10.76 368 0 378.75 0 392s10.76 24 24.01 24h74.95c22.43 0 42.65-13.31 51.5-33.94l13.55-31.6-9.56-5.77c-11.88-7.18-21.22-16.87-28.29-27.83zM272.15 96c26.52 0 48.03-21.49 48.03-48s-21.5-48-48.03-48-48.03 21.49-48.03 48 21.51 48 48.03 48zm119.91 144.56l-48.4-.17c-3.53-.02-6.6-2.3-7.61-5.66l-13.95-45.92c-9.19-30.19-34.02-53.27-64.82-60.23l-78.25-17.7c-25.73-5.86-52.45.08-73.26 16.22L57.4 164.46c-10.49 8.09-12.43 23.17-4.31 33.66 8.08 10.5 23.23 12.41 33.68 4.31l48.39-37.36c9.46-7.33 21.68-9.92 33.3-7.38l14.88 3.37-35.3 87.35c-10.35 25.62-.69 54.59 22.98 68.91l83.78 50.58a8.004 8.004 0 0 1 3.55 9.05l-33.3 104.47c-3.64 12.75 3.74 26.03 16.49 29.67 2.2.62 4.42.92 6.61.92 10.44 0 20.06-6.86 23.08-17.41l33.3-104.47c6.93-24.25-3.31-50.28-24.9-63.33l-51.85-31.3 41.94-104.8c2.72 3.64 5.06 7.59 6.42 12.07l13.96 45.94c7.21 23.66 28.67 39.61 53.41 39.69l48.4.17h.08c13.23 0 23.97-10.69 24.01-23.92.05-13.26-10.66-24.04-23.94-24.09z"
						className=""
					></path>
				</svg>
				Шагни в спорт уверенно с нами.
			</h2>
			<div className="group-body-goods__sub-title sub-title-group-body">
				<p>
					Товары только от проверенных дистрибьюторов. Только{" "}
					<span className="sub-title-group-body__first-quality">оригинал,</span>{" "}
					только{" "}
					<span className="sub-title-group-body__second-quality">
						качество,
					</span>{" "}
					только{" "}
					<span className="sub-title-group-body__third-quality">
						удобство и комфорт.
					</span>
				</p>
			</div>
			<SorteredLine
				sorteredObject={sorteredObject}
				onUpdateSorted={onUpdateSorted}
				sortedState={sortedState}
			/>
			{lengthGoods > 0 && (
				<Pagination
					onArrow={handlerArrowPagins}
					onUpdatePagin={handlerUpdatePagin}
					current={currentPagin}
					maxGoods={MAX_GOODS_ON_PAGE}
					length={lengthGoods}
				/>
			)}
			<GoodsListWithMessage goods={newArrayGoods} />
		</section>
	)
}

GroupBodyGoods.propTypes = {
	searchInput: PropTypes.string,
	selectedFilter: PropTypes.object,
	onUpdateSorted: PropTypes.func,
	sortedState: PropTypes.object
}

export default GroupBodyGoods
