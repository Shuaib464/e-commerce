import React from 'react'
import FeaturedSingleProduct from './FeaturedSingleProduct'
import { useSelector } from 'react-redux'


function FeaturedProducts() {
    const productState = useSelector(state => state.productR);
    const selectedCategory = useSelector(state => state.categoryR.selectedCategory)

    if(productState.arrProduct.length == 0){
        return <>loading....</>
    }else{
        let filterProducts = [];
        if(selectedCategory === "Categories"){
            filterProducts = productState.arrProduct;
        } else{
            filterProducts = productState.arrProduct.filter(e => e.category.toUpperCase() == selectedCategory.toUpperCase() )
        }
        return (
            <>
                <div className="container-fluid pt-5 pb-3">
                    <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
                        <span className="bg-secondary pr-3">Featured Products</span>
                    </h2>
                    <div className="row px-xl-5">
                        
                        {
                            filterProducts.map(e => ( <FeaturedSingleProduct product={e} /> ))
                        }
                       
                    </div>
                </div>
    
            </>
        )
    }
    
}

export default FeaturedProducts