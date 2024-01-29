import React, { useState } from 'react'

function Card({data,onDelete,onEdit}) {

    const [editMode,setEditMode]=useState(false);
    const [editName,setEditName]=useState(data.name);
    const [editDescription,setEditDescription]=useState(data.description);
    const [status,setStatus]=useState(data.status);

    const handleStatus=(e)=>{
        setStatus(e.target.value)
    }
    const handleEdit=()=>{
        setEditMode(true);
    }

    const handleSave=()=>{
        setEditMode(false);
        onEdit( data,{
            name:editName,
            description:editDescription
        });
    }

    const handleCancel=()=>{
        setEditMode(false);
        setEditName(data.name);
        setEditDescription(data.description);
        
    }
  return (
    <div className='col mb-4'>

        {
            editMode?
            <>
                <div className="card " style={{width:"18rem"}}>
            <div className="card-body ms-0 p-2">
                    <h6 className="card-title text-start pb-2">Name: <input type="text" value={editName} onChange={(e)=>setEditName(e.target.value)} placeholder='ToDo Name'></input></h6>
                <h6 className="card-subtitle mb-2 text-start pb-2">Description: <input type="text" value={editDescription} onChange={(e)=>setEditDescription(e.target.value)} placeholder='ToDo Description'></input></h6>
                 
                
                <button className='btn btn-success me-4' onClick={handleSave} >Save</button>
                <button className='btn btn-danger' onClick={handleCancel}>Cancel</button>
                </div>
            </div>
            
            </>
            :
            <>
             <div className="card" style={{width:"18rem"}}>
            <div className="card-body ms-0">
                <h6 className="card-title text-start pb-2">Name: {data.name}</h6>
                <h6 className="card-subtitle mb-2 text-start pb-2">Description: {data.description}</h6>
                <div className="status d-flex g-2">
                    <h6 className="card-text text-start pb-2">Status:</h6>    
                    <select value={status} onChange={handleStatus}>
                        <option value="Completed">Completed</option>
                        <option value="Not Completed">Not Completed</option>
                    </select>
                </div> 
                
                <div className="card-btns d-flex justify-content-between text-end pt-3">
                <a href="#" className="btn btn-success edit" onClick={handleEdit}>Edit</a>
                <a href="#" className="btn  delete" onClick={()=>onDelete(data)}>Delete</a>
                </div>
                
            </div>
        </div>
            
            </>
        }
       
    </div>
  )
}

export default Card