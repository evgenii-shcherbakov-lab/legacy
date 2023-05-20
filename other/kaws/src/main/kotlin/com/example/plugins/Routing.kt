package com.example.plugins

import com.example.controllers.MainController
import com.github.iipekolict.knest.KNest
import io.ktor.server.application.*

fun Application.configureRouting() {
    install(KNest) {
        framework {
            setControllers(MainController())
        }
    }
}