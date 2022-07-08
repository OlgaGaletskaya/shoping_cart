import React from 'react'
import ProductItem from './ProductItem'

const ProductList = ({products, remove, sale}) => {
  return (
    <div>
        <h1>Список добавленных товаров</h1>
        
         {products.map((product, index) =>
          <ProductItem remove={remove} sale={sale} number={index+1} product = {product} key ={product.id}/>
          )}
    </div>
  )
}

export default ProductList