---
title: "Building a compiler in rust"
summary: "I write about what I learned building a compiler in rust."
tags:
    - rust
    - programming
    - devjournal
---



control flow is a crucial part of every modern programming language. These tools help us manage the flow and direction every program goes. In rust, there's not a shortage of control flow. In this article we'll look at the control flow structures rust provides us with and how to use them.

The control flow we'll be looking at in rust are:
1. Conditionals
2. Loops
3. Pattern Matches
4. If Let

Let's dive right in.

## Conditionals.
If you have a programming background in any foray of languages, you're aware what the point of conditionals are: to direct you program into making the best possible decision based on certain conditions and state changes. rust has the `if`, `if else`, and `else if` conditional statements. These conditions have a few unique conditions of their own that should be clearly pointed out:

- if statement expressions don't need to be wrapped in parenthesis.
- rust will not cast expressions to booleans, something languages like JavaScript does.
Now, let us look at how conditionals are written.

```rust
fn main(){
	let year = 2050;
	
	if year >= 1946 && year < 1965 {
		println!("Hello, Boomers");
	} else if year >= 1965 && year < 1981 {
		println!("Hello, Gen X");
	} else if year >= 1981 && year < 1997 {
		println!("Hello, Millenials!");
	} else if year >= 1997 && year < 2012 {
		println!("Hello, Gen Z!");
	} else {
		println!("Hello, unknown generation!");
	}
}
```

If you're familiar with a language like JavaScript, You'll realize that these conditionals are similar to JavaScript conditionals. 

Conditional expressions have to evaluate to a `bool` in rust. Doing otherwise will generate an error message. For instance: 

```rust
fn main() {
	let list: [u8; 0] = [];
	if list.len() {
		println!("Not an empty list")'\;
	} else {
		println!("Empty List");
	}
}
```

When we run this we get this error:

```shell
error[E0308]: mismatched types

  --> controlflow.rs:36:8    

   |

36 |     if list.len() {      

   |        ^^^^^^^^^^ expected `bool`, found `usize`

  

error: aborting due to previous error

  

For more information about this error, try `rustc --explain E0308`.
```


rust's conditionals go a little further than this. If else branches can be used directly in an expression in rust. This helps with handling all the issues that ternary operators bring with them in a language like JavaScript.

Let's refactor our first example:

```rust
fn main(){
	let year = 2241;
	
	let generation = if year >= 1946 && year < 1965 {
		"Boomer"
	} else if year >= 1965 && year < 1981 {
		"Gen X"
	} else if year >= 1981 && year < 1997 {
		"Millenial"
	} else if year >= 1997 && year < 2012 {
		"Gen Z"
	} else {
		"Unknown Generation"
	}
	
	println!("Hello, {}", generation);
}
```


This works well because `if else` blocks in rust are treated like expressions. Similar to the implicit returns in functions, the last expression in a conditional block is considered the result of that expression.

## Loops.
The shape loops in rust tend to take is quite interesting. Loops are another control flow structure that hold a great level of importance in computer programming. They help us execute processes that require repetition over a limited period of time based on certain conditions and to get a certain result that will be used by a program. Let's look at how rust handles loops.

The `loop` keyword is used to run loops in rust. An interesting thing about loops is that without any other thing, a block of code after the loop keyword results in a infinite loop. Let's take a look:

```rust
fn main() {
	loop{
		println!("Na");
	}
}
```

This loop will continue to run until the terminal crashes or you terminate the process in the terminal. To break out of this loop in the program, you'll need the `break` keyword.

We can refactor our loop to work within a limit, but just like any other proper looping paradigm, this will require that we have:
- a condition that determines that limit 
- an incrementing expression that controls the progress of the loop 
- an initializing statement to determine where the loop starts form. 

Let's see what that will look like:

```rust
fn main() {
	//initializing statement
	let mut counter = 0;
	
	loop {
		//incrementing expression
		counter = counter + 1; 
		println!("Na"); //body
		// limiting conditional statement
		if counter == 10 {
			break;
		}
	} //notice the lack of a semicolon here.
	
	println!("Hey Jude!");
}
```


Another unique thing about conditionals is that you can return a value from a loop that is used as an expression. 

