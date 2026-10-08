import React from "react"

//JSX
export default function AppMain(props) {

    return (
        <main className={props.darkMode ? "dark" : ""}>
            <h1>Reason I am exited to learn React.</h1>
            <ul>
                <li>It has a popular library, so I will be able to fit in.</li>
                <li>I am more likely aboute to get a develper job.</li>
                <li>Power thousands of enterprise apps, including mobile apps</li>
                <br/>
                <li>What a React Component? </li>
                <li>A function that returns React Elements. </li>
                <li>And an element is JSX code which return as HTML code.</li>
            </ul>
            <br/>
        </main>
    )
}