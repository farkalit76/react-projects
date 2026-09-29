
// JSX
function Page(){
    return (
        <div>
            <header>
                <nav>
                    <img src="./react-logo.png"  width="40px" />    
                </nav>
            </header>
        
        <h1>Reason I am exited to learn React.</h1>
        <ul>
            <li>It has a popular library, so I will be able to fit in.</li>
            <li>I am more likely abo=le to get a develper job.</li>
            <li>Power thousands of enterprise apps, inclusing mobile apps</li>
            <br/>
            <li>What a React Component? </li>
            <li>A function that returns React Elements. And an element is JSX code which return as HTML code.</li>
        </ul>
        <footer>
            <small> @2026 Mushahida Development. All rights reserved.</small>
        </footer>
    </div>
    )
}

ReactDOM.render(
    <Page />, 
    document.getElementById("root")
)