package com.planner.api.entity;

import jakarta.persistence.*;

@Entity
public class Template {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private long userId;
    private String Label;
    private String Category;
    
    public Template() {}

    public Template(String label, String category, long userId) {
        Label = label;
        Category = category;
        this.userId = userId;
    }

    // Getters and Setters

    public Long getId() {
        return id;
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
    public long getUserId() {
        return userId;
    }
}
