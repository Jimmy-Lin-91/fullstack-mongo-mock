import React from 'react';
import Products from './Products';
import axios from 'axios';

const ProductList = (props) => {
   return(
    <div className='product-list'>
      {props.products.map((product, index) => {
        return (
        <div key={index}>
          <Products product={product} getProducts={props.getProducts}/>
          </div>
        )
      })}
    </div>
  )
}

export default ProductList