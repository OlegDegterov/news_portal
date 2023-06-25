import { useState } from "react"
import './Counter.scss'

export const Counter = () => {
    const [count, setCount] = useState<number>(0)

    const decrement = () => {
        setCount(prev=>prev-1)
    }

    const increment = () => {
        setCount(prev=>prev+1)
    }

    return (
        <div>
            <div>{count}</div>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
        </div>
    )
}