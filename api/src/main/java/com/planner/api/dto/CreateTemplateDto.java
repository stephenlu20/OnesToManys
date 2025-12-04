package com.planner.api.dto;

public class CreateTemplateDto {
    private long userId;
    private String label;
    private String category;
    
    // Getters and Setters
    public long getUserId() {
        return userId;
    }
    public String getLabel() {
        return label;
    }
    public String getCategory() {
        return category;
    }
    public void setUserId(long userId) {
        this.userId = userId;
    }
    public void setLabel(String label) {
        this.label = label;
    }
    public void setCategory(String category) {
        this.category = category;
    }
}
