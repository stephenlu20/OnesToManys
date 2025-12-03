package com.planner.api.controller;
import org.springframework.web.bind.annotation.*;
import com.planner.api.dto.CreateUserDto;
import com.planner.api.dto.UpdateUserDto;
import com.planner.api.entity.User;
import com.planner.api.service.UserService;

@RestController
@RequestMapping("/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
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
}