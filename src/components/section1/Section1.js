import React from 'react'
import './styles/Section1.scss';
import { Col, Row } from 'react-bootstrap';
import { Typewriter } from 'react-simple-typewriter'
import mark from '../../assests/Group 11.png'

import nodejs from '../../assests/nodejs.png';
import github from '../../assests/github.png';
import Gitlab from '../../assests/gitlab.png';
import vscode from '../../assests/vscode.png';
import postman from '../../assests/postman.png';
import android from '../../assests/android.png';
import figma from '../../assests/figma.png';


function Section1() {
  const handleType = (count) => {
  }

  const handleDone = () => {
  }

  const images = [
    {
      id: 1,
      image: vscode,

    },
    {
      id: 2,
      image: nodejs,

    },
    {
      id: 3,
      image: postman,

    },
    {
      id: 4,
      image: github,

    },
    {
      id: 5,
      image: figma,

    },
    {
      id: 6,
      image: Gitlab,

    },
    {
      id: 7,
      image: android,

    }
  ]
  return (
    <>

      <div className='d-block d-md-none'>
        <div className='section2-main'>
          <div className='name'>
            KALAISURYA
          </div>
          <div className='domain-name'>
            Frontend Developer
            <span style={{ color: 'orange', fontWeight: 'bold' }}>(
              <Typewriter
                words={['Reactjs 😃', 'Nextjs 😃', 'ReactNative 😃', 'Nodejs 😃']}
                loop={5}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                onLoopDone={handleDone}
                onType={handleType}
              /> )
            </span>
          </div>
        </div>
        <div className='borders'>
        </div>
      </div>
      <div className='sectino1-main mt-2'>
        <div className='image-card-section1'>
          <img src="https://static-cdn.icons8.com/l/3d/images/cu2_thumb_up_man_1_close-up.webp" alt="no image" className='image-card' />
        </div>
      </div>
      <div className='left-moves'>
        <div className='contact-details-section1 mt-4'>
          <div className='common-text mb-4 mt-3'>
            Contact Me
          </div>

          <div className='left-move'>
            <div className='contact-lists  mb-3 ms-2'>
              <div className='box'>
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg>
              </div>
              <div className='mt-1'>
                +91 8778377119
              </div>
            </div>

            <div className='contact-lists mb-3 ms-2'>
              <div className='box'>
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg>

              </div>
              <div className='mt-1 common-textss'>
                kalaimca685@gmail.com
              </div>
            </div>
            <div className='contact-lists  mb-3 ms-2'>
              <div className='box'>
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>

              </div>
              <div className='mt-1'>
                Chennai, India
              </div>
            </div>
          </div>

        </div>

        <div className='contact-details-section1 mt-5'>
          <div className='common-text mb-4 mt-3'>
            Education
          </div>
          <div className='mt-3 '>
            <div className='contact-lists'>
              <div className='box1'>
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z" /></svg>

              </div>
              <div>
                <div className='medium-text mb-2'>
                  Master of Computer Application ( MCA )
                </div>
                <div className='mb-2 college-text'>
                  Karpagam Academy Of Higher Education
                </div>
                <div className='year-text mb-2'>
                  2018 - 2020
                </div>
              </div>
            </div>

          </div>

          <div className='mt-2 mb-4'>
            <div className='contact-lists'>
              <div className='box1'>
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z" /></svg>

              </div>
              <div>
                <div className='medium-text mb-2'>
                  Bachelor  of Computer Application ( BCA )
                </div>
                <div className='mb-2 college-text'>
                  Sri Vidya Mandir Arts & Science College
                </div>
                <div className='year-text '>
                  2015 - 2018
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className='skill-section1 mt-5 mb-5'>
          <div className='common-text mb-4 mt-3'>
            Skills
          </div>
          <div className='p-1'>
            <Row>
              <Col>
                <div className='skill-card'>
                  <div className='image-section-skill-card'>
                    {/* <img src={mark} alt="no image" className='tick' /> */}
                  </div>
                  <div>
                    Reactjs
                  </div>
                </div>
              </Col>
              <Col>
                <div className='skill-card'>
                  <div className='image-section-skill-card'>
                    {/* <img src={mark} alt="no image" className='tick' /> */}
                  </div>
                  <div>
                    Nextjs
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className='p-1 mb-2 mt-2'>
            <Row>
              <Col>
                <div className='skill-card'>
                  <div className='image-section-skill-card'>
                    {/* <img src={mark} alt="no image" className='tick' /> */}
                  </div>
                  <div>
                    Redux
                  </div>
                </div>
              </Col>
              <Col>
                <div className='skill-card'>
                  <div className='image-section-skill-card'>
                    {/* <img src={mark} alt="no image" className='tick' /> */}
                  </div>
                  <div>
                    ContextApi
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className='p-1 mt-2 mb-2'>
            <Row>
              <Col>
                <div className='skill-card'>
                  <div className='image-section-skill-card'>
                    {/* <img src={mark} alt="no image" className='tick' /> */}
                  </div>
                  <div>
                    Javascript
                  </div>
                </div>
              </Col>
              <Col>
                <div className='skill-card'>
                  <div className='image-section-skill-card'>
                    {/* <img src={mark} alt="no image" className='tick' /> */}
                  </div>
                  <div>
                    Nodejs
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className='p-1 mb-2 mt-2'>
            <Row>
              <Col>
                <div className='skill-card'>
                  <div className='image-section-skill-card'>
                    {/* <img src={mark} alt="no image" className='tick' /> */}
                  </div>
                  <div>
                    React Native
                  </div>
                </div>
              </Col>
              <Col>
                <div className='skill-card'>
                  <div className='image-section-skill-card'>
                    {/* <img src={mark} alt="no image" className='tick' /> */}
                  </div>
                  <div>
                    Figma
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className='p-1 mb-2 mt-2'>
            <Row>
              <Col>
                <div className='skill-card'>
                  <div className='image-section-skill-card'>
                    {/* <img src={mark} alt="no image" className='tick' /> */}
                  </div>
                  <div>
                    HTML
                  </div>
                </div>
              </Col>
              <Col>
                <div className='skill-card'>
                  <div className='image-section-skill-card'>
                    {/* <img src={mark} alt="no image" className='tick' /> */}
                  </div>
                  <div>
                    CSS
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className='p-1 mb-2 mt-2'>
            <Row>
              <Col>
                <div className='skill-card'>
                  <div className='image-section-skill-card'>
                    {/* <img src={mark} alt="no image" className='tick' /> */}
                  </div>
                  <div>
                    Sass
                  </div>
                </div>
              </Col>
              <Col>
                <div className='skill-card'>
                  <div className='image-section-skill-card'>
                    {/* <img src={mark} alt="no image" className='tick' /> */}
                  </div>
                  <div>
                    Bootstrap
                  </div>
                </div>
              </Col>
            </Row>
          </div>

          <div className='p-1 mb-2 mt-2'>
            <Row>
              <Col>
                <div className='skill-card'>
                  <div className='image-section-skill-card'>
                    {/* <img src={mark} alt="no image" className='tick' /> */}
                  </div>
                  <div>
                    Github
                  </div>
                </div>
              </Col>
              <Col>
                <div className='skill-card'>
                  <div className='image-section-skill-card'>
                    {/* <img src={mark} alt="no image" className='tick' /> */}
                  </div>
                  <div>
                    GitLab
                  </div>
                </div>
              </Col>
            </Row>
          </div>

          <div className='p-1 mb-2 mt-2'>
            <Row>
              <Col>
                <div className='skill-card'>
                  <div className='image-section-skill-card'>
                    {/* <img src={mark} alt="no image" className='tick' /> */}
                  </div>
                  <div>
                    Responsive Ui Designs
                  </div>
                </div>
              </Col>
              {/* <Col>
                <div className='skill-card'>
                  <div className='image-section-skill-card'>
                    G
                  </div>
                  <div>
                    GitLab
                  </div>
                </div>
              </Col> */}
            </Row>
          </div>


        </div>

        <div className='contact-details-section1 mt-5 mb-5'>
          <div className='common-text mb-4 mt-3'>
            Languages
          </div>
          <div className='mt-3 '>
            <div className='contact-lists'>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" /></svg>
              </div>
              <div>
                <div className='mb-2 college-text'>
                  English
                </div>

              </div>
            </div>

          </div>
          <div className='mt-3 '>
            <div className='contact-lists'>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" /></svg>
              </div>
              <div>
                <div className='mb-2 college-text'>
                  Tamil
                </div>

              </div>
            </div>

          </div>
          <div className='mt-3 '>
            <div className='contact-lists'>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" /></svg>
              </div>
              <div>
                <div className='mb-2 college-text'>
                  Telungu
                </div>

              </div>
            </div>

          </div>


        </div>

        <div className='contact-details-section1 mt-5 mb-5'>
          <div className='common-text mb-4 mt-3'>
            Working Tools
          </div>


          <div className='row main-cards'>
            {images?.map((item, index) => {
              return (
                <div className='cardsssss col-lg-6 mb-3 mt-3'>
                  <img src={item?.image} alt="no image" className='images' />
                </div>
              )
            })}
          </div>


        </div>

        <div className='contact-details-section1 mt-5 mb-5'>
          <div className='common-text mb-4 mt-3'>
            What I Offer
          </div>


          <div>
            <div className='mt-3 '>
              <div className='contact-lists'>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" /></svg>
                </div>
                <div>
                  <div className='mb-2 college-text'>
                    Web Developement
                  </div>

                </div>
              </div>

            </div>
          </div>

          <div>
            <div className='mt-3 '>
              <div className='contact-lists'>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M80 0C44.7 0 16 28.7 16 64V448c0 35.3 28.7 64 64 64H304c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H80zm80 432h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16s7.2-16 16-16z" /></svg>
                </div>
                <div>
                  <div className='mb-2 college-text'>
                    App Developement
                  </div>

                </div>
              </div>

            </div>
          </div>


          <div>
            <div className='mt-3 '>
              <div className='contact-lists'>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" /></svg>

                </div>
                <div>
                  <div className='mb-2 college-text'>
                    Nodejs Developement
                  </div>

                </div>
              </div>

            </div>
          </div>


        </div>
      </div>
    </>
  )
}

export default Section1