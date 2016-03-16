'use strict'
console.log(0b1011 === 11)
console.log(0o31 === 25)

console.log("𠮷".length === 2)
console.log("𠮷".match(/./u)[0].length === 2)
console.log(5| "𠮷" === "\uD842\uDFB7")
console.log("𠮷" === "\u{20BB7}")
console.log("𠮷".codePointAt(0) == 0x20BB7)
for (let codepoint of "𠮷") console.log(codepoint)