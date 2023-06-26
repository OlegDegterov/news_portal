import { Link, Route, Routes } from "react-router-dom"
import { Counter } from "./components/Counter"
import './index.scss'
import { AboutAsyncPage } from "./pages/AboutPage/AboutAsyncPage"
import { MainAsyncPage } from "./pages/MainPage/MainAsyncPage"
import { Suspense } from "react"


export const App = () => {

    return (
        <div className="app">
            <Link to ={''}>Main Page</Link>
            <Link to ={'/about'}>About</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutAsyncPage/>}/> 
                    <Route path={'/'} element={<MainAsyncPage/>}/> 
                </Routes>
            </Suspense>
            Simple TEXT
            <Counter />
        </div>
    )
}