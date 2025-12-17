package com.planner.api.service;

import java.util.List;
import java.util.Objects;

import org.springframework.stereotype.Service;
import com.planner.api.dto.CreateUserDto;
import com.planner.api.dto.UpdateUserDto;
import com.planner.api.entity.Activity;
import com.planner.api.entity.User;
import com.planner.api.repository.UserRepository;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // Get
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // Create
    public User createUser(CreateUserDto dto) {
        validateCreateDto(dto);

        User user = new User(
            dto.getFirstName(),
            dto.getLastName(),
            dto.getAge(),
            dto.getWeight()
        );

        return userRepository.save(user);
    }

    // Modify
    public User modifyUser(Long id, UpdateUserDto dto) {
        Objects.requireNonNull(id, "ID cannot be null");
        User user = userRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("User not found"));

        if (dto.getFirstName() != null) user.setFirstName(dto.getFirstName());
        if (dto.getLastName() != null)  user.setLastName(dto.getLastName());
        if (dto.getAge() != null)       user.setAge(dto.getAge());
        if (dto.getWeight() != null)    user.setWeight(dto.getWeight());
        Objects.requireNonNull(user, "User cannot be null");

        return userRepository.save(user);
    }

    private void validateCreateDto(CreateUserDto dto) {
        if (dto.getFirstName() == null || dto.getFirstName().isBlank())
            throw new IllegalArgumentException("First name is required");

        if (dto.getLastName() == null || dto.getLastName().isBlank())
            throw new IllegalArgumentException("Last name is required");
    }
}
