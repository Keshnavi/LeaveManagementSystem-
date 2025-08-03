package com.leaveManagement.fullstackbackend.repository;

import com.leaveManagement.fullstackbackend.model.LeaveDetail;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LeaveRepository extends JpaRepository<LeaveDetail,Long>{
}
