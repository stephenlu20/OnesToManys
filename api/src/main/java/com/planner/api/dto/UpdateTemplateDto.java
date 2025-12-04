package com.planner.api.dto;

public class UpdateTemplateDto {
    private String label;
    private String category;
    
    // Getters and Setters
    public String getLabel() {
        return label;
    }
    public String getCategory() {
        return category;
    }
    public void setLabel(String label) {
        this.label = label;
    }
    public void setCategory(String category) {
        this.category = category;
    }   
}
