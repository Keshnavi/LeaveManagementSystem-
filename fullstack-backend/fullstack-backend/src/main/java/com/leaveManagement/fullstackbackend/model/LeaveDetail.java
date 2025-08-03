package com.leaveManagement.fullstackbackend.model;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

import java.util.Date;

@Entity
public class LeaveDetail {

    @Id
    @GeneratedValue
    private long id;
    private String EmpName;
    private String Department;
    private Date LeaveDate;
    private String Reason;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getEmpName() {
        return EmpName;
    }

    public void setEmpName(String empName) {
        EmpName = empName;
    }

    public String getDepartment() {
        return Department;
    }

    public void setDepartment(String department) {
        Department = department;
    }

    public Date getLeaveDate() {
        return LeaveDate;
    }

    public void setLeaveDate(Date leaveDate) {
        LeaveDate = leaveDate;
    }

    public String getReason() {
        return Reason;
    }

    public void setReason(String reason) {
        Reason = reason;
    }
}
