import React, { useState } from 'react'

function AddTask({onSubmit}) {

  const [name,setName]=useState("");
  const [description,setDescription]=useState("")

  const handleNameChange=(e)=>{
    setName(e.target.value);
  }

  const handleDescriptionChange=(e)=>{
    setDescription(e.target.value);
  }

const handleSubmit=(e)=>{
  e.preventDefault();
  onSubmit({name,description});
  setName("");
  setDescription("");
}
  return (
    <div>
        <div className="title text-success fw-bold pb-3">My ToDo</div>
        <form className='d-flex justify-content-between pb-5' onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={handleNameChange} placeholder='ToDo Name'></input>
            <input type="text" value={description} onChange={handleDescriptionChange} placeholder='ToDo Description'></input>
            <button className='btn btn-success' type="submit">Add Todo</button>
        </form>

    </div>
  )
}

export default AddTask