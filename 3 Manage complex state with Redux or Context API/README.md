# Experiment 3: Shopping Cart with Context and useReducer

## Aim
Create a small shopping cart and manage its shared, multi-action state with React Context and the `useReducer` hook.

## Theory
`useReducer` centralizes state updates in a reducer function. The reducer receives the current state and an action, then returns the next state without mutating the old one. Context makes the cart and its dispatch function available to nested components. Together, they are useful when several parts of an app need to read or update the same structured state.

## Technologies
- JavaScript and JSX
- React 18 and React DOM
- Vite
- CSS

## Folder Structure
```text
3 Manage complex state with Redux or Context API/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── context/
│       └── CartContext.jsx
└── README.md
```

## Installation
Install Node.js and npm, open a terminal in this folder, and install dependencies:
```bash
npm install
```

## Run
Start the app using `npm run dev`, then open the local URL printed by Vite (normally `http://localhost:5173`). Run `npm run build` for a production build.

## Demonstrate
1. Add the same product twice and observe its quantity and cart count increase.
2. Add another product and check that the displayed total is recalculated.
3. Remove a line item and then use Clear to empty the entire cart.
4. Explain how each button dispatches an action handled by `cartReducer`.

## Expected Output
A minimal campus store page with three products and a cart. The cart shows line quantities, item subtotals, total price, remove controls, and an empty-cart message when appropriate.

## Important Code
`cartReducer` handles each cart operation in one place. For example, the add action increases an existing product's quantity without mutating the previous array:
```js
return cart.map((item) =>
  item.id === action.product.id
    ? { ...item, quantity: item.quantity + 1 }
    : item,
);
```
`CartProvider` calls `useReducer` and shares `cart`, `dispatch`, and derived totals through `CartContext`. `useCart()` provides a clear error if used outside that provider.

## Viva Questions and Answers
1. **What is a reducer?** A function that calculates new state from the current state and an action.
2. **What does `useReducer` return?** The current state and a dispatch function.
3. **What is an action?** An object describing an event or requested state change, usually with a `type`.
4. **Why should a reducer be pure?** Predictable results make state updates easier to test and reason about.
5. **Why not mutate the cart array?** React relies on new state references to detect and render updates reliably.
6. **What is Context used for here?** Sharing cart state with components without manually passing it through every component.
7. **What is a provider?** A component that supplies a context value to its descendant tree.
8. **How is the item count calculated?** By adding each cart item's quantity, not merely counting product types.
9. **How is the total calculated?** By summing each product's price multiplied by its quantity.
10. **What happens when the cart is empty?** The UI shows an empty-cart message instead of cart line items.

## Common Errors
- **`useCart` reports missing provider:** Make sure `<App />` is nested inside `<CartProvider>` in `src/main.jsx`.
- **Reducer action has no effect:** Check the action's `type` and required fields against the reducer cases.
- **Duplicate products appear:** Confirm the add case checks product IDs and returns an updated array for existing items.
- **Totals are wrong:** Verify quantities are included in both item count and price calculations.
- **Missing module error:** Run `npm install` in this experiment folder and check import paths and filename capitalization.

## Conclusion
This experiment demonstrates predictable multi-action cart state management using a reducer, while Context makes that state easy to share across a React app.
