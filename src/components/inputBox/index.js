import { useState } from "react"

export const InputForm = () => { 
    const [userInput, setUserInput] = useState();
    const [name, setName] = useState();
    return (
        <form onSubmit={(e) =>{ e.preventDefault(); setName(userInput)}}>
            <h1>{name}</h1>
            <input onChange={(e)=>setUserInput(e.target.value)}></input>
            <button type = "submit">Submit</button>
            {/* submitting a form is an event */}
        </form>
    )
}