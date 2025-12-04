package com.planner.api.service;

import org.springframework.stereotype.Service;
import java.util.Objects;
import org.springframework.http.ResponseEntity;
import com.planner.api.entity.Template;
import com.planner.api.repository.TemplateRepository;

@Service
public class TemplateService {

    private final TemplateRepository templateRepository;

    public TemplateService(TemplateRepository templateRepository) {
        this.templateRepository = templateRepository;
    }

    // Get
    public ResponseEntity<Template> getTemplateById(Long id) {
        Objects.requireNonNull(id, "ID cannot be null");
        Template template = templateRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Activity not found"));
        return ResponseEntity.ok(template);
    }

    public ResponseEntity<Template> getTemplatesByUserId(Long userId) {
        Objects.requireNonNull(userId, "User ID cannot be null");
        Template template = templateRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("Activity not found"));
        return ResponseEntity.ok(template);
    }
}
