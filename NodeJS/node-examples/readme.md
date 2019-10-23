# Starting a Node Application

Go to a convenient location on your computer and create a folder named NodeJS. Then move to this folder.

Now create a folder named node-examples and then move into this folder.

At the prompt, type the following to initialize a package.json file in the node-examples folder:
```shell
npm init
```

Then open your project in visual studio code, type:
```shell
code .
```

update the package.json file until you end up with the file containing the following:
```js
{
  "name": "node-examples",
  "version": "1.0.0",
  "description": "Simple Node Examples",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index"
  },
  "author": "example_user <example-user@example.com>",
  "license": "ISC"
}
```

Create a file named index.js and add the code to this file.

To run the Node application, type the following at the prompt:
```shell
npm start
```

The closure that JavaScript supports = A function defined inside another function automatically gets access to the variables that are declared in the outer function.


