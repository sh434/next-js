import React from 'react'
import Hero from './HomeSection/HeroSection/hero'
import FeatureProduct from './HomeSection/FeatureProduct/feature'
import CategoryProduct from './HomeSection/Category/categoryproduct'
import BlogSection from './HomeSection/Blog/blogSection'
import LatestProduct from './HomeSection/LatestProduct/latestProduct'
import Vegetable from './HomeSection/vegetable/vegetable'
import Deals from './HomeSection/deals/deals'
const page = () => {
  return (
    <>
      <Hero />
      <Vegetable/>
      <CategoryProduct />
      <FeatureProduct />
      < LatestProduct />
      <Deals />
      <BlogSection />
    </>

  )
}

export default page