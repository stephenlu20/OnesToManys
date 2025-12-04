package com.planner.api.controller;
import java.util.Objects;

import org.springframework.web.bind.annotation.*;
import com.planner.api.dto.CreateActivityDto;
import com.planner.api.dto.UpdateActivityDto;
import com.planner.api.entity.Activity;
import com.planner.api.repository.ActivityRepository;
import com.planner.api.service.ActivityService;
import java.util.List;


@RestController
@RequestMapping("/activity")
public class ActivityController {

    private final ActivityRepository activityRepository;

    private final ActivityService activityService;

    public ActivityController(ActivityService activityService, ActivityRepository activityRepository) {
        this.activityService = activityService;
        this.activityRepository = activityRepository;
    }

    @GetMapping("/{id}")
    public Activity getActivity(@PathVariable Long id) {
        Objects.requireNonNull(id, "ID cannot be null");
        return activityRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Activity not found"));
    }

    @GetMapping("/user/{userId}")
    public  List<Activity> getActivitiesByUserId(@PathVariable Long userId) {
        Objects.requireNonNull(userId, "User ID cannot be null");
        return activityRepository.findAllByUserId(userId);
    }

    @PostMapping
    public Activity createActivity(@RequestBody CreateActivityDto dto) {
        return  activityService.createActivity(dto);
    }

    @PutMapping("/{id}")
    public Activity updateActivity( @PathVariable Long id,
                            @RequestBody UpdateActivityDto dto) {
        return activityService.modifyActivity(id, dto);
    }

    @PutMapping("toggle/{id}")
    public Activity putMethodName(@PathVariable String id) {
        
        return activityService.toggleCompletion(Long.parseLong(id));
    }

    @DeleteMapping("/{id}")
    public void deleteActivity(@PathVariable Long id) {
            Objects.requireNonNull(id, "ID cannot be null");
            Activity activity = activityRepository.findById(id)
            .orElseThrow(() -> new IllegalArgumentException("Activity not found"));
            Objects.requireNonNull(activity, "Activity cannot be null");
            activityRepository.delete(activity);
    }

    @DeleteMapping("/user/{userId}")
    public void deleteActivitiesByUserId(@PathVariable Long userId) {
        Objects.requireNonNull(userId, "User ID cannot be null");
        List<Activity> activities = activityRepository.findAllByUserId(userId);
        if (activities.isEmpty()) {
            throw new IllegalArgumentException("No activities found for the user"); 
        }
    }
    
}
