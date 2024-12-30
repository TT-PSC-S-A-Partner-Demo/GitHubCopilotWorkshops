package com.ttpsc.copilot_training.model;

import java.util.Map;

public class Color {
    private String color;
    private String category;
    private String type;
    private Map<String, Object> code;

    // Getters and Setters
    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Map<String, Object> getCode() {
        return code;
    }

    public void setCode(Map<String, Object> code) {
        this.code = code;
    }
}