import React from "react";

//import memesData from "./memesData";


export default function Meme(){
    
    const [memeData, setMemeData] = React.useState({
        topText: "",
        bottomText: "",
        randomImage : "./images/travel-kashmir.jpg"
    })

    //const memesArray = memesData.data.memes;
    const [memeImage, setMemeImage] = React.useState("./images/travel-kashmir.jpg");
    //console.log("memeImage:"+memeImage)
    

    // function handleClick(){
    //     const randomNumber = Math.floor(Math.random() * memesArray.length);
    //     const imageUrl = memesArray[randomNumber].imageUrl;
    //     setMemeImage(imageUrl)
    //     setMemeData(prevData => {
    //         return {...prevData,
    //             randomImage : imageUrl
    //         }
    //     })
    // }

    const[allMemes, setAllMemes] =React.useState({})
    //console.log(allMemes)

    // React.useEffect(() => {
    //     console.log("image effect run...")
    //     fetch("https://api.imgflip.com/get_memes")
    //     .then( resp => resp.json())
    //     .then( data => setAllMemes(data.data.memes))
    // }, [])


    //Calling  API with async and wait function
    React.useEffect(() => {
        console.log("image effect run...")

        async function getMemes(params) {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
        
    }, [])


    console.log("lenght:"+allMemes.length)

    function handleClick(){
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        console.log("randomNumber:"+randomNumber)
        const imageUrl = allMemes[randomNumber].url;
        console.log("imageUrl"+imageUrl)
        setMemeImage(imageUrl)
        setMemeData(prevData => {
            return {...prevData,
                randomImage : imageUrl
            }
        })
    }

    function handleChange(event){
        const {name, value} = event.target
        console.log(memeData);
        setMemeData(prevData => {
            return {...prevData,
                [name] : value
            }
        })
    }

    return (
        <main>
            <div className="my-form" >
                <input type="text" name="topText"    value={memeData.topText}    placeholder="Top text"    onChange={handleChange} />
                <br/>
                <input type="text" name="bottomText" value={memeData.bottomText} placeholder="Bottom text" onChange={handleChange} />
                <br/>
                <button id="imageButton" onClick={handleClick} className="form-button">Get new Meme Image (*)</button>
                <br/>
                <div className="meme">
                    <img name="randomImage"  className="meme-image" src={memeData.randomImage} alt="image displayed" />
                    <h2 className="meme-text-top">{memeData.topText}</h2>
                    <h2 className="meme-text-bottom">{memeData.bottomText}</h2>
                </div>
            </div>
        </main>
    )
}