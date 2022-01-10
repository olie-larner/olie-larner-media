import React, { useState, useEffect } from "react"
import gql from "graphql-tag"
import classNames from "classnames"
import { useQuery } from "@apollo/client"
import Layout from "../components/layout"
import Seo from "../components/seo"
import IntroSection from "../components/homepage/intro-section"
import SkillsSection from "../components/homepage/skills-section"
import BigImage from "../components/homepage/big-image"
import Bio from "../components/homepage/bio"
import PreviousProjects from "../components/homepage/previous-projects"
import Music from "../components/homepage/music-section"
import ContactMe from "../components/homepage/contact-me"

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
  const [pageLoading, setLoading] = useState(loading)
  useEffect(() => {
    if (!loading) {
      setTimeout(() => {
        setLoading(false)
      }, 2000)
    }
  })

  if (loading) {
    return (
      <div className="fixed top-0 z-10 flex items-center justify-center w-screen h-screen bg-white">
        <h1 className="text-2xl text-center font-arastin_std ">
          OLIE LARNER <br />
          Loading...
        </h1>
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
      <div
        className={classNames(
          "fixed top-0 z-40 flex items-center justify-center w-screen h-screen bg-white transition-all delay-1000 duration-500",
          { "opacity-100": pageLoading },
          { "opacity-0": !pageLoading }
        )}
      >
        <h1 className="text-2xl text-center font-arastin_std">
          OLIE LARNER <br />
          Loading...
        </h1>
      </div>
      <Seo title="Digital Creative Output" />
      <IntroSection loading={loading} />
      <Bio bioData={bioData} />
      <SkillsSection skillSet={skillSet} />
      <PreviousProjects previousProjects={previousProjects} />
      <Music music={music} />
      <ContactMe />
      <BigImage image="bg-road" />
    </Layout>
  )
}

export default IndexPage
