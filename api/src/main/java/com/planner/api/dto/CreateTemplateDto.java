package com.planner.api.dto;

public class CreateTemplateDto {
    private long userId;
    private String Label;
    private String Category;
    
    // Getters and Setters
    public long getUserId() {
        return userId;
    }
    public String getLabel() {
        return Label;
    }
    public String getCategory() {
        return Category;
    }
    public void setUserId(long userId) {
        this.userId = userId;
    }
    public void setLabel(String label) {
        Label = label;
    }
    public void setCategory(String category) {
        Category = category;
    }
}
