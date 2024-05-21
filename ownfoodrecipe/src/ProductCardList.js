import React, { useState } from 'react'
import "./App.css"
import PaymentCom from './PaymentCom';
function ProductCardList({data}) {
    const[buy ,setBuy]= useState(false);

   
  return (
    <>
   <div class="productcard">
   
   <img src={data.recipe.image} alt='not found' width="200"></img><br/><br/>
    <h2>calories:{Math.round(data.recipe.calories)}</h2><br/>
    <h2>name:{data.recipe.label.slice(0,17)}</h2>
    <input type='submit' value="Buy"  className='btn btn-primary' 
   
    onClick={()=>{
     setBuy(true);
    
     
    }}
    />
    
    <input type='submit' value="AddToCart"  className='btn btn-danger'/>
   </div>
    
    </>
  )
}

export default ProductCardList