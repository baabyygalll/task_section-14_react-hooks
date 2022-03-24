import React, {useState} from "react";
// Style
import "./style.module.css"


const Form = (props) => {


    const [inputTodo, setInputTodo] = useState("");

    const handleSubmit =(event) => {
        event.preventDefault();

        const newTodo = {
            id: Math.floor(Math.random() * 100 + 1),
            title: inputTodo,
            completed : false
        }

        props.createTodo(newTodo);
    }


    

    const handleInputTodo = (event) => {
                setInputTodo(event.target.value)

    }

    return (
        <form onSubmit={handleSubmit}>
           <div>
               <input onChange={handleInputTodo} placeholder="Add to do..."  value={inputTodo} type="text"></input>
               <button type="submit">Submit</button>
           </div>
        </form>
    )

}

export default Form;