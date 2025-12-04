package com.planner.api.entity;

import jakarta.persistence.*;

@Entity
public class Template {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private long userId;
    private String label;
    private String category;
    
    public Template() {}

    public Template(long userId, String label, String category) {
        this.userId = userId;
        this.label = label;
        this.category = category;
    }

    // Getters and Setters

    public Long getId() {
        return id;
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
    public long getUserId() {
        return userId;
    }
}
