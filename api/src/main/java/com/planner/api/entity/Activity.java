package com.planner.api.entity;

import jakarta.persistence.*;

@Entity
public class Activity {
    

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private long userId;
    private String Label;
    private String Category;
    private int Duration;
    private String dateTime;
    private boolean isCompleted = false;
    private String Description;
    private String Note;

    public Activity() {}

    public Activity(String label, String category, int duration, String dateTime, boolean isCompleted, String description, String note, long userId) {
        Label = label;
        Category = category;
        Duration = duration;
        this.dateTime = dateTime;
        this.isCompleted = isCompleted;
        Description = description;
        Note = note;
        this.userId = userId;
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
        return Label;
    }
    public void setLabel(String label) {
        Label = label;
    }
    public String getCategory() {
        return Category;
    }
    public void setCategory(String category) {
        Category = category;
    }
    public int getDuration() {
        return Duration;
    }
    public void setDuration(int duration) {
        Duration = duration;
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
        return Description;
    }
    public void setDescription(String description) {
        Description = description;
    }
    public String getNote() {
        return Note;
    }
    public void setNote(String note) {
        Note = note;
    }
}
