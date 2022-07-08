import React, { useState } from 'react'
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';


const ProductAdd = ({create}) => {
    const [product, setProduct] = useState ({id: Date.now(), title:'', price:''})

    const addNewProduct=(e) => {
        e.preventDefault()
        const newProduct ={
            ...product
        }
        create(newProduct)
        setProduct({id: Date.now(), title:'', price:''})
    }


  return (
    <form className='form'>
          <div className="form__input">
              <div className = "form__id">
                <MyInput
                  value = {product.id}
                  onChange = {e => setProduct({...product, id: e.target.value})}
                  type="number"
                  placeholder='id'
                />
              </div>
              <div className = "form__title">
                <MyInput
                  value = {product.title}
                  onChange = {e => setProduct({...product, title: e.target.value})}
                  type="text"
                  placeholder='Название'
                />
              </div>
              <div className = "form__price">
                <MyInput
                  value = {product.price}
                  onChange = {e => setProduct({...product, price: e.target.value})}
                  type="number"
                  placeholder='Цена'
                />
              </div>
          </div>
          <div className="form__btn">
              {
                product.price && product.price < 100000000 && product.title && product.id
                ?
                <MyButton onClick={addNewProduct}>Добавить</MyButton>
                :
                <MyButton disabled>Добавить</MyButton>
              }
              
          </div>
          
        </form>
  )
}

export default ProductAdd