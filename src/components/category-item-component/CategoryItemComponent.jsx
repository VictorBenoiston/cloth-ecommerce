import React from "react";
import '../category-item-component/category-item.styles.scss'



const CategoryItem = (props) => {
    const {className, title, subtitle, imageUrl} = props.category
    return (
        <div className={`category-container ${className}`}>
            <img src={imageUrl} className={`background-image ${className}`}/>
            <div className={`category-body-container ${className}`}>
                <h2>{title}</h2>
                <p>{subtitle || "Shop now!"}</p>

            </div>
        </div>
    )
}

export default CategoryItem
