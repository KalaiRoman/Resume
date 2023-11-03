import React from 'react'
import './styles/Section2.scss';
import Section3 from '../section3/Section3';
import { Typewriter } from 'react-simple-typewriter'

function Section2() {
    const handleType = (count) => {
        // access word count number
        console.log(count)
    }


    const handleDone = () => {
        console.log(`Done after 5 loops!`)
    }
    return (
        <>
            <div className='d-none d-md-block'>
                <div className='section2-main'>

                    <div className='name'>
                        KALAISURYA
                    </div>
                    <div className='domain-name '>
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

            <div className='mt-3'>
                <div className='common-texts mb-2 '>
                    About Me
                </div>
                <div className='about-text'>
                    3+ Years experience Reactjs Developer with hands-on experience in identifying web-based user interactions along with designing & implementing highly-reponsive user interface components by deploying React concepts. Proficient in translating designs & wireframes into high-quality code, and writing application interface code via javascript and Reactjs workflows. Adept at monitoring & maintaning frontend performance and troubleshooting & debugging the same to bloster overall performance.
                </div>
            </div>

            <div className='mt-4'>
                <Section3 />
            </div>
        </>
    )
}

export default Section2