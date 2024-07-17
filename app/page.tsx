import React from 'react'
import Hero from './HomeSection/HeroSection/hero'
import FeatureProduct from './HomeSection/FeatureProduct/feature'
import CategoryProduct from './HomeSection/Category/categoryproduct'
import BlogSection from './HomeSection/Blog/blogSection'
import LatestProduct from './HomeSection/LatestProduct/latestProduct'
const page = () => {
  return (
    <>
      <Hero />
      <CategoryProduct />
      <FeatureProduct />
      < LatestProduct />
      <BlogSection />
    </>

  )
}

export default page