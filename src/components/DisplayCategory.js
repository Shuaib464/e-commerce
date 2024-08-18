import React from 'react'
import CategoryDetails from './CategoryDetails'
import { useSelector } from 'react-redux'



function DisplayCategory() {
    const categoryState = useSelector(state => state.categoryR)
    const productState = useSelector(state => state.productR) 
    

    // if(!productState.arrProduct){
    //     return(
    //         <h2>Loading.....</h2>
    //     )
    // } else{
        return (
            <>
                <div className="container-fluid pt-5">
                    <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
                        <span className="bg-secondary pr-3">Categories</span>
                    </h2>
                    <div className="row px-xl-5 pb-3">
                        
                        {
                            categoryState.arrCategory.map(e => (
                                <CategoryDetails  category={e} products={productState.arrProduct} />
                            ))
                        }
                        
                    </div>
                </div>
    
            </>
        )
    }

    
// }

export default DisplayCategory