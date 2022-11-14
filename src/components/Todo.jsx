function Todo(props) {
    console.log(props)
    return ( 
        <div className="py-2 space-x-2 mx-6 border-b border-gray-200">
            <input 
                type="checkbox" 
                defaultChecked={props.completed} 
                name="" 
                id={props.id} 
                onChange={() => props.toggleTaskCompleted(props.id)}
            />
            <label htmlFor={props.id}>{props.name}</label>
        </div>
     );
}

export default Todo;