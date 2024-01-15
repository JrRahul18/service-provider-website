import React from 'react'

const Product = () => {
  const func = () =>{
    console.log("Product.jsx")
  }

  return (
    <div>Product
      {func()}
    </div>
  )
}

export default Product