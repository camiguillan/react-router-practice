import {  json, useRouteLoaderData,  redirect } from "react-router-dom"
import EventItem from '../components/EventItem.js'


export default function EventDetailPage(){
    
    const data = useRouteLoaderData('eventDetail')
    return <div>
       <EventItem event={data.event}  />
    </div>  
}


export async function eventDetailLoader({request, params}){
    const eventId = params.id;
    const response = await fetch('https://automatic-guacamole-rxvw9p76jjh5w7-8080.app.github.dev/events/'+ eventId)
    
    if(!response.ok){
        throw json({message: 'could not fetch details for the selected event'}, {status: 500})
    }else {
        return response
    }
    
}

export async function action({request, params}){
    const eventId = params.id;
    const response = await fetch('https://automatic-guacamole-rxvw9p76jjh5w7-8080.app.github.dev/events/'+ eventId, {
        method: request.method, 
    })

     
    if(!response.ok){
        throw json({message: 'could not delete event'}, {status: 500})
    }else {
        return redirect('/events')
    }
}