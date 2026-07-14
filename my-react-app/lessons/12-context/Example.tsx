import { createContext, useContext } from 'react'
const Theme = createContext('light'); function Label() { return <p>{useContext(Theme)} theme</p> }
export default function Example() { return <Theme.Provider value="dark"><Label /></Theme.Provider> }
