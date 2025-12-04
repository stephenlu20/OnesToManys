package com.planner.api.dto;


public class CreateActivityDto {
    private long userId;
    private String label;
    private String category;
    private int duration;
    private String dateTime;
    private String description;
    private String note;

    // Getters and Setters
    public Long getUserId() {
        return userId;
    }
    public String getLabel() {
        return label;
    }
    public String getCategory() {
        return category;
    }
    public int getDuration() {
        return duration;
    }
    public String getDateTime() {
        return dateTime;
    }
    public String getDescription() {
        return description;
    }
    public String getNote() {
        return note;
    }
    public void setUserId(Long userId) {
        this.userId = userId;
    }
    public void setLabel(String label) {
        this.label = label;
    }
    public void setCategory(String category) {
        this.category = category;
    }
    public void setDuration(int duration) {
        this.duration = duration;
    }
    public void setDateTime(String dateTime) {
        this.dateTime = dateTime;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public void setNote(String note) {
        this.note = note;
    }
}
