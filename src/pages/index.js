import React from "react"
import {graphql} from 'gatsby';
import Layout from "../components/layout"
import Gallery from "../components/gallery"


const IndexPage = (data) => (
  <Layout>
    <Gallery data={data} />

  </Layout>
)

export default IndexPage

export const query = graphql`{
  allUnSplashImages {
    nodes {
      id
      urls {
        regular
        small
        thumb
        full
        raw
      }
      height
      width
    }
  }
}

`
