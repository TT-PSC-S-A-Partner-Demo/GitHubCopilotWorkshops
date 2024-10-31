package com.ttpsc.copilot_training.controller;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(PhoneValidationController.class)
public class PhoneValidationControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void testValidPhoneNumber() throws Exception {
        mockMvc.perform(get("/validatePhoneNumber")
                .param("phoneNumber", "+34612345678"))
                .andExpect(status().isOk())
                .andExpect(content().string("true"));
    }

    @Test
    public void testInvalidPhoneNumber() throws Exception {
        mockMvc.perform(get("/validatePhoneNumber")
                .param("phoneNumber", "+34123456789"))
                .andExpect(status().isOk())
                .andExpect(content().string("false"));
    }

    @Test
    public void testInvalidFormatPhoneNumber() throws Exception {
        mockMvc.perform(get("/validatePhoneNumber")
                .param("phoneNumber", "612345678"))
                .andExpect(status().isOk())
                .andExpect(content().string("false"));
    }

    
    @Test
    public void testGetColorHex_ValidColor() throws Exception {
        mockMvc.perform(get("/getColorHex")
                .param("colorName", "red"))
                .andExpect(status().isOk())
                .andExpect(content().string("#FF0000"));
    }

    @Test
    public void testGetColorHex_InvalidColor() throws Exception {
        mockMvc.perform(get("/getColorHex")
                .param("colorName", "pur"))
                .andExpect(status().isNotFound());
    }
}