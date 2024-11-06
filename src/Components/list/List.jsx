import React from 'react'
import api from './ListApi'
import products from './ListApi';
import './List.css'

function List() {
    // console.log(products);

    return (
        <div className='main-div'>
            {products.map(function (item) {
                // console.log(item);
                return (
                    <div className='child'>
                        <div className='serialNumber'>
                            <h3> Serial No.{item.serialNumber} </h3>
                            <h3>  Seller Name={item.sellerName} </h3>
                            <h3> Price=Rs.{item.price} </h3>
                            <h3> Expected Delivery Time={item.deliveryTime} </h3>
                            <button> show all</button>
                        </div>

                    </div>
                )

            })}
        </div>
    )
}

export default List
