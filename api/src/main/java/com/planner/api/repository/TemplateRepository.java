package com.planner.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.planner.api.entity.Template;
import java.util.List;

public interface TemplateRepository extends JpaRepository<Template, Long>{
    List<Template> findAllByUserId(Long userId);
}
