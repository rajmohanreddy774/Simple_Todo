import { useState } from 'react'
import {TodoItems} from './Todoitems'
import {nanoid} from 'nanoid';
import { Todoinput } from './Todoinput'

function Todo() {
    
    const [todoList,setTodoList]=useState([]);
    const getlistdata=(todo)=>{
        const payload={
            title:todo,
            status:false,
            id:nanoid(5),
        }
        console.log("recieved",todo);

        setTodoList([...todoList,payload])  
    }
    const handelstatus=(id)=>{
  
        setTodoList(todoList.map(e=>e.id === id ? {...e, status : !e.status}:e))
      
    }  
    return (
        <div className='main'>
            <h1>Todo List</h1>
          
            <Todoinput getdata={getlistdata}></Todoinput>
                { 
                    todoList.map((e)=>( 
                    <TodoItems handelstatus={handelstatus} todo={e}></TodoItems>
                    ))
                }
        </div>

    )
}
export { Todo }