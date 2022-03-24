import "./style.module.css"


const TodoList = ({dataTodos}) => {
 console.log(dataTodos);

    return (
       <div className="list">
           <ul>
              { dataTodos.map((todo) => 
                   { return <li key={todo.id}>{todo.title} </li>  })
              }
             </ul>
       </div>
    
    
    )
}

export default TodoList;