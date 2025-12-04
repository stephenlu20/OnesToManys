package com.planner.api.controller;
import java.util.Objects;
import java.util.List;

import org.springframework.web.bind.annotation.*;
import com.planner.api.dto.CreateTemplateDto;
import com.planner.api.dto.UpdateTemplateDto;
import com.planner.api.entity.Template;
import com.planner.api.service.TemplateService;
import com.planner.api.repository.TemplateRepository;
import com.planner.api.entity.Template;

@RestController
@RequestMapping("/template")
public class TemplateController {

    private final TemplateService templateService;
    private final TemplateRepository templateRepository;

    public TemplateController(TemplateService templateService, TemplateRepository templateRepository) {
        this.templateService = templateService;
        this.templateRepository = templateRepository;
    }

    @GetMapping("/{id}")
    public Template getTemplate(@PathVariable Long id) {
        Objects.requireNonNull(id, "ID cannot be null");
        return templateRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Template not found")); 
    }

    @GetMapping("/user/{userId}")
    public  List<Template> getTemplatesByUserId(@PathVariable Long userId) {
        Objects.requireNonNull(userId, "User ID cannot be null");
        return templateRepository.findByUserId(userId);
    }
    
}
