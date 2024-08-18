import React from 'react'
import { useSelector } from 'react-redux'

function getFilteredProductOfCategory(categoryName,arrProduct){
    var arrFilteredProduct = arrProduct.filter(e => e.category.toUpperCase() == categoryName.toUpperCase());

    return arrFilteredProduct;
}

function CategoryDetails(props) {

    if(props.products.length == 0){
        return(
            <h2>Loading...</h2>
        )
    } else{
        return (
            <>
                <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                    <a className="text-decoration-none" href="">
                        <div className="cat-item d-flex align-items-center mb-4">
                            <div className="overflow-hidden" style={{ width: 100, height: 100 }}>
                                <img className="img-fluid" src={props.category.url} alt="" />
                            </div>
                            <div className="flex-fill pl-3">
                                <h6>{props.category.name}</h6>
                                <small className="text-body">{getFilteredProductOfCategory(props.category.name, props.products).length !== 0 ? getFilteredProductOfCategory(props.category.name, props.products).length: ''}</small>
                            </div>
                        </div>
                    </a>
                </div>
            </>
        )
    }

    
}

export default CategoryDetails