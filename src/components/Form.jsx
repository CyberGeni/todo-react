import { useState } from "react";

function Form(props) {

const [name, setName] = useState('')
    function handleChange(e) {
        setName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.addTask(name);
        setName('');
    }

    return ( 
        <form onSubmit={handleSubmit} className="flex">
            <input 
                className="flex border w-full py-1 px-2 my-2 mx-6 shadow-sm shadow-sky-300 border-sky-500" 
                type="text" 
                name="" 
                id="" 
                placeholder="Add new" 
                value={name}
                onChange={handleChange}
            />
            <button type="submit"></button>
        </form>
     );
}

export default Form;