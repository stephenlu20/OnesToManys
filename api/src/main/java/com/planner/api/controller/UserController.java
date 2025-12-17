package com.planner.api.controller;
import java.util.List;
import java.util.Objects;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.planner.api.dto.CreateUserDto;
import com.planner.api.dto.UpdateUserDto;
import com.planner.api.entity.User;
import com.planner.api.repository.UserRepository;
import com.planner.api.service.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    private final UserRepository userRepository;

    private final UserService userService;

    public UserController(UserService userService, UserRepository userRepository) {
        this.userService = userService;
        this.userRepository = userRepository;
    }

    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
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
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        Objects.requireNonNull(id, "ID cannot be null");
        User user = userRepository.findById(id)
            .orElseThrow(() -> new IllegalArgumentException("User not found"));
        Objects.requireNonNull(user, "User cannot be null");
        userRepository.delete(user);
        return ResponseEntity.noContent().build();
    }
}