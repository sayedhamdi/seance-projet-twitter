import { useEffect, useState } from "react"

let data = [
    {
        id:1,
        name:"John Doe",
        email:"jhondoe@gmail.com",
        phone:"200000000"
    },
    {
        id:2,
        name:"Samira Doe",
        email:"samiraDoe@gmail.com",
        phone:"200000000"
    }
]

export default function ListOfUsers(){
   
    const [users,setUsers] = useState(data)
    const [todos,setTodos] = useState([])
    const [name,setName] = useState("")

    useEffect(()=>{
        // list of users
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(res=>setUsers(res))
    },[])


    const jibElData = (id)=>{
        fetch(`https://jsonplaceholder.typicode.com/todos`)
        .then(res=>res.json())
        .then(todos=>{
            let filtredTodos = todos.filter(todo=>todo.userId===id)
            setTodos(filtredTodos)
            console.log(todos)
        })
        
    }

    useEffect(()=>{
        // get the id
        if(name.length===0){
            return
        }
        let [user] = users.filter(u => u.name.toUpperCase().includes(name.toUpperCase()))
        console.log(user)
        jibElData(user.id)
    },[name])
    return(
        <div>
            <h1>List of users</h1>
            search : {name}
            <input type="text" onChange={(e)=>setName(e.target.value)}/>
            <ul>
                {users.map(
                    (user)=>
                    <li key={user.id}>
                       <button onClick={()=>jibElData(user.id)}> {user.name} | {user.email} | {user.phone}</button>
                    </li>
                )}
            </ul>
            <ul>
                {todos.map(
                    (todo)=>
                    <li key={todo.id}>
                        {todo.title}
                    </li>
                )}
            </ul>
        </div>
    )
} 