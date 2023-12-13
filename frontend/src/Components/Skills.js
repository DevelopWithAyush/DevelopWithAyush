import React from 'react'
import ProgressBar from './ProgressBar'
import skillbg from "../assets/img/color-sharp.png"

function Skills() {
    return (
        <section className="skills">
            <div>
                <div className="skillscontainer">
                    <div>
                    <h3>Skills</h3>
                    <p>
                        In the past year, I have acquired various skills in website development through diverse resources such as YouTube, Instagram, and Google.</p>
                        </div>
                    <div className="skillrow">
                        <ProgressBar percent= "65" skillname ="React"></ProgressBar>
                        <ProgressBar percent= "78" skillname ="Node.js"></ProgressBar>
                        <ProgressBar percent= "85" skillname ="mongodb"></ProgressBar>

                    </div>
                </div>
            </div>
            <img className="background-image-left" src={skillbg} alt="bg" />
        </section>
    )
}

export default Skills
