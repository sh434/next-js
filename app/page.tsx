import React from 'react'
import Hero from './src/pages/HomeSection/HeroSection/hero'
import FeatureProduct from './src/pages/HomeSection/FeatureProduct/feature'
import CategoryProduct from './src/pages/HomeSection/Category/categoryproduct'
import BlogSection from './src/pages/HomeSection/Blog/blogSection'
import LatestProduct from './src/pages/HomeSection/LatestProduct/latestProduct'
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