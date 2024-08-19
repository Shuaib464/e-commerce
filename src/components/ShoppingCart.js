import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartTotalAmount, getDiscountedPrice, getTotalAmount } from '../BLL/utility';
import { decreaseProduct, increaseProduct, increaseQuantity, removeProduct } from '../redux/features/cartSlice';

function ShoppingCart() {

    const cartState = useSelector(state => state.cartR)
    const dispatch = useDispatch()
    console.log(cartState);
    

    return (
        <div className="container-fluid">
            <div className="row px-xl-5">
                <div className="col-lg-8 table-responsive mb-5">
                    <table className="table table-light table-borderless table-hover text-center mb-0">
                        <thead className="thead-dark">
                            <tr>
                                <th>Products</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody className="align-middle">
                            
                           {
                            cartState.arrCart.map((e, i) => (
                                <tr key={i}>
                                <td className="align-middle">
                                    <img src={e.product.thumbnail} alt="" style={{ width: 50 }} />{" "}
                                    {e.product.title}
                                </td>
                                <td className="align-middle">${getDiscountedPrice(e.product.price, e.product.discountPercentage)} <del>${e.product.price}</del></td>
                                <td className="align-middle">
                                    <div
                                        className="input-group quantity mx-auto"
                                        style={{ width: 100 }}
                                    >
                                        <div className="input-group-btn">
                                            <button onClick={()=> dispatch(decreaseProduct(e.product))} className="btn btn-sm btn-primary btn-minus">
                                                <i className="fa fa-minus" />
                                            </button>
                                        </div>
                                        <input
                                            readonly
                                            type="text"
                                            className="form-control form-control-sm bg-secondary border-0 text-center"
                                            value={e.quantity}
                                        />
                                        <div className="input-group-btn">
                                            <button 
                                                onClick={() => dispatch(increaseProduct(e.product))} 
                                                className="btn btn-sm btn-primary btn-plus"
                                                >
                                                <i className="fa fa-plus" />
                                            </button>
                                        </div>
                                    </div>
                                </td>
                                <td className="align-middle">${(getDiscountedPrice(e.product.price, e.product.discountPercentage) * e.quantity).toFixed(2) }</td>
                                <td className="align-middle">
                                    <button 
                                        onClick={() => dispatch(removeProduct(e.product))} 
                                        className="btn btn-sm btn-danger"
                                        >   
                                        <i className="fa fa-times" />
                                    </button>
                                </td>
                            </tr>
                            ))
                           }

                        </tbody>
                    </table>
                </div>
                <div className="col-lg-4">
                    <form className="mb-30" action="">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control border-0 p-4"
                                placeholder="Coupon Code"
                            />
                            <div className="input-group-append">
                                <button className="btn btn-primary">Apply Coupon</button>
                            </div>
                        </div>
                    </form>
                    <h5 className="section-title position-relative text-uppercase mb-3">
                        <span className="bg-secondary pr-3">Cart Summary</span>
                    </h5>
                    <div className="bg-light p-30 mb-5">
                        <div className="border-bottom pb-2">
                            <div className="d-flex justify-content-between mb-3">
                                <h6>Subtotal</h6>
                                <h6>$150</h6>
                            </div>
                            <div className="d-flex justify-content-between">
                                <h6 className="font-weight-medium">Shipping</h6>
                                <h6 className="font-weight-medium">$10</h6>
                            </div>
                        </div>
                        <div className="pt-2">
                            <div className="d-flex justify-content-between mt-2">
                                <h5>Total</h5>
                                <h5>${getCartTotalAmount(cartState.arrCart)}</h5>
                            </div>
                            <button className="btn btn-block btn-primary font-weight-bold my-3 py-3">
                                Proceed To Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ShoppingCart