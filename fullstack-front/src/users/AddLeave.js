import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function AddLeave() {

  let navigate=useNavigate()

  const[leave,setLeave]=useState({
    empName:"",
    department:"",
    leaveDate:"",
    reason:""
  })

  const{empName,department,leaveDate,reason}=leave

  const onInputChange=(e)=>{
    setLeave({...leave, [e.target.name]: e.target.value});
  };

  const onSubmit=async(e)=>{
    e.preventDefault();
    await axios.post("http://localhost:8080/leave",leave);
    navigate("/");
  };

  return (
  <div className="container">
    <div className="row">
      <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
        <h2 className="text-center m-4">Register your Leave</h2>

        <form onSubmit={(e)=>onSubmit(e)}>
        <div className="mb-3">
          <label htmlFor="EmpName" className="form-label">
            Employee Name
          </label>
          <input
          type={"text"}
          className="form-control"
          placeholder="Enter your name"
          name="empName"
          value={empName}
          onChange={(e)=>onInputChange(e)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Department" className="form-label">
            Department
          </label>
          <input
          type={"text"}
          className="form-control"
          placeholder="Enter your department"
          name="department"
          value={department}
          onChange={(e)=>onInputChange(e)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="leaveDate" className="form-label">
            Leave Date
          </label>
          <input
          type={"date"}
          className="form-control"
          placeholder="Enter your leave date"
          name="leaveDate"
          value={leaveDate}
          onChange={(e)=>onInputChange(e)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Reason" className="form-label">
            Reason
          </label>
          <input
          type={"text"}
          className="form-control"
          placeholder="Enter your reason"
          name="reason"
          value={reason}
          onChange={(e)=>onInputChange(e)}
          />
        </div>
        <button type="submit" className="btn btn-outline-primary">
          Submit
        </button>

        <Link className="btn btn-outline-danger mx-2" to="/">
          Cancel
        </Link>
        </form>
      </div>
    </div>
  </div>
  )
}
