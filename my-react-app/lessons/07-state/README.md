# 07 - State

`useState` infers simple values. Use a generic such as `useState<User | null>(null)`
when the initial value cannot reveal the full type. Update objects and arrays
immutably and use functional updates when based on previous state.

Exercise: add decrement, reset, and typed step controls. Done when rapid clicks work.
