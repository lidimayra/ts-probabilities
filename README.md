# ts-probabilities

This TypeScript library can be used to work with different kinds of probability
distributions.

## Code Example
```typescript
// a binomial distribution with n=5 and μ=3
var distribution = new Binomial(5, 3);

// calculates probability of 4 value
distribution.probabilityOf(4);

// calculates Standard Deviation
distribution.standardDeviation();
```

## Prerequisite
Typescript 2.1.4 or higher. You can install it via npm:
```
npm install -g typescript
```

## Usage
Clone the project:

```
git clone git@github.com:lidimayra/ts-probabilities.git
```

Create your HTML file in the root directory and include a call to the lib:

```HTML
<script data-main="lib/main" src="require.js"></script>
```

To work with the library, open `lib/init.ts` and follow the instructions
described in the file.

Compile it to a .js file:
```
tsc --module amd init.ts
```

Done! :)
