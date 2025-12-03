package com.planner.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.planner.api.entity.Activity;

public interface ActivityRepository extends JpaRepository<Activity, Long>{
    
}