```rust
fn main() {
	let mut counter = 0;
	
	let ten = loop{
		counter = counter + 1;
		if counter == 10 {
			break;
		}
	};
	
	println!({}, ten);
}
```

### While Loops
While loops are identical in rust to how the work in JavaScript so they are pretty easy to comprehend and implement:

```rust
fn main() {
	while counter <= 0{
		counter = counter + 1;
		printlna!("Na");
	}
	
	println!("Hey Jude!");
}
```


### For In
You'll find yourself writing the `for in` loop regularly in most of your rust code. `for in` (also known as iterator loops) can be written on many types of collections, especially arrays. Let's look at how `for in` loops work:

```rust
fn main() {
	for planet in [
	 "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Uranus", "Neptune"
	] {
		println!("{}", planet);
	}
}
```

You can match parallel similarities between `for in` and iterator functions like `forEach` in JavaScript.

Other collections apart from arrays can be made iterable by using the `IntoIterator` trait. You can make any custom type iterable with this.


## Pattern matching.
Languages like JavaScript and C++ have the switch operator, rust has **Pattern Matchesing which is far more than the switch operator offers in those languages. 
The `match` operator is used in pattern matching in rust. Let's see an example on how to use pattern matching:

```rust
enum Status{
		Connected,
		Disconnected,
	}
	
fn main() {
	let len = Status::Connected;
	
	match lan {
		Status::Connected => {
			println!("Connection established");
		}
		Status::Disconnected => {
			println!("Connection lost");
		}
	}
}
```


If we added another variant to the `Status` enum and we forgot to implement it in our pattern matching, we get an error. Let's see what that scenario looks like:

```rust
enum Status {
	Connected,
	Disconnected,
	Failure(String),
}

fn main() {
	let len = Status::Failure(String::from("Could not contact DCHP server"));
	
	match lan {
		Status::Connected => {
			println!("Connection established");
		}
		Status::Disconnected => {
			println!("Connection lost");
		}
	}
}
```

When we run this code we get this error:

```shell
error[E0004]: non-exhaustive patterns: `Status::Failure(_)` not covered

   --> controlflow.rs:187:11

    |

187 |     match lan {

    |           ^^^ pattern `Status::Failure(_)` not covered

    |

note: `Status` defined here

   --> controlflow.rs:182:5

    |

179 | enum Status {

    |      ------

...

182 |     Failure(String),

    |     ^^^^^^^ not covered

    = note: the matched value is of type `Status`

help: ensure that all possible cases are being handled by adding a match arm with a wildcard pattern or an explicit pattern as shown

    |

193 ~         },

194 +         Status::Failure(_) => todo!()

    |

  

error: aborting due to previous error

  

For more information about this error, try `rustc --explain E0004`.
```

This error comes as result of the fact that all matches in rust need to be exhaustive. An exhaustive match refers to the existence of branches of code to handle every possible variant in an Enum. This prevents a lot of runtime frustrations that could occur just because we forgot to handle a variant.


`match`'s exhaustive nature forces a developer to handle edge cases that would be ignored and lead to robust code. Another thing that `match` provides is a way to catch all unspecified variants using the `_` placeholder. Here's how it's used:

```rust
fn main () {
	let lan = Status::Connected;
	
	match lan{
		Status::Connected => {
			println!("Connection Established");
		}
		_  => {}
	}
}
```


### If Let
if let is more or less considered syntactic sugar in cases where you need to handle a single variant of a enum without the need of a placeholder to catch all the rest. 

Let's assume we have some rust code like this:

```rust
fn main(){
	let status = Status::Failure(String::from("Couldn't resolve hostname"));
	match status {
		Status::Failure(error) => {
			println!("Error: {}", error);
		}
		_ => {}
	}
}
```

We can use `if let` instead like this:

```rust
fn main(){
	let status = Status::Failure(String::from("Couldn't resolve hostname"));
	if let Status::Failure(error) = status {
		println!("Error: {}", error);
	}
}
```


Control flow structures are great for handling how programs flow and rust presents a few unique ways of implementing control flow into a program. In the next post of this series we'll be looking at Strings in rust. 