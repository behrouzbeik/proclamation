import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { Box } from '@mui/material'

export default function CardList({type='', list}) {
  const productCards = (type==='ebay')?
    (list) ? 
      list.map(product=><ProductCard 
        key={product.product_id}
        image={product.thumbnail} 
        alt={product.product_id} 
        title={product.condition} 
        price={product.price.value + product.price.currency}
        desc={product.url} />)
    :
      []
  :
    (list) ?
      list.map(product=><ProductCard 
        key={product.productId}
        image={product.image} 
        alt={product.productName} 
        title={product.productName} 
        price={product.price + product.currency}
        desc={product.describe} />)
    :
      []

  return (
    <>
        <Box sx={{ display: 'flex',
          justifyContent: 'space-around', 
          flexWrap: 'wrap'}}>
            {productCards}
        </Box>
    </>
  )
}
