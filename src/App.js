import React, { useState }  from 'react';
import ProductAdd from './components/ProductAdd';
import ProductList from './components/ProductList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import './css/App.css'


function App() {
  const [products, setProducts] = useState([
    //{id: 1, title:"something", price:100},
    //{id: 2, title:"something1", price:200},
    //{id: 3, title:"something2", price:300},
  ])
  const [total, setTotal] = useState(0)
  const [sale, setSale] = useState(0)
  const [insale, setInssale] = useState ("")

 
  const createProduct =(newProduct) => {
    setProducts([...products, newProduct]);
    setTotal(total + +newProduct.price)
  }
  const removeProduct = (product) => {
    setTotal(total - +product.price)
    setProducts(products.filter(p => p.id !== product.id))
    
  }

  const getPriceSale=(e) => {
    e.preventDefault()
    setSale(insale)
    setInssale("")
  }

  const resetSale = (e) => {
    e.preventDefault()
    setSale(0)
    setInssale("")
  }



  
  return (
    <div className="App"> 
      <div className="App__input">
        <ProductAdd create={createProduct}/>
        <div className='sale'>
          <div className='sale__input'>
            Скидка
            <MyInput 
            value = {insale}
            onChange = {e =>  setInssale( e.target.value)} 
            
            /> 
            
            %
            {
              insale > 0 && insale <= 100
              ?
              <MyButton onClick={getPriceSale}>Установить скидку</MyButton>
              :
              <MyButton disabled onClick={getPriceSale}>Установить скидку</MyButton>
            }
          </div>
          <MyButton onClick={resetSale}>Убрать скидки</MyButton>
        </div>
      </div>

        {
          products.length !== 0
          ?
          <div className="App__output">
            <ProductList remove={removeProduct} products={products} sale={sale}/>
              {
                sale !== 0
                ?
                <div className='total item__content'>Применина скидка {sale} %</div>
                :
                <div></div>
              }

            <div className='total item__content'>

              <div>Итого {products.length} </div>
              {
               products.length % 10 === 1 && (Math.floor(products.length/10))!== 1
               ?
               <div>товар</div>:
               1 < products.length % 10 && products.length % 10 < 5 && (Math.floor(products.length/10))!== 1
               ?
               <div>товара</div>
               :
               <div>товаров</div>
              }
              <div>на сумму</div>
              
              {
                sale == 0
                ?
                <div className='item__price'>
                  <div className="item__price-num">{total} </div>
                  <div className="item__price-txt">руб.</div>
                </div>
                :
                <div>
                  <div className='item__price'>
                    <div className="item__prime-price-num">{total} </div>
                    <div className="item__price-num">{total-(total*sale)/100 } </div>
                    <div className="item__price-txt">руб.</div>
                  </div>
                </div>
              }
            </div>
          </div>
          :
          <div className="App__output">
            <h1>Список пуст</h1>
          </div>
        }
        

    </div>
  );
}

export default App;
