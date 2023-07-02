import { Link, Route, Routes } from "react-router-dom"
import './styles/index.scss'
import { Suspense } from "react"
import { useTheme } from "./providers/ThemeProvider"
import { AboutAsyncPage } from "pages/AboutPage"
import { MainAsyncPage } from "pages/MainPage"
import { classNames } from "shared/lib/classNames/classNames"


export const App = () => {
    const {theme, toogleTheme} = useTheme()

    return (
        <div className={classNames("app", {}, [theme])}>
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
        </div>
    )
}