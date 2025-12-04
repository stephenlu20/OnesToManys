package com.planner.api.dto;

public class CreateUserDto {
    private String firstName;
    private String lastName;
    private int age;
    private int weight;

    // Getters and Setters
    public String getFirstName() {
        return firstName;
    }
    public String getLastName() {
        return lastName;
    }
    public int getAge() {
        return age;
    }
    public int getWeight() {
        return weight;
    }
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
    public void setAge(int age) {
        this.age = age;
    }
    public void setWeight(int weight) {
        this.weight = weight;
    }
}