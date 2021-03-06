import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import FadeIn from "../components/FadeIn"


class BlogPageHome extends React.Component {
  constructor(props) {
    super(props)
    this.themer = this.themer.bind(this)
    this.getPrevTheme = this.getPrevTheme.bind(this)
    this.state = {
      theme: null,
    }
  }

  componentDidMount() {
    const theme = this.getPrevTheme()
    this.setState({ theme })
  }

  getPrevTheme() {
    return window.__dkBlogTheme
  }

  themer() {
    /* All other calls to themer */
    const oldTheme = this.state.theme
    const newTheme = oldTheme === "dark" ? "light" : "dark"
    if (typeof window !== "undefined") {
      this.setState({ theme: newTheme })
      document.body.className = newTheme
      window.__dkBlogTheme = newTheme
      window.localStorage.setItem("dkBlogTheme", newTheme)
    }
  }

  render() {
    const { title, description, lang, keywords, ogUrl, ogType } = this.props
    return (

        <div className="mw960">
          <div className=" margin10 textcenter">
            <div className="mB10 width100 textcenter oh">
              <FadeIn
                className="ico20 inline "
                style={{ animationDelay: "0.01s", lineHeight: "1.7em" }}
              >
                hey,
              </FadeIn>
              <FadeIn
                className="ico20 inline "
                style={{ animationDelay: "0.02s", lineHeight: "1.7em" }}
              >
                {" Let's"}
              </FadeIn>
            </div>
            <div className="mB25 width100 textcenter oh">
              <FadeIn
                className="fs40 inbl "
                style={{ animationDelay: "0.05s", lineHeight: "1.7em" }}
              >
                <h1 className="fs40 myname">Build the Future</h1>
              </FadeIn>
            </div>
          </div>
        </div>
    )
  }
}

BlogPageHome.propTypes = {
  data: PropTypes.object,
}

export default BlogPageHome

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
        keywords
        ogUrl
        ogType
      }
    }
  }
`
