package com.planner.api.controller;
import java.util.Objects;

import org.springframework.web.bind.annotation.*;
import com.planner.api.dto.CreateUserDto;
import com.planner.api.dto.UpdateUserDto;
import com.planner.api.entity.User;
import com.planner.api.repository.UserRepository;
import com.planner.api.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {

    private final UserRepository userRepository;

    private final UserService userService;

    public UserController(UserService userService, UserRepository userRepository) {
        this.userService = userService;
        this.userRepository = userRepository;
    }

    @GetMapping("/{id}")
        public User getUser(@PathVariable Long id) {
            Objects.requireNonNull(id, "ID cannot be null");
            return userRepository.findById(id)
                    .orElseThrow(() -> new IllegalArgumentException("User not found"));
        }

    @PostMapping
    public User createUser(@RequestBody CreateUserDto dto) {
        return userService.createUser(dto);
    }

    @PutMapping("/{id}")
    public User updateUser( @PathVariable Long id,
                            @RequestBody UpdateUserDto dto) {
        return userService.modifyUser(id, dto);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
            Objects.requireNonNull(id, "ID cannot be null");
            User user = userRepository.findById(id)
            .orElseThrow(() -> new IllegalArgumentException("User not found"));
            Objects.requireNonNull(user, "User cannot be null");
            userRepository.delete(user);
    }
}