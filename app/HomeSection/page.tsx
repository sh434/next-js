
import React from 'react'
import Hero from './HeroSection/hero'
import FeatureProduct from './FeatureProduct/feature'
import CategoryProduct from './Category/categoryproduct'
import BlogSection from './Blog/blogSection'
import LatestProduct from './LatestProduct/latestProduct'
import Layout from '../../../layout'

const Home = () => {
  return (
    <Layout>
      <Hero />
      <CategoryProduct />
      <FeatureProduct />
      <LatestProduct />
      <BlogSection />
    </Layout>
  )
}

export default Home
