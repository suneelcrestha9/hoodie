import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/cartSlice'
import './Home.css'


export default function Home() {
  const [products,setProducts]=useState([])

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then((res)=>res.json())
    .then((data)=>{
      setProducts(data)
    })
  },[])

  //to show minumum title
  const minimuntitle=(title,maxLength)=>{
    if(title.length>maxLength){
      return title.substring(0,maxLength)+'...';
    }else{
      return title
    }
  }

  //using dispatch
  const dispatch=useDispatch();

  //increase the cart item number
  const handelcart=(item)=>{
    dispatch(addToCart(item))
  }

  const displayproduct = products.slice(0,12)
  return (
    <>
    <div className="products">
      {displayproduct.map((item)=>(
        <div className="product" key={item.id}>
          <div className="product_img">
            <img src={item.image} alt="" />
          </div>
          <h1>{minimuntitle(item.title,25)}</h1>
          <h3>{item.categories}</h3>
          <h3>${item.price}</h3>
          <button onClick={()=>handelcart(item)} >Add To Cart</button>
        </div>
      ))}
    </div>
    </>
  )
}



