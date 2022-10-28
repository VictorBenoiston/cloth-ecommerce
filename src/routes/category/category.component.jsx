import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { CategoriesContext } from '../../context/categories.context.jsx';
import ProductCard from '../../components/product-card/product-card.component.jsx';

import './category.styles.scss';

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap])


    return (
        <div className='category-container'>
            <h2 className='title'>{category.toUpperCase()}</h2>
            <div className='category-container-cards'>
                {products &&
                    products.map((product) => <ProductCard key={product.id} product={product} />)
                }
            </div>
        </div>

    )

}


export default Category;
