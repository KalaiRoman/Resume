import React from 'react'
import './styles/Section2.scss';
import Section3 from '../section3/Section3';
function Section2() {
    return (
        <>
            <div className='section2-main'>

                <div className='name'>
                    KALAISURYA
                </div>
                <div className='domain-name'>
                    Frontend Developer
                </div>
            </div>

            <div className='borders'>

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