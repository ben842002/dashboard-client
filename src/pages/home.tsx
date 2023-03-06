import React from 'react'
import { useList } from '@pankod/refine-core'
import {
  PieChart,
  PropertyReferrals,
  TotalRevenue,
  PropertyCard,
  TopAgent,
} from '../components'
import { Box, Typography, Stack } from '@pankod/refine-mui'

const Home = () => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142D" textAlign={{xs: "center", md: "left"}}>
        Dashboard
      </Typography>

      <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
        <PieChart 
          title="Properties for Sale" 
          value={684}
          series={[75, 25]}
          colors={['#475be8', '#e4e8ef']}
        />
        <PieChart 
          title="Properties for Rent" 
          value={550}
          series={[60, 40]}
          colors={['#475ae8', '#e4e8ef']}
        />
        <PieChart 
          title="Total Customers" 
          value={5704}
          series={[75, 25]}
          colors={['#575be8', '#c5e8ef']}
        />
        <PieChart 
          title="Properties for Cities" 
          value={600}
          series={[75, 25]}
          colors={['#475be8', '#e4e8ef']}
        />
      </Box>
    </Box>
  )
}

export default Home