package com.planner.api.service;

import java.util.Objects;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

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

    @GetMapping("/{id}")
    public ResponseEntity<Activity> getActivityById(@PathVariable Long id) {
        Objects.requireNonNull(id, "ID cannot be null");
        Activity activity = activityRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Activity not found"));
        return ResponseEntity.ok(activity);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Activity>> getActivitiesByUserId(@PathVariable long userId) {
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

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteActivity(@PathVariable Long id) {
        Objects.requireNonNull(id, "ID cannot be null");
        if (!activityRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        activityRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/user/{userId}")
    public ResponseEntity<Void> deleteActivitiesByUserId(@PathVariable long userId) {
        List<Activity> activities = activityRepository.findAllByUserId(userId);
        if (activities.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        activityRepository.deleteAll(activities);
        return ResponseEntity.noContent().build();
    }
}
