import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function Home() {
    // Destructure the useState hook correctly
    const [details, setDetails] = useState([]);

    const{id}=useParams()

    useEffect(() => {
        loadDetails();
    }, []);

    const loadDetails = async () => {
        try {
            const response = await axios.get("http://localhost:8080/details");
            setDetails(response.data);
        } catch (error) {
            console.error("Error fetching details:", error);
        }
    };

    const deleteLeave=async (id)=>{
        await axios.delete(`http://localhost:8080/leave/${id}`)
        loadDetails()
    }

    return (
        <div className='container'>
            <div className='py-4'>
                <table className="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Department</th>
                            <th scope="col">Employee Name</th>
                            <th scope="col">Leave Date</th>
                            <th scope="col">Reason</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {details && details.map((leave, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{leave.department}</td>
                                <td>{leave.empName}</td>
                                <td>{leave.leaveDate}</td>
                                <td>{leave.reason}</td>
                                <td>
                                  <Link className="btn btn-primary mx-2"
                                  to={`/viewleave/${leave.id}`}
                                  >View</Link>
                                  <Link className="btn btn-ouline-primary mx-2"
                                   to={`/editleave/${leave.id}`}>
                                    Edit</Link>
                                  <button className="btn btn-danger mx-2"
                                  onClick={()=>deleteLeave(leave.id)}
                                  >Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
