import MainNavigation from '../components/MainNavigation.js'
import { Outlet } from 'react-router-dom'

export default function Root(){
    return <>
        <MainNavigation />
        <main>
            <Outlet /> 
        </main>
    </>
}