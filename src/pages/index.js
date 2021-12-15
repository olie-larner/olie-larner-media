import React, { useState } from "react"
import gql from "graphql-tag"
import { useQuery } from "@apollo/client"

import Layout from "../components/layout"
import Section from "../components/Section/Section"
import IntroSection from "../components/homepage/intro-section"
import SkillsSection from "../components/homepage/skills-section"
import BigImage from "../components/homepage/big-image"

import Image1 from "../media/images/road_to_mist.jpg"
import Image2 from "../media/images/faith.jpg"

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
        skillSet {
          skillSetLogos {
            skillLogo {
              altText
              sourceUrl(size: LARGE)
            }
            skillName
          }
          skillSetTitle
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
  const skillSet = data.pageBy.homePage.skillSet
  return (
    <Layout isHomePage>
      <IntroSection loading={loading} />
      <SkillsSection skillSet={skillSet} />
      <BigImage image="bg-road" />
      <Section flexDirection="row" />
      <Section flexDirection="row-reverse" />
    </Layout>
  )
}

export default IndexPage
