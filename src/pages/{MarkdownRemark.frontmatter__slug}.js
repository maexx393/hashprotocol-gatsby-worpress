import React from "react"
import { graphql } from "gatsby"
import Sticky from 'react-sticky-el';
import Image from "../components/imageComponent";

import {FooterBoxes} from "../datas/resources/content";
import ToC from "../components/modules/toc";
import Layout from "../components/layout";

export default function Template({
         data, // this prop will be injected by the GraphQL query below.
     }) {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html, headings } = markdownRemark

    return (

        <Layout footerBoxes={FooterBoxes}>
        <div className="resources-page">

            <main>
                <div className={'container'}>
                    <div className="blog-post" id={'blog-post'}>
                        <div className={'inner small'}>
                            <h1>{frontmatter.title}</h1>
                            <div className={'author'}><div className={'authorImage'}><Image alt={frontmatter.author.name} filename={frontmatter.author.avatar} /></div>By <strong> {frontmatter.author.name}</strong></div>
                            <div className={'date'}>Published on: <strong>{frontmatter.date}</strong></div>
                            <div className={'clear'}/>
                        </div>

                        <div className={'main-image'}>
                            <Image alt={frontmatter.title} filename={frontmatter.image} />
                        </div>

                        <Sticky topOffset={-200}>
                            <ToC headings={headings}/>
                        </Sticky>

                        <div
                            className="blog-post-content"
                            dangerouslySetInnerHTML={{ __html: html }}
                        />
                    </div>
                </div>
            </main>
        </div>
        </Layout>
    )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      headings {
        value
        depth
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        image
        author{
            name
            avatar
        }
      }
    }
  }
`
