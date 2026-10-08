import React from "react"

export default function SignupForm(){

    const [formData, setFormData] = React.useState(
        {
            username : "", 
            current_password : "", 
            confirm_password : "",
            isAgree : true
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
        if(formData.current_password === formData.confirm_password){
            console.log("Successfully signed. "+formData)
        }else{
            alert("Password do not match.")
            return;
        }
        if( formData.isAgree){
            console.log("Thanks for signing up...")
        }
    }
    return (
        <div>
            <form className="my-form" onSubmit={handleSubmitForm}>
                <legend>
                    <input type="text"      name="username"          value={formData.username}    placeholder="Eamil/Username"      onChange={handleChnage}/>
                    <br/>
                    <input type="password"  name="current_password"  value={formData.current_password} placeholder="Password" onChange={handleChnage}/>
                    <br/>
                    <input type="password" name="confirm_password"   value={formData.confirm_password}  placeholder="Confirm password" onChange={handleChnage}/>
                    <br/>
                    <input type="checkbox"  name="isAgree" checked={formData.isAgree} onChange={handleChnage}/>
                    <label htmlFor="isAgree">I want to join the news letter.</label>
                </legend>
                <br/>
                <br/>
                <button>Sign up</button>
            </form>
        </div>
    )
}