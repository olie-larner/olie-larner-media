import React from "react"
import gql from "graphql-tag"
import { useQuery } from "@apollo/client"

import Layout from "../components/layout"
import Section from "../components/Section/Section"

const APOLLO_QUERY = gql`
  {
    pageBy(uri: "home") {
      id
      homePage {
        fieldGroupName
        hero {
          fieldGroupName
          title
          backgroundImage {
            id
            altText
            sourceUrl(size: LARGE)
          }
        }
      }
      slug
    }
  }
`

const IndexPage = () => {
  const { loading, error, data } = useQuery(APOLLO_QUERY)
  if (loading) {
    return (
      <div className="fixed top-0 z-10 flex items-center justify-center w-screen h-screen bg-white">
        <h1>Loading...</h1>
      </div>
    )
  }
  if (error) return `${error}`

  const { backgroundImage, title } = data.pageBy.homePage.hero

  return (
    <Layout isHomePage>
      <Section flexDirection="row" />
    </Layout>
  )
}

export default IndexPage
