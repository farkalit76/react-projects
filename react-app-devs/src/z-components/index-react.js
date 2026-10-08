
// JSX
const resturant = (
    <div>
        <img src="./react-logo.png"  width="40px" />
        <h1>Fun facts about react</h1>
        <ul>
            <li>Was first realeased in 2013</li>
            <li>Was originaly created by Jordan Walke</li>
            <li>Has well over 500k start on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Power thousands of enterprise apps, inclusing mobile apps</li>
        </ul>
    </div>
)
console.log(resturant);

ReactDOM.render(
    resturant, 
    document.getElementById("root")
)