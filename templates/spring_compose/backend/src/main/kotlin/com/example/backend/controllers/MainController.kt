package com.example.backend.controllers

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController()
class MainController {

    @GetMapping()
    fun healthCheck(): Map<String, String> = mapOf("status" to "ok")
}