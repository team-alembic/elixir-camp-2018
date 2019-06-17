import React from "react"
import styled from "styled-components"
import UnorderedList from "./UnorderedList"
import buildkiteLogo from "../assets/buildkite-logo-on-light-d83a7b7d.svg"
import alembicLogo from "../assets/alembic-logo-horizontal.svg"
import expert360Logo from "../assets/expert360_logo.svg"
import blackmillLogo from "../assets/blackmill-logo.svg"
import lookaheadLogo from "../assets/lookahead-logo.png"
import manningLogo from "../assets/Manninglogo_outline.png"
import Header2 from "../components/Header2"

const Sponsors = styled.div`
  a {
    display: block;
    margin-top: 20px;
    text-align: center;
  }
`

export default ({ className }) => (
  <Sponsors className={className}>
    <Header2>Our sponsors</Header2>
    <a href="https://alembic.com.au">
      <img src={alembicLogo} />
    </a>
  </Sponsors>
)
