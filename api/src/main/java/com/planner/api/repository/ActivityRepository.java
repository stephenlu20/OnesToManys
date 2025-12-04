package com.planner.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.planner.api.entity.Activity;
import java.util.List;

public interface ActivityRepository extends JpaRepository<Activity, Long>{
    List<Activity> findAllByUserId(long userId);
}
