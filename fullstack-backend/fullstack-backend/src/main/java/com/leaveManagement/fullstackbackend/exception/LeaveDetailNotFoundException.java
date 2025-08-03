package com.leaveManagement.fullstackbackend.exception;

public class LeaveDetailNotFoundException extends RuntimeException{
    public LeaveDetailNotFoundException(Long id) {
        super("Could not find the employee with the id"+ id);
    }
}
