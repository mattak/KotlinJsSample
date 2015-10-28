package me.mattak.kotlinjs.hellojava

import kotlin.js.*

fun main(args: Array<String>) {
    // date は使えるが
    val date = java.util.Date()
    println("date: ${ date }")

    // date formatは使えない
    // val sdf = java.text.SimpleDateFormat("yyyy-MM-dd")
    // println("date format: ${ sdf.format(date) }")
}