import React from 'react'
import { Box } from '@mui/material'
import CardList from '../../Components/CardList/CardList'
import Typography from '@mui/material/Typography';

import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from '../../Store/ebay';
import { useEffect } from 'react'

export default function Home() {

  const dispatch = useDispatch()
  let category = useSelector(state => state.OurProducts.category)

  let productList = useSelector(state => state.OurProducts.productsList)
  productList = (category!=='All') ? productList.filter((product)=>product.category==category):productList

  useEffect(() => {
    dispatch(fetchProducts)
  }, [])
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Box>
          <Typography variant='h2' component='div' sx={{ padding: 0 }}>
            Our Products
          </Typography>
          <CardList type='Our' list={productList} />
        </Box>
      </Box>
    </>
  )
}
