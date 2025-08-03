package com.leaveManagement.fullstackbackend.controller;

import com.leaveManagement.fullstackbackend.exception.LeaveDetailNotFoundException;
import com.leaveManagement.fullstackbackend.model.LeaveDetail;
import com.leaveManagement.fullstackbackend.repository.LeaveRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class LeaveController {

    @Autowired
    private LeaveRepository leaveRepository;

    @PostMapping("/leave")
    LeaveDetail detail(@RequestBody LeaveDetail detail) {
        return leaveRepository.save(detail);
    }

    @GetMapping("/details")
    List<LeaveDetail> getAllDetails() {
        return leaveRepository.findAll();
    }

    @GetMapping("/leave/{id}")
    LeaveDetail getDetailById(@PathVariable Long id){
        return leaveRepository.findById(id)
                .orElseThrow(()->new LeaveDetailNotFoundException(id));
    }

    @PutMapping("/leave/{id}")
    LeaveDetail updateLeave(@RequestBody LeaveDetail newLeaveDetail,@PathVariable Long id) {
        return leaveRepository.findById(id)
                .map(leaveDetail -> {
                    leaveDetail.setEmpName(newLeaveDetail.getEmpName());
                    leaveDetail.setDepartment(newLeaveDetail.getDepartment());
                    leaveDetail.setLeaveDate(newLeaveDetail.getLeaveDate());
                    leaveDetail.setReason(newLeaveDetail.getReason());
                    return leaveRepository.save(leaveDetail);
                }).orElseThrow(()->new LeaveDetailNotFoundException(id));
    }

    @DeleteMapping("/leave/{id}")
    String deleteLeave(@PathVariable Long id){
        if(!leaveRepository.existsById(id)){
            throw new LeaveDetailNotFoundException(id);
        }
        leaveRepository.deleteById(id);
        return "User with id "+id+" has been deleted successfully.";
    }

    
}
