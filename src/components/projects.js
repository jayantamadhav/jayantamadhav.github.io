/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { Container, Row, Col } from 'react-bootstrap'
import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"

import EasThumb from '../images/eas.webp'
import EasPubThumb from '../images/easpub.webp'
import MirrorscriptThumb from '../images/mirrorscript.webp'


const Projects = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )
  return (
    <>
      <span className='section-header'>My Projects</span>
      <Row className='mt-4'>

        <Col xs={6} md={4}>
          <a href='https://github.com/jayantamadhav/mirrorscript' target='_blank' style={{'textDecoration': 'none'}}>
          <div className='project-card'>
            <img src={MirrorscriptThumb} alt='Mirrorscript' className='img-fluid' />
            <div className='light-text strong'>Mirrorscript</div>
            <div className='light-text'>Linux / Python  </div>
          </div>
          </a>
        </Col>
        <Col xs={6} md={4}>
          <a href='https://www.easpublisher.com' target='_blank' style={{'textDecoration': 'none'}}>
          <div className='project-card'>
            <img src={EasPubThumb} alt='EAS Publisher' className='img-fluid' />
            <div className='light-text strong'>EAS Publisher</div>
            <div className='light-text'>Django / HTML / CSS / Jquery</div>
          </div>
          </a>
        </Col>
        <Col xs={6} md={4}>
          <a href='https://himjournals.com' target='_blank' style={{'textDecoration': 'none'}}>
          <div className='project-card'>
            <img src={EasThumb} alt='HIM Journals' className='img-fluid' />
            <div className='light-text strong'>Himjournals</div>
            <div className='light-text'>Django / HTML / CSS / Jquery</div>
          </div>
          </a>
        </Col>
      </Row>
    </>
  )
}


export default Projects
