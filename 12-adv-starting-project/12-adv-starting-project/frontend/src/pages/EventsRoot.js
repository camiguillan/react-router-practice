import EventsNavigation from '../components/EventsNavigation.js'
import { Outlet } from 'react-router-dom'

export default function EventsRoot(){
    return <>
        <EventsNavigation />
        <Outlet />
    
    </>
}