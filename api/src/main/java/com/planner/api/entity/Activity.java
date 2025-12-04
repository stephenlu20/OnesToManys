package com.planner.api.entity;

import jakarta.persistence.*;

@Entity
public class Activity {
    

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private long userId;
    private String label;
    private String category;
    private int duration;
    private String dateTime;
    private boolean isCompleted = false;
    private String description;
    private String note;

    public Activity() {}

    public Activity(long userId, String label, String category, int duration, String dateTime, boolean isCompleted, String description, String note) {
        this.userId = userId;
        this.label = label;
        this.category = category;
        this.duration = duration;
        this.dateTime = dateTime;
        this.isCompleted = isCompleted;
        this.description = description;
        this.note = note;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }
    public long getUserId() {
        return userId;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getLabel() {
        return label;
    }
    public void setLabel(String label) {
        this.label = label;
    }
    public String getCategory() {
        return category;
    }
    public void setCategory(String category) {
        this.category = category;
    }
    public int getDuration() {
        return duration;
    }
    public void setDuration(int duration) {
        this.duration = duration;
    }
    public String getDateTime() {
        return dateTime;
    }
    public void setDateTime(String dateTime) {
        this.dateTime = dateTime;
    }
    public boolean isCompleted() {
        return isCompleted;
    }
    public void setCompleted(boolean completed) {
        isCompleted = !isCompleted;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public String getNote() {
        return note;
    }
    public void setNote(String note) {
        this.note = note;
    }
}
