import React from "react"
import { Container, Row, Col} from 'react-bootstrap'
import Layout from "../components/layout"
import SEO from "../components/seo"
import TechStack from '../components/techstack'
import Projects from '../components/projects'
import MainImage from '../images/main-image.svg'
import InstantSupport from '../images/instant-support.svg'
import ProblemSolver from '../images/problem-solver.svg'
import Collab from '../images/collab.svg'
import Programmer from '../images/programmer.svg'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container className='pt-5 pb-5 mb-5'>

      {/* HERO */}
      <Row style={{ 'minHeight': '100vh' }}>
        <Col xs={12} md={8} lg={8} style={{ 'maxHeight': '20px' }}>
          <img className='img-fluid' src={MainImage} style={{ 'width': '100%' }} alt='Not Found' />
        </Col>
        <Col>
          <div className='h-100 d-flex flex-column justify-content-center align-items-left'>
            <div className='d-none d-md-block'>
              <div className='hero-name'>Jayanta Madhav</div>
              <div className='hero-job'>Full Stack Developer</div>
            </div>

            <div className='d-md-none'>
              <div className='d-flex flex-column justify-content-center align-items-center'>
                <div className='hero-name'>Jayanta Madhav</div>
                <div className='hero-job'>Full Stack Developer</div>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      {/* QUALITIES */}
      <Row className='mt-5 pt-5'>
        <Col md={6} lg={6} className='p-3 mt-4'>
          <div className='quality-card'>
            <div className='d-flex justify-content-center align-items-center quality-card-image'>
              <img className='img-fluid' src={Programmer} alt='Programmer' />
            </div>
            <div className='quality-card-header'>Code Driven</div>
            <div className='quality-card-desc'>
              Ability to write clean, tested and scalable code while building a product is really
              importnant keeping in mind the current state of technology and how connected we are on a everyday basis.
            </div>
          </div>
        </Col>
        <Col md={6} lg={6} className='p-3 mt-4'>
          <div className='quality-card'>
            <div className='d-flex justify-content-center align-items-center quality-card-image'>
              <img className='img-fluid' src={InstantSupport} alt='Instant' />
            </div>
            <div className='quality-card-header'>Getting things done</div>
            <div className='quality-card-desc'>
              I do not mind getting my hands dirty if I have to , to complete a task that nobody has done
              before or meeting deadlines.
            </div>
          </div>
        </Col>
        <Col md={6} lg={6} className='p-3 mt-4'>
          <div className='quality-card'>
            <div className='d-flex justify-content-center align-items-center quality-card-image'>
              <img className='img-fluid' src={ProblemSolver} alt='ProblemSolver' />
            </div>
            <div className='quality-card-header'>Solution Mindset</div>
            <div className='quality-card-desc'>
              Problems always finds me, like all the time. And dealing with problems all these years has made
              me better at solving complex problems and finding efficient solutions.
            </div>
          </div>
        </Col>
        <Col md={6} lg={6} className='p-3 mt-4'>
          <div className='quality-card'>
            <div className='d-flex justify-content-center align-items-center quality-card-image'>
              <img className='img-fluid' src={Collab} alt='Collaboration' />
            </div>
            <div className='quality-card-header'>Collaboration</div>
            <div className='quality-card-desc'>
              True believer of connected workforce and with that mindset, I really believe it is important to
              work together for the growth of the organization and also personal growth.
            </div>
          </div>
        </Col>
      </Row>

      {/* SKILLS */}
      <div className='mt-5 pt-5'>
        <TechStack />
      </div>

      {/* PROJECTS */}
      <div className='mt-5 pt-5'>
        <Projects />
      </div>
    </Container>
  </Layout>
)

export default IndexPage
