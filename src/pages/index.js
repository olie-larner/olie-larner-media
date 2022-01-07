import React, { useState } from "react"
import gql from "graphql-tag"
import { useQuery } from "@apollo/client"
import Layout from "../components/layout"
import IntroSection from "../components/homepage/intro-section"
import SkillsSection from "../components/homepage/skills-section"
import BigImage from "../components/homepage/big-image"
import Bio from "../components/homepage/bio"
import PreviousProjects from "../components/homepage/previous-projects"
import Music from "../components/homepage/music-section"

const APOLLO_QUERY = gql`
  {
    pageBy(uri: "home") {
      id
      homePage {
        fieldGroupName

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

        previousProjects {
          backgroundImage {
            altText
            sourceUrl(size: LARGE)
          }
          websiteLink
          websiteName
          year
          workDone
        }

        music {
          youtubeMix
        }

        bio {
          about
          images {
            bioImages {
              altText
              sourceUrl(size: LARGE)
            }
          }
          location
          name
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
  const bioData = data.pageBy.homePage.bio
  const previousProjects = data.pageBy.homePage.previousProjects
  const music = data.pageBy.homePage.music
  return (
    <Layout isHomePage>
      <IntroSection loading={loading} />
      <Bio bioData={bioData} />
      <SkillsSection skillSet={skillSet} />
      <PreviousProjects previousProjects={previousProjects} />
      <Music music={music} />
      <BigImage image="bg-road" />
    </Layout>
  )
}

export default IndexPage
