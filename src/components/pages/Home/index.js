import React, { Component } from "react"
import BackgroundImage from "gatsby-background-image"
import { StaticQuery, graphql } from "gatsby"

import Button from "../../Button"

export default class Home extends Component {
  render() {
    return (
      <div>
        <header className="h-screen flex relative">
          <div className="w-2/3 self-center mx-40">
            <h1 className="headline mb-8">Build web that people love.</h1>
            <p className="large-text mb-8">
              Far beyond making interfaces beautiful, we make sure the
              engineering behind each product is tailored to achieving the goals
              of your business.
            </p>
            <p className="large-text mb-16">
              Have a project in mind? We’d love to chat.
            </p>
            <Button />
          </div>
          <div className="absolute -z-10 w-full h-full">
            <StaticQuery
              query={graphql`
                query NewsQuery {
                  file(name: { eq: "home-header" }) {
                    id
                    name
                    childImageSharp {
                      fluid(maxWidth: 2800) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              `}
              render={data => (
                <BackgroundImage
                  Tag="div"
                  className="w-full h-full"
                  fluid={data.file.childImageSharp.fluid}
                  backgroundColor={`#040e18`}
                  loading="eager"
                  critical={true}
                />
              )}
            />
          </div>
        </header>
      </div>
    )
  }
}
