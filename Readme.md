# @m.rabeeh.vk/react-conditional-components

[![npm version](https://img.shields.io/npm/v/react-conditional-components.svg)](https://www.npmjs.com/package/@m.rabeeh.vk/react-conditional-components)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


A lightweight set of conditional rendering utilities for React.  
This package contains the following components:

- `<If />`
- `<Switch />`
- `<Case />`
- `<Default />`

---

## ✨ Why Use This?

Writing conditions in JSX using ternary operators (`condition ? A : B`) or `&&` can get messy and hard to read.  
This package gives you clean, semantic, and readable JSX-based alternatives for conditional logic, just like native `if`, `switch`, and `default` in JavaScript.

---

## 🚀 Installation

installation via npm:
```bash
npm install @m.rabeeh.vk/react-conditional-components
```
or via yarn:
```bash
yarn add @m.rabeeh.vk/react-conditional-components
```
# Components

## `<If />`

The `<If />` component is used to conditionally render content based on a given condition. It supports different ways to control what is shown depending on whether the condition is true or false.

### Supported props in `<if/>`

- `condition`:
  This is the main condition you want to check. It can be any JavaScript expression that results in true or false. If it's true, the component renders the matching content.

- `then`:
  This is the content that will be shown if the condition is true. You can use it to pass a React element(jsx without any logics) directly (like `<h1>Hello</h1>`).
- `else`:
  This is the content that will be shown if the condition is false. It works as an alternative or fallback when the condition is not met.value should be jsx
- `render`:
  This is an optional function. If the condition is true, the function will be called and the returned JSX will be rendered. It's useful when you want to run some logic before showing the result.
- `fallback`:
  This is shown when the condition is undefined or not available yet. It's helpful when you're waiting for some data or a result to be loaded. For example, you can use `<p>Loading...</p>` as fallback until the actual condition becomes true or false.
- `children`(not wriiten like other props):
  If you don’t provide then or render, the children inside the `<If>` tag will be shown when the condition is true. This is the most basic and natural way to use the component.

### Fallback Explained
The fallback prop is used to display temporary content while the condition value is still loading or undefined.
This is helpful when fetching data asynchronously.
It works alongside then, render, or children, and can also be used together with else.


#### Examples for `<If/>`

- Simple usage (with `children`)

  **There is only one prop needed**

  1. `condition` (need in all)

```jsx
// let isLoggedin= true
// let isLoggedin= false

    //this will work when true
 <If condition={isLoggedin}>
    <h3>Welcome back!</h3>
  </If>
  // this works when false
  <If condition={!isLoggedin}>
    <h3>Please log in.</h3>
  </If>
```

- **_`<If/>`_** with **`then`** & **_`else`_**

  **There is three props.**

  1.  _`condition`_
  2.  _`then`_
  3.  _`else`_

  Values of `then` and `else` should be `jsx`

```jsx
// let isLoggedin= true
// let isLoggedin= false

<If
  condition={isLoggedin}
  then={<h3>Welcome back!</h3>} //if true this will work
  else={<h3>Please log in.</h3>} // if false this will work
/>
```

- **`<If/> `** with **`render`** & **`else`**

  **This also have three props**

  1.  _`condition`_
  2.  _`render`_
  3.  _`else`_

```jsx
// let isLoggedin= true
// let isLoggedin= false

<If
  condition={isLoggedin}
  render={() => <h3>Welcome back!</h3>} //if true this will work
  else={<h3>Please log in.</h3>} //if false this will work
/>
```

3. **_`<If/>`_** with **_`fallback`_**

   **This have only tow props main props.**

   1. _`condition`_
   2. _`fallback`_

   This can be used in diffrand ways.
   I mean this can be used with the three ways

```jsx
//   const [fruits, setFruits] = useState(undefined);

//   useEffect(() => {
//     setTimeout(() => {
//       setFruits(["apple", "banana", "cherry"]);
//     }, 1000);
//   }, []);

<If 
condition={fruits} 
fallback={<p>Loading fruits...</p>}
// else={<p>no fruit available</p>} this line also can be added 
>
  <ul>
    {fruits.map((fruit) => (
      <li key={fruit}>{fruit}</li>
    ))}
  </ul>
</If>
```
## ` <Switch />`, `<Case />`, and `<Default />`

These components work together like a switch-case statement in JavaScript. They allow you to match multiple values and choose what to render based on a specific value.

- `Switch`:
This takes a value prop and checks it against each `<Case>`'s when prop.

- `Case`:
Each Case has a when prop. If it matches the value provided to Switch, it will be rendered.

- `Default`:
This is optional. If none of the Case components match the value, the Default content will be shown.

### Example of `<Switch>`,`<Case>`, and `<Default>`:

```jsx
<Switch value={status}>
  <Case when="loading">Loading...</Case>
  <Case when="success">Data loaded successfully.</Case>
  <Case when="error">Something went wrong.</Case>
  <Default>Unknown status</Default>
</Switch>
```
Behavior:

- If status is "loading", it will show "Loading...".

- If status is "success", it will show "Data loaded successfully.".

- If status is "error", it will show "Something went wrong.".

- If status is none of the above, it will show "Unknown status".

# Roadmap
The current version includes only the core components. Future enhancements planned:

- `<ElseIf />` component

- Transition effects (e.g., FadeIn/FadeOut)

- SSR and streaming support

- TypeScript typings and generics

- Utility wrappers for complex logic
- Better async condition handling

[gitRepolink]()

