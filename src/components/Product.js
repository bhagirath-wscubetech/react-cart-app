import React from 'react'
import { useDispatch } from 'react-redux';
import { actions } from '../redux/actions';
export default function Product(pros) {
    const dispatch = useDispatch()
    const data = pros.data;
    const style = !data.stock ? { filter: "grayscale(1)" } : {};
    return (
        <div className="col-lg-3 mt-3" style={style}>
            <div className="card">
                <img className="card-img-top" src={data.image} alt="" />
                <div className="card-body">
                    <h4 className="card-title">{data.name}</h4>
                    <p className="card-text">{data.description}</p>
                    <p>
                        <b>
                            <s> Rs. {data.original_price} /- </s>
                        </b>
                        <br />
                        <b>
                            Rs. {data.discounted_price}  /-
                        </b>
                    </p>
                    <button className="btn btn-primary m-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to cart" onClick={() => dispatch({
                        type: actions.ADD_PRODUCT,
                        payload: data.id,
                        price: data.discounted_price
                    })}>
                        <i className="fas fa-shopping-cart"></i>
                    </button>
                    <button className="btn btn-danger m-1" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Add to wish list" onClick={
                        () => dispatch({
                            type: actions.ADD_WISH,
                            payload: data.id
                        })
                    }>
                        <i className="fas fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}
