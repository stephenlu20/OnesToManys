package com.planner.api.service;

import java.util.Objects;

import org.springframework.stereotype.Service;
import com.planner.api.dto.CreateUserDto;
import com.planner.api.dto.UpdateUserDto;
import com.planner.api.entity.User;
import com.planner.api.repository.UserRepository;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // Create
    public User createUser(CreateUserDto dto) {
        validateCreateDto(dto);

        User user = new User(
            dto.firstName,
            dto.lastName,
            dto.age,
            dto.weight
        );

        return userRepository.save(user);
    }

    // Modify
    public User modifyUser(Long id, UpdateUserDto dto) {
        Objects.requireNonNull(id, "ID cannot be null");
        User user = userRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("User not found"));

        if (dto.firstName != null) user.setFirstName(dto.firstName);
        if (dto.lastName != null)  user.setLastName(dto.lastName);
        if (dto.age != null)       user.setAge(dto.age);
        if (dto.weight != null)    user.setWeight(dto.weight);
        Objects.requireNonNull(user, "User cannot be null");

        return userRepository.save(user);
    }

    private void validateCreateDto(CreateUserDto dto) {
        if (dto.firstName == null || dto.firstName.isBlank())
            throw new IllegalArgumentException("First name is required");

        if (dto.lastName == null || dto.lastName.isBlank())
            throw new IllegalArgumentException("Last name is required");
    }
}
