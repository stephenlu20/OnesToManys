package com.planner.api.service;

import java.util.Objects;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.planner.api.entity.Activity;
import com.planner.api.dto.CreateActivityDto;
import com.planner.api.dto.UpdateActivityDto;
import com.planner.api.repository.ActivityRepository;
import java.util.List;

@Service
public class ActivityService {
    private final ActivityRepository activityRepository;

    public ActivityService(ActivityRepository activityRepository) {
        this.activityRepository = activityRepository;
    }

    // Get
    public ResponseEntity<Activity> getActivityById(long id) {
        Objects.requireNonNull(id, "ID cannot be null");
        Activity activity = activityRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Activity not found"));
        return ResponseEntity.ok(activity);
    }

    public ResponseEntity<List<Activity>> getActivitiesByUserId(long userId) {
        Objects.requireNonNull(userId, "User ID cannot be null");
        List<Activity> activities = activityRepository.findAllByUserId(userId);
        return ResponseEntity.ok(activities);
    }

    // Create
    public Activity createActivity(CreateActivityDto dto) {
        Activity activity = new Activity(
            dto.getUserId(),
            dto.getLabel(),
            dto.getCategory(),
            dto.getDuration(),
            dto.getDateTime(),
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

    public ResponseEntity<Activity> deleteActivity(Long id) {
        Objects.requireNonNull(id, "ID cannot be null");
        if (!activityRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        activityRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @Transactional
    public ResponseEntity<Activity> deleteActivitiesByUserId(Long userId) {
        List<Activity> activities = activityRepository.findAllByUserId(userId);
        if (activities.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        activityRepository.deleteAll(activities);
        return ResponseEntity.noContent().build();
    }
}
