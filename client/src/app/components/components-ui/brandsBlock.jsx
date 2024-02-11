import React, { useState } from "react"
import BrandsHeadFilter from "./brandsHeadFilter"
import BrandsSubjectFilter from "./brandsSubjectFilter"
import BrandsList from "./brandsList"
import doubleFilter from "../../utils/doubleFilter"
import withMessage from "../../HOC/withMessage"
import { getBrandsCategoryData } from "../../store/brandCategory"
import { getBrandCategorySubjectData } from "../../store/brandCategorySubject"
import { useSelector } from "react-redux"
import { getBrands } from "../../store/brand"
import { Link } from "react-router-dom"

const BrandsBlock = () => {
	const [categoryHead, setCategoryHead] = useState(null)
	const [categorySubject, setCategorySubject] = useState(null)
	const brandCategory = useSelector(getBrandsCategoryData())
	const brandsSubject = useSelector(getBrandCategorySubjectData())
	const brands = useSelector(getBrands())
	const handlerHeadCategory = (category) => {
		if (categorySubject && category.customId === "b-all") {
			setCategorySubject(null)
		}
		setCategoryHead(category)
	}
	const handlerSubjectCategory = (category) => setCategorySubject(category)
	const newArrayBrands = doubleFilter(categoryHead, categorySubject, brands)
	const configMessageForBrandsList = {
		pathImage: "/img/message/comment-dots.svg",
		alt: "Иконка сообщения",
		title: "По отмеченным фильтрам ничего нет",
		offer: "Попробуйте выбрать другую комбинацию категорий"
	}
	const BrandsListWithMessage = withMessage(
		BrandsList,
		configMessageForBrandsList,
		newArrayBrands.length,
		null
	)
	return (
		<React.Fragment>
			<BrandsHeadFilter
				currentCategory={categoryHead}
				category={brandCategory}
				onUpdate={handlerHeadCategory}
			/>
			<BrandsSubjectFilter
				currentCategory={categorySubject}
				subjectCategory={brandsSubject}
				onUpdate={handlerSubjectCategory}
			/>
			<div className="brands__line">
				<div className="brands__col">
					<nav className="brends__menu menu-brends">
						<ul className="menu-brends__list">
							{newArrayBrands.filter(item => item.additionalPage).map((item, index) => (
								<li key={index}>
									<Link to={`/brands/${item._id}`} className="menu-brends__link">
										{item.name}
									</Link>
								</li>
							))}
						</ul>
					</nav>
				</div>
				<div className="brands__col">
					<BrandsListWithMessage brands={newArrayBrands}/>
				</div>
			</div>
		</React.Fragment>
	)
}

export default BrandsBlock
