package com.planner.api.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Objects;
import org.springframework.http.ResponseEntity;

import com.planner.api.dto.CreateTemplateDto;
import com.planner.api.dto.UpdateTemplateDto;
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
                .orElseThrow(() -> new IllegalArgumentException("Template not found"));
        return ResponseEntity.ok(template);
    }

    public ResponseEntity<Template> getTemplatesByUserId(Long userId) {
        Objects.requireNonNull(userId, "User ID cannot be null");
        Template template = templateRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("Template not found"));
        return ResponseEntity.ok(template);
    }

    public Template createTemplate(CreateTemplateDto dto) {
        Template template = new Template(
            dto.getUserId(),
            dto.getLabel(),
            dto.getCategory()
        );
        return templateRepository.save(template);
    }

    // Modify
    public Template modifyTemplate(Long id, UpdateTemplateDto dto) {
        Objects.requireNonNull(id, "ID cannot be null");
        Template template = templateRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Template not found"));
        if (dto.getLabel() != null)       template.setLabel(dto.getLabel());
        if (dto.getCategory() != null)    template.setCategory(dto.getCategory());
        Objects.requireNonNull(template, "Template cannot be null");

        return templateRepository.save(template);
    }

    public ResponseEntity<Void> deleteTemplate(Long id) {
        Objects.requireNonNull(id, "ID cannot be null");
        if (!templateRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        templateRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @Transactional
    public ResponseEntity<Void> deleteTemplatesByUserId(Long userId) {
        List<Template> activities = templateRepository.findAllByUserId(userId);
        if (activities.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        templateRepository.deleteAll(activities);
        return ResponseEntity.noContent().build();
    }

}
