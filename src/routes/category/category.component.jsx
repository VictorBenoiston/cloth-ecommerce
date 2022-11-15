import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ProductCard from '../../components/product-card/product-card.component.jsx';
import Spinner from '../../components/spinner/spinner.component'

import { selectCategoriesIsLoading, selectCategoriesMap } from '../../store/categories/category.selector.js';

import './category.styles.scss';

const Category = () => {
    const { category } = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap])


    return (
        <div className='category-container'>
            <h2 className='title'>{category.toUpperCase()}</h2>
            {isLoading ? (<Spinner />)
                    : (<div className='category-container-cards'>
                        {products &&
                            products.map((product) => (<ProductCard key={product.id} product={product} />))
                        }
                    </div>)}
        </div>
    )

}


export default Category;
