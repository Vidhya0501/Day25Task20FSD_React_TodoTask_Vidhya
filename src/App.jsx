import "./App.css";
import AddTask from "./AddTask";
import Card from "./Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useState } from "react";
function App() {

  const [data,setData]=useState([]);
  const [statusFilter,setStatusFilter]=useState("All");

  // const handleTodoData=(TodoData)=>{
  //   setData([...data,TodoData])
  // }

  const handleTodoData=({name,description})=>{
    const newData={name,description,status:"Not Completed"};
    setData([...data,newData]);
  }

  const handleStatusFilter=(e)=>{
    setStatusFilter(e.target.value);
  }

  const handleDelete=(deleteTodo)=>{
    const newData=data.filter((todo)=> todo!= deleteTodo);
    setData(newData);
  }

  const handleTodoEdit=(originalTodo,editedTodo)=>{
    const newData=data.map((todo)=>todo===originalTodo?{...todo,...editedTodo}:todo);
    setData(newData);
  }

  // const filteredData=data.filter(data=>{
  //   if(statusFilter==="All") return true;
  //   return data.status===statusFilter;
  // })

  return (
    <>
      <div className="container-fluid">
        <AddTask onSubmit={handleTodoData}/>
        <div className="container">
          <div className="todo_head d-flex justify-content-between pb-5">
            <h5>My Todos</h5>
            <div className="status-filter d-flex">
              <h5>Status Filter:</h5>
              

<select value={statusFilter} onChange={handleStatusFilter} id="status-filter">
                        <option value="All">All</option>
                        <option value="Completed">Completed</option>
                        <option value="Not Completed">Not Completed</option>
                    </select>

            </div>
          </div>
          <div className="row">
            {
              statusFilter==="All"?
              data.map((item,index)=>(

                <Card key={index} data={item} onDelete={handleDelete} onEdit={handleTodoEdit}/>
              ))
              :
              data.map((item,index)=>(

                <Card key={index} data={item} onDelete={handleDelete} onEdit={handleTodoEdit}/>
              )).filter((data)=>data.status===statusFilter)
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
