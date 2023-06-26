import { useState } from "react"
import s from './Counter.module.scss'

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
            <button className={s.btn} onClick={increment}>increment</button>
            <button className={s.btn} onClick={decrement}>decrement</button>
        </div>
    )
}