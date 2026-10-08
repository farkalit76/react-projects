//ReactDOM.render(<h1>Hello everyone!</h1>, document.getElementById("root"))

//ReactDOM.render(<p>Hello everyone! How are you? </p>, document.getElementById("root"))

//ReactDOM.render(<ul><li>Thing-1</li><li>Thing-2</li><li>Thing-3</li></ul>, document.getElementById("root"))

function Navbar(){

    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Features</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Pricing</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#">Disabled</a>
                </li>
                </ul>
            </div>
        </nav>

    )
  
}

function MainContent(){
    return (
        <h1>Hello friends! I am testing React @17 now.</h1>
    )
}

ReactDOM.render(
    <div>
        <Navbar/>
        <MainContent/>
    </div>,
    document.getElementById("root")
)


  // return(
    //     <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //     <a className="navbar-brand" href="#">Navbar</a>
    //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //         <span className="navbar-toggler-icon"></span>
    //     </button>

    //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //         <ul className="navbar-nav mr-auto">
    //         <li className="nav-item active">
    //             <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
    //         </li>
    //         <li className="nav-item">
    //             <a className="nav-link" href="#">Link</a>
    //         </li>
    //         <li className="nav-item dropdown">
    //             <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    //             Dropdown
    //             </a>
    //             <div className="dropdown-menu" aria-labelledby="navbarDropdown">
    //             <a className="dropdown-item" href="#">Action</a>
    //             <a className="dropdown-item" href="#">Another action</a>
    //             <div className="dropdown-divider"></div>
    //             <a className="dropdown-item" href="#">Something else here</a>
    //             </div>
    //         </li>
    //         <li className="nav-item">
    //             <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
    //         </li>
    //         </ul>
    //         <form className="form-inline my-2 my-lg-0">
    //         <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
    //         <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    //         </form>
    //     </div>
    //     </nav>
    // )