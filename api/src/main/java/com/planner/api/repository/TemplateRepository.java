package com.planner.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.planner.api.entity.Template;

public interface TemplateRepository extends JpaRepository<Template, Long>{
    
}
