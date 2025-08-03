import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export default function ViewLeave() {
    const [leave, setLeave] = useState({
        id: '',
        empName: '',
        department: '',
        leaveDate: '',
        reason: '',
    });
    const [error, setError] = useState('');

    const { id } = useParams();

    useEffect(() => {
        loadDetails();
    }, []);

    const loadDetails = async () => {
        try {
            const result = await axios.get(`http://localhost:8080/leave/${id}`);
            setLeave(result.data);
        } catch (error) {
            setError('Failed to load leave details.');
        }
    };

    
    const formatDate = (date) => {
        
        return date;
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Leave Details</h2>

                    {error && <div className="alert alert-danger">{error}</div>}

                    <div className="card">
                        <div className="card-header">
                            Details of Employee id : {leave.id}
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <b>Employee Name:</b> {leave.empName}
                                </li>
                                <li className="list-group-item">
                                    <b>Department:</b> {leave.department}
                                </li>
                                <li className="list-group-item">
                                    <b>LeaveDate:</b> {formatDate(leave.leaveDate)}
                                </li>
                                <li className="list-group-item">
                                    <b>Reason:</b> {leave.reason}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link className="btn btn-primary my-2" to={'/'}>
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
