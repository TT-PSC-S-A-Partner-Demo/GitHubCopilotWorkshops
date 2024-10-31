package com.ttpsc.copilot_training.controller;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ttpsc.copilot_training.model.Color;

import jakarta.annotation.PostConstruct;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class PhoneValidationController {

     private Map<String, String> colorHexMap;

    @PostConstruct
    public void init() throws IOException {
        ObjectMapper objectMapper = new ObjectMapper();
        InputStream inputStream = getClass().getResourceAsStream("/colors.json");
        if (inputStream == null) {
            throw new IOException("Resource not found: /colors.json");
        }
        List<Color> colors = objectMapper.readValue(inputStream, new TypeReference<List<Color>>() {});
        colorHexMap = new HashMap<>();
        for (Color color : colors) {
            colorHexMap.put(color.getColor().toLowerCase(), (String) color.getCode().get("hex"));
        }

    }
    @GetMapping("/validatePhoneNumber")
    public boolean validatePhoneNumber(@RequestParam String phoneNumber) {
        return phoneNumber.matches("^\\+34[679]\\d{8}$");
    }
    @GetMapping("/getColorHex")
    public ResponseEntity<String> getColorHex(@RequestParam String colorName) {
        String hexCode = colorHexMap.get(colorName.toLowerCase());
        if (hexCode != null) {
            return new ResponseEntity<>(hexCode, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}