import React from 'react'
import MyButton from './UI/button/MyButton';


const ProductItem = (props) => {
  
  return (
    <div className='item'>
        <div className="item__content">
            <div className='item__main' >
                {props.number}
              <div className='item__id'>{props.product.id}</div>
              <div className='item__name'>{props.product.title}</div>
            </div>
            { props.sale == 0
              ?
                <div className='item__price'>
                  <div className="item__price-num">{props.product.price} </div>
                  <div className="item__price-txt">руб.</div>
                </div>
              :
              <div className='item__price'>
                  <div className="item__prime-price-num">{props.product.price} </div>
                  <div className="item__price-num">{props.product.price - (props.product.price*props.sale)/100 } </div>
                  <div className="item__price-txt">руб.</div>
                </div>
            }
          </div>
          <div className='item__btn'>
            <MyButton onClick={() => props.remove(props.product)}>  — </MyButton>
        </div>

    </div>
  )
}

export default ProductItem