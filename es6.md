## Index

* ECMAHistory
* Overview
* Features
* Links

---
## ECMAHistory

* ECMAScript specification: a standardized specification of a scripting language developed by Brendan Eich of Netscape (December 1995)
* prototyped in 10 days
* [Computing Conversations with Brendan Eich](https://www.youtube.com/watch?v=IPxQ9kEaF8c)

> ...written to be malleable, allowing programmers to establish their own patterns and best practices.


> ...JavaScript had enough good at the beginning to survive

---
## Overview of ECMAScript 6 / ECMAScript 2015

* latest version of the ECMAScript standard (finalized in June 2015)
* first significant update to the language since ES5 was standardized in 2009
* support is underway: [Compatibility table](http://kangax.github.io/compat-table/es6/)
* code-name "ES.next" or "Harmony"

--
## Overview of ECMAScript 6 / ECMAScript 2015

better than ES5?
* cleaner design
* syntax increases expressiveness of the code, less boilerplate
* get rid of hacks: 

```javascript 
var self = this;
```

---
## Features
...

--
## Constants
```javascript 
(function()
{
	'use strict';
	const G = 9.8 // g = 9.8 m/s2
	console.log(G > 9)
	G = 3
}())
```

--
## Block Scoping
```javascript 
// ES5
(function()
{
	var a = [1,2,3];
	var i, x;
	for (i = 0; i < a.length; i++) {
		x = a[i];
		console.log('i: '+i);
		console.log('x: '+x);
	}
	console.log('i: '+i);
	console.log('x: '+x);
}());

// ES6
(function()
{
	'use strict'
	var b = [1,2,3]
	for (let t = 0; t < b.length; t++) {
		let y = b[t]
		console.log('t: '+t)
		console.log('y: '+y)
	}
	console.log('t: '+t)
	console.log('y: '+y)
}())
```

--
## Block Scoping 2
```javascript 
// ES5 - Hoisting
(function()
{
	function fizz () { return 1; }
	console.log(fizz() === 1);
	(function () {
		function fizz () { return 2; }
		console.log(fizz() === 2);
	})();
	console.log(fizz() === 1);
}());

// ES6
(function()
{
	'use strict'
	function buzz () { return 1 }
	console.log(buzz() === 1)
	{
		function buzz () { return 2 }
		console.log(buzz() === 2)
	}
	console.log(buzz() === 1)
}())
```

--
## Arrows
* expression

```javascript 
(function()
{
	'use strict'
	let vowels = ['a','e','i','o','u'];
	console.log(vowels.map(v => v+v))
}())
```

* statement

```javascript
(function()
{
	'use strict'
	let vowels = ['a','e','i','o','u'];
	console.log(vowels.map(v => {
		if (v === 'i') {
			return v+v+v
		} else {
			return v+v
		}
	}))
}())
```

--
## Arrows 2
* lexical this

```javascript
(function()
{
	'use strict'
	let professor = {
  		_name: "Mr Known",
  		_classes: ['CS101','CS404'],
  		presentCourses() {
			this._classes.forEach(c =>
	  		console.log(this._name + " teaches " + c));
  		}
	}
	professor.presentCourses()
}())
```

--
## Parameters
```javascript
(function()
{
	'use strict'
	// default
	function f_def (a, b = 3) {
	console.log('result: ' + (a + b))
	}
	f_def(2)
	// rest
	function f_rest (a, ...rest) {
		console.log('a: ' + a)
		console.log('length: ' + rest.length)
	}
	// spread
	let c = [1,2]
	let d = [3,4,...c]
	f_rest(5,...d)
	let e = 'accuity'
	f_rest(6, ...e)
}())
```

--
## Template Literals
```javascript
(function()
{
	'use strict'
	var model = {name: 'test', a: 4, b: 5}
	var msg = `Hello ${model.name}: 
	${model.a * model.b}`
	console.log(msg)
}())
```

--
## Template Literals 2
```javascript
(function()
{
	'use strict'
	var a = 5
	var b = 10
	function tag(strings, ...values) {
		console.log(strings[0]) 
		console.log(strings[1])
		console.log(values[0])  
		console.log(values[1])
		console.log(strings.raw[0]) 
		console.log(strings.raw[1])
		
		return "Bazinga!"
	}

	console.log(tag`Hello \n ${ a + b } world ${ a * b }`)
}())
```

--
## Extended Literals
```javascript
(function()
{
	'use strict'
	// binary
	console.log(0b1011 === 11)
	// octal
	console.log(0o31 === 25)

	console.log("𠮷".length === 2)
	console.log("𠮷" === "\uD842\uDFB7")
	console.log("𠮷" === "\u{20BB7}")
	console.log("𠮷".codePointAt(0) == 0x20BB7)
	for (let codepoint of "𠮷") console.log(codepoint)
}())
```

--
## Enhanced Object Literals
```javascript
(function()
{
	'use strict'
	var x = 3
	var obj = {
		// Shorthand for x: x
		x,
		// Methods
		toString() {
			// Super calls
			return "es6 " + super.toString();
		},
		// Computed (dynamic) property names
		[ 'prop_' + (() => 3)() ]: 9
	}
	console.log(obj.x)
	console.log(obj.toString())
	console.log(obj.prop_3)
}())
```

--
## Destructuring
```javascript
(function()
{
	'use strict'
	// array
	var source = [1,2,3,4]
	var [a,,,b] = source
	console.log(a + ' ' + b)
	// swap 
	var c = 1, d = 2;
	[d, c] = [c, d];
	console.log(c + ' ' + d);
}())
```

--
## Destructuring 2
```javascript
(function()
{
	'use strict'
	// objects
	var retVal = {
			l: 'l',
			r: 'r',
			deep: {
				c: 'c'
			}
		}
	var getObj = function() {
		return retVal
	}
	var {l: left, r: right, deep: {c: ccc}} = getObj()
	console.log(left)
	console.log(right)
	console.log(ccc)
}())
```

--
## Destructuring 3
```javascript
(function()
{
	'use strict'
	// functions
	function g ({ name: n, val: v }) {
		console.log('g',n, v)
	}
	function h ({ name, val }) {
		console.log('h',name, val)
	}
	g({ name: "foo", val:  7 })
	h({ name: "foo", val:  7 });
}())
```

---
## Links

* [Full specification](http://www.ecma-international.org/ecma-262/6.0/)
* [ES6 features](https://github.com/lukehoban/es6features)
* [ES6 features and comparison](http://es6-features.org/)