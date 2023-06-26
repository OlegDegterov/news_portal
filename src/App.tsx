import { Link, Route, Routes } from "react-router-dom"
import { Counter } from "./components/Counter"
import './styles/index.scss'
import { AboutAsyncPage } from "./pages/AboutPage/AboutAsyncPage"
import { MainAsyncPage } from "./pages/MainPage/MainAsyncPage"
import { Suspense } from "react"
import { useTheme } from "./theme/useTheme"


export const App = () => {
    const {theme, toogleTheme} = useTheme()

    return (
        <div className={`app ${theme}`}>
            <button onClick={toogleTheme} >TOOGLE THEME</button>
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