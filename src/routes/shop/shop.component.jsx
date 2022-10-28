import { Routes, Route } from 'react-router-dom';
import CategoriesPreview from '../categories-preview/categories-preview.component.jsx';
import Category from '../category/category.component.jsx';

import './shop.styles.scss'


const Shop = () => {

    return (
        <Routes>
            {/* The parent Route is set as 'home/*', so is pre-set */}
            <Route index element={<CategoriesPreview />}/>
            <Route path=":category" element={<Category />}/>
        </Routes>

    );
};

export default Shop;
