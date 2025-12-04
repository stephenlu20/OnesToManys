package com.planner.api.dto;

public class UpdateActivityDto {
    private String label;
    private String category;
    private Integer duration;
    private String dateTime;
    private Boolean isCompleted;
    private String description;
    private String note;

    // Getters and Setters
    public String getLabel() {
        return label;
    }
    public String getCategory() {
        return category;
    }
    public Integer getDuration() {
        return duration;
    }
    public String getDateTime() {
        return dateTime;
    }
    public Boolean getIsCompleted() {
        return isCompleted;
    }
    public String getDescription() {
        return description;
    }
    public String getNote() {
        return note;
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
    public void setIsCompleted(boolean isCompleted) {
        this.isCompleted = isCompleted;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public void setNote(String note) {
        this.note = note;
    }
}
