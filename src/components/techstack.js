/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { Container, Row, Col, ProgressBar } from 'react-bootstrap'
import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"

import DjangoIcon from '../images/django.svg'
import NodejsIcon from '../images/nodejs.svg'
import PythonIcon from '../images/python.svg'
import ReactIcon from '../images/react.svg'
import AngularIcon from '../images/angular.svg'
import BsIcon from '../images/bs.svg'
import HtmlIcon from '../images/html.svg'
import CssIcon from '../images/css.svg'
import MysqlIcon from '../images/mysql.svg'
import PostgresqlIcon from '../images/postgresql.svg'
import GitIcon from '../images/git.svg'
import GithubIcon from '../images/github.svg'
import GitlabIcon from '../images/gitlab.svg'
import RedisIcon from '../images/redis.svg'
import GatsbyIcon from '../images/gatsby.svg'


const TechStack = () => {
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
      <div className='section-header'>Technical Skills</div>
      <div className='mt-4'>
        <div className='d-flex justify-content-center align-items-center flex-column'>
          <div className='w-100'>
            <span className='light-text'>Overall Skill</span>
            <br />
            <ProgressBar>
              <ProgressBar animated variant='success' now={60} label='BACKEND' />
              <ProgressBar animated now={40} label='FRONTEND' />
            </ProgressBar>
          </div>
        </div>
      </div>
      <Row className='mt-4'>
        <Col>
          <span className='light-text'>Backend</span>
          <Row>

            <Col xs={6} md={4}>
              <Container className='p-3 tech-icon'>
                <img className='img-fluid' src={PythonIcon} alt='Python' />
                <ProgressBar animated now={90} />
              </Container>
            </Col>

            <Col xs={6} md={4}>
              <Container className='p-3 tech-icon'>
                <img className='img-fluid' src={DjangoIcon} alt='Django' />
                <ProgressBar animated now={85} />
              </Container>
            </Col>

            <Col xs={6} md={4}>
              <Container className='p-3 tech-icon'>
                <img className='img-fluid' src={NodejsIcon} alt='NodeJS' />
                <ProgressBar animated now={70} />
              </Container>
            </Col>

            <Col xs={6} md={4}>
              <Container className='p-3 tech-icon'>
                <img className='img-fluid' src={MysqlIcon} alt='MySQL' />
                <ProgressBar animated now={75} />
              </Container>
            </Col>

            <Col xs={6} md={4}>
              <Container className='p-3 tech-icon'>
                <img className='img-fluid' src={PostgresqlIcon} alt='PostgreSQL' />
                <ProgressBar animated now={75} />
              </Container>
            </Col>

          </Row>
        </Col>
        <Col>
          <span className='light-text'>Frontend</span>
          <Row>

            <Col xs={6} md={4}>
              <Container className='p-3 tech-icon'>
                <img className='img-fluid' src={ReactIcon} alt='React' />
                <ProgressBar animated now={75} />
              </Container>
            </Col>

            <Col xs={6} md={4}>
              <Container className='p-3 tech-icon'>
                <img className='img-fluid' src={AngularIcon} alt='Angular' />
                <ProgressBar animated now={65} />
              </Container>
            </Col>

            
            <Col xs={6} md={4}>
              <Container className='p-3 tech-icon'>
                <img className='img-fluid' src={GatsbyIcon} alt='Gatsby' />
                <ProgressBar animated now={75} />
              </Container>
            </Col>

            <Col xs={6} md={4}>
              <Container className='p-3 tech-icon' >
                <img className='img-fluid' src={BsIcon} alt='Bootstrap' />
                <ProgressBar animated now={80} />
              </Container>
            </Col>

            <Col xs={6} md={4}>
              <Container className='p-3 tech-icon'>
                <img className='img-fluid' src={HtmlIcon} alt='HTML' />
                <ProgressBar animated now={85} />
              </Container>
            </Col>

            <Col xs={6} md={4}>
              <Container className='p-3 tech-icon'>
                <img className='img-fluid' src={CssIcon} alt='CSS' />
                <ProgressBar animated now={85} />
              </Container>
            </Col>

          </Row>
        </Col>
      </Row>
      <div className='mt-4'>
        <span className='light-text'>Others</span>
        <Row>

          <Col xs={3} md={2}>
            <Container className='p-3 tech-icon'>
              <img className='img-fluid' src={GitIcon} alt='Git' />
            </Container>
          </Col>

          <Col xs={3} md={2}>
            <Container className='p-3 tech-icon'>
              <img className='img-fluid' src={GithubIcon} alt='Github' />
            </Container>
          </Col>

          <Col xs={3} md={2}>
            <Container className='p-3 tech-icon'>
              <img className='img-fluid' src={GitlabIcon} alt='Gitlab' />
            </Container>
          </Col>

          <Col xs={3} md={2}>
            <Container className='p-3 tech-icon'>
              <img className='img-fluid' src={RedisIcon} alt='Redis' />
            </Container>
          </Col>
        </Row>
      </div>
    </>
  )
}


export default TechStack
