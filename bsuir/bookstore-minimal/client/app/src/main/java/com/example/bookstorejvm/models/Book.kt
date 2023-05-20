package com.example.bookstorejvm.models

import com.google.gson.annotations.SerializedName

data class Book(
    @SerializedName("id") val id: Int = -1,
    @SerializedName("author") var author: Author,
    @SerializedName("reviews") var reviews: MutableSet<Review> = mutableSetOf(),
    @SerializedName("name") var name: String = "",
    @SerializedName("description") var description: String = "",
    @SerializedName("year") var year: Int = 0,
    @SerializedName("price") var price: Int = 0,
)
