package com.planner.api.dto;

public class UpdateUserDto {
    private String firstName;
    private String lastName;
    private Integer age;
    private Integer weight;

    // Getters and Setters
    public String getFirstName() {
        return firstName;
    }
    public String getLastName() {
        return lastName;
    }
    public Integer getAge() {
        return age;
    }
    public Integer getWeight() {
        return weight;
    }
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
    public void setAge(Integer age) {
        this.age = age;
    }
    public void setWeight(Integer weight) {
        this.weight = weight;
    }
}