package me.mattak.example.kotlinjs

import kotlin.browser.*
import kotlin.js.*

@native("$")
val jquery : dynamic = noImpl

fun main(args: Array<String>) {
    jquery("#content").html("hello world")
}
