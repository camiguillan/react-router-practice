import MainNavigation from '../components/MainNavigation.js'
import { Outlet, useNavigation } from 'react-router-dom'

export default function Root(){
    const nav = useNavigation()

    

    return <>
        <MainNavigation />
        <main>
            {/* {nav.state==='loading' && <p>Loading... </p>} */}
            <Outlet /> 
        </main>
    </>
}