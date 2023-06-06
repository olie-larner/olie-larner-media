import React from "react"
import { Link, graphql } from "gatsby"
import parse from "html-react-parser"
import gql from "graphql-tag"
import { useQuery } from "@apollo/client"
import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BLOG_QUERY = gql`
  {
    posts {
      edges {
        node {
          id
          excerpt(format: RENDERED)
          categories {
            edges {
              node {
                name
              }
            }
          }
          date
          featuredImage {
            node {
              altText
              sourceUrl(size: LARGE)
            }
          }
          title(format: RENDERED)
          slug
          uri
        }
      }
    }
  }
`

const BlogIndex = () => {
  const { loading, error, data } = useQuery(BLOG_QUERY)
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

  const posts = data.posts.edges

  console.log(posts)

  // if (!posts.length) {
  //   return (
  //     <Layout>
  //       <Seo title="All posts" />
  //       <Bio />
  //       <p>
  //         No blog posts found. Add posts to your WordPress site and they'll
  //         appear here!
  //       </p>
  //     </Layout>
  //   )
  // }

  return (
    <Layout>
      <Seo title="All posts" />

      <Bio />
      <div>
        <ol style={{ listStyle: `none` }}>
          {posts.map(post => {
            const title = post.node.title

            return (
              <li key={post.node.uri}>
                <article
                  className="post-list-item"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <header>
                    <h2>
                      {title && (
                        <Link to={post.node.uri} itemProp="url">
                          <span itemProp="headline">{parse(title)}</span>
                        </Link>
                      )}
                    </h2>
                    <small>{post.node.date}</small>
                  </header>
                  {post.node.excerpt && (
                    <section itemProp="description">
                      {parse(post.node.excerpt)}
                    </section>
                  )}
                </article>
              </li>
            )
          })}
        </ol>
      </div>
      {/* {previousPagePath && (
        <>
          <Link to={previousPagePath}>Previous page</Link>
          <br />
        </>
      )}
      {nextPagePath && <Link to={nextPagePath}>Next page</Link>} */}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query WordPressPostArchive($offset: Int!, $postsPerPage: Int!) {
    allWpPost(
      sort: { fields: [date], order: DESC }
      limit: $postsPerPage
      skip: $offset
    ) {
      nodes {
        excerpt
        uri
        date(formatString: "MMMM DD, YYYY")
        title
        excerpt
      }
    }
  }
`
