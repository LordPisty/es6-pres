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

---
## Links

* [Full specification](http://www.ecma-international.org/ecma-262/6.0/)
* [ES6 features](https://github.com/lukehoban/es6features)
* [ES6 features and comparison](http://es6-features.org/)