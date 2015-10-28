package me.mattak.kotlinjs.hellojquery

import jquery.jq

fun main(args: Array<String>) {
    jq("#content").text("hello world")
}