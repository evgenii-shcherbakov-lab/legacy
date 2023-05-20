package com.example.controllers

import com.github.iipekolict.knest.annotations.classes.Controller
import com.github.iipekolict.knest.annotations.methods.Get

@Controller
class MainController {

    @Get
    suspend fun getHello(): String {
        return "Hello World!"
    }
}