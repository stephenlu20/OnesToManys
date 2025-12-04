package com.planner.api.dto;

public class UpdateTemplateDto {
    private String Label;
    private String Category;
    
    // Getters and Setters
    public String getLabel() {
        return Label;
    }
    public String getCategory() {
        return Category;
    }
    public void setLabel(String label) {
        Label = label;
    }
    public void setCategory(String category) {
        Category = category;
    }   
}
