# 11 - State design and reducers

Keep state minimal and lift shared state to the closest common parent. Use a `State`
type and a discriminated union of `Action` objects with `useReducer`.

Exercise: add typed decrement/reset actions and test the pure reducer.
