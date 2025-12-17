package com.planner.api.controller;
import java.util.Objects;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.planner.api.dto.CreateTemplateDto;
import com.planner.api.dto.UpdateTemplateDto;
import com.planner.api.entity.Activity;
import com.planner.api.entity.Template;
import com.planner.api.service.TemplateService;
import com.planner.api.repository.TemplateRepository;


@RestController
@RequestMapping("/template")
@CrossOrigin(origins = "http://localhost:5173")
public class TemplateController {

    private final TemplateService templateService;
    private final TemplateRepository templateRepository;

    public TemplateController(TemplateService templateService, TemplateRepository templateRepository) {
        this.templateService = templateService;
        this.templateRepository = templateRepository;
    }

    @GetMapping
    public List<Template> getAllTemplates() {
        return templateService.getAllTemplates();
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
        return templateRepository.findAllByUserId(userId);
    }

    @PostMapping
    public Template createActivity(@RequestBody CreateTemplateDto dto) {
        return  templateService.createTemplate(dto);
    }

    @PutMapping("/{id}")
    public Template updateTemplate( @PathVariable Long id,
                            @RequestBody UpdateTemplateDto dto) {
        return templateService.modifyTemplate(id, dto);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTemplate(@PathVariable Long id) {
        Objects.requireNonNull(id, "ID cannot be null");
        return templateService.deleteTemplate(id);
    }

    @DeleteMapping("/user/{userId}")
    public ResponseEntity<Void> deleteActivitiesByUserId(@PathVariable Long userId) {
        Objects.requireNonNull(userId, "User ID cannot be null");
        return templateService.deleteTemplatesByUserId(userId);
    }
    
}
