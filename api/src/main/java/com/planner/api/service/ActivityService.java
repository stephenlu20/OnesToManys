package com.planner.api.service;

import java.util.Objects;

import org.springframework.stereotype.Service;
import com.planner.api.entity.Activity;
import com.planner.api.dto.CreateActivityDto;
import com.planner.api.dto.UpdateActivityDto;
import com.planner.api.repository.ActivityRepository;

@Service
public class ActivityService {
    private final ActivityRepository activityRepository;

    public ActivityService(ActivityRepository activityRepository) {
        this.activityRepository = activityRepository;
    }

    // Create
    public Activity createActivity(CreateActivityDto dto) {
        Activity activity = new Activity(
            dto.getUserId(),
            dto.getLabel(),
            dto.getCategory(),
            dto.getDuration(),
            dto.getDateTime(),
            dto.getIsCompleted(),
            dto.getDescription(),
            dto.getNote()
        );
        return activityRepository.save(activity);
    }

    // Modify
    public Activity modifyActivity(Long id, UpdateActivityDto dto) {
        Objects.requireNonNull(id, "ID cannot be null");
        Activity activity = activityRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Activity not found"));
        if (dto.getLabel() != null)       activity.setLabel(dto.getLabel());
        if (dto.getCategory() != null)    activity.setCategory(dto.getCategory());
        if (dto.getDuration() != null)    activity.setDuration(dto.getDuration());
        if (dto.getDateTime() != null)    activity.setDateTime(dto.getDateTime());
        if (dto.getDescription() != null) activity.setDescription(dto.getDescription());
        if (dto.getNote() != null)        activity.setNote(dto.getNote());
        Objects.requireNonNull(activity, "Activity cannot be null");

        return activityRepository.save(activity);
    }

    // Toggle Completion
    public Activity toggleCompletion(Long id) {
        Objects.requireNonNull(id, "ID cannot be null");
        Activity activity = activityRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Activity not found"));
        activity.setCompleted(!activity.isCompleted());
        return activityRepository.save(activity);   
    }

    
}
