import React from "react"

export default function MyForm(){

    const [formData, setFormData] = React.useState(
        {
            firstName:"", 
            lastName: "", 
            email : "", 
            comments : "", 
            isAdult : true,
            employment :"fulltime",
            favColor : ""
        })


    function handleChnage(event){
        //console.log("Chnaged!"+event.target.name)
        const {name, value, type, checked} = event.target;
        setFormData(prevData => {
            return {...prevData,
                [name] : type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmitForm(event){
        event.preventDefault()
        console.log("handleSubmitForm!")
         console.log(formData)
    }
    return (
        <form className="my-form" onSubmit={handleSubmitForm}>
            <input type="text" name="firstName" value={formData.firstName} placeholder="First Name" onChange={handleChnage}/>
            <br/>
            <input type="text" name="lastName"  value={formData.lastName} placeholder="First Name" onChange={handleChnage}/>
            <br/>
            <input type="text" name="email"     value={formData.email}    placeholder="Eamil"      onChange={handleChnage}/>
            <br/>
            <textarea name="comments" value={formData.comments} placeholder="Comments" onChange={handleChnage}/>
            <br/>
            <input type="checkbox" id="isAdult" name="isAdult" checked={formData.isAdult} onChange={handleChnage}/>
            <label htmlFor="isAdult">Are you above 18?</label>
            <br/>
            <fieldset>
                <legend>Current employment status</legend>
                <input type="radio" name="employment" value="fulltime"   checked={formData.employment === "fulltime"} onChange={handleChnage}/>
                    <label htmlFor="fulltime">Full-time</label>
                <input type="radio" name="employment" value="parttime"   checked={formData.employment === "parttime"} onChange={handleChnage}/>
                    <label htmlFor="parttime">Part-time</label>
                <input type="radio" name="employment" value="unemployed" checked={formData.employment === "unemployed"} onChange={handleChnage}/>
                    <label htmlFor="unemployed">Unemployed</label>
            </fieldset>
            <br/>
            <label htmlFor="favColor">What is your favorite color?</label><br/>
            <select name="favColor" value={formData.favColor} onChange={handleChnage}>
                <option value="">--Choose--</option>
                <option value="white">White</option>
                <option value="blue">Blue</option>
                <option value="skyblue">Skyblue</option>
                <option value="black">Black</option>
            </select>
            <br/>
            <br/>
            <button>Submit Form</button>
        </form>
    )
}