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

import FBIcon from '../images/facebook.svg'
import LIIcon from '../images/linkedin.svg'
import GULIcon from '../images/github-logo.svg'
import GatsbyIcon from '../images/gatsbyjs.svg'


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
            <Row>
                <Col xs={6} md={4} className='light-text'>
                    <div className='h-100 d-flex justify-content-center align-items-center'>
                        <span>&copy; {new Date().getFullYear()}, Jayanta Madhav</span>
                    </div>
                </Col>
                <Col xs={6} md={4}>
                    <Container className='p-2'>
                        <div className='d-flex justify-content-start align-items-left'>
                            <div className='social-icons'>
                                <a href='https://www.facebook.com/jayanta.madhav.5/' target='_blank'>
                                    <img src={FBIcon} alt='facebook' style={{ 'maxWidth': '50px' }} />
                                </a>
                            </div>
                            <div className='social-icons'>
                                <a href='https://www.linkedin.com/in/jayantamadhav/' target='_blank'>
                                    <img src={LIIcon} alt='linkedin' style={{ 'maxWidth': '50px' }} />
                                </a>
                            </div>
                            <div className='social-icons'>
                                <a href='https://github.com/jayantamadhav' target='_blank'>
                                    <img src={GULIcon} alt='github' style={{ 'maxWidth': '50px' }} />
                                </a>
                            </div>
                        </div>
                    </Container>
                </Col>
                <Col md={4} className='d-none d-md-block'>
                    <Row>
                        <Col xs={6}>
                            <div className='h-100 d-flex justify-content-center align-items-center light-text'>
                                Built using
                            </div>
                        </Col>
                        <Col xs={6}>
                            <img src={GatsbyIcon} alt='GatsbyJS' />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}


export default Projects
