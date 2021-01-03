import React from 'react'

function About() {
    return (
        <div style={{color:"white",display:'flex',height:"90vh",flexDirection:"column",padding:"3vh"}}>
            <div style={{backgroundColor:"green",height:"20vh",textAlign:"center"}}>
                <h1>Welcome to Fortune Teller "Add globe emoji here"!</h1>
                <h2>This is project is inspired by the New year new hack conducted by MLH </h2>
                <a href="#"><p>Click Here to learn more</p></a>
            </div>
            <div id="techStack">
                <h1>Tech stack used</h1>
            </div>
            <div id="creator">
                <h1>Meet the Creators !</h1>
            </div>
        </div>
    )
}

export default About
