package com.example.bookstorejvm.dtos

import com.google.gson.annotations.SerializedName

data class DeleteDto(@SerializedName("id") val id: Int = 0)
