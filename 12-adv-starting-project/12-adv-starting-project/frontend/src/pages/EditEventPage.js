import { useRouteLoaderData } from 'react-router-dom'
import EventForm from '../components/EventForm.js'

export default function EditEventPage(){
    const data = useRouteLoaderData('eventDetail')

    return <EventForm  method='path'  event={data.event}  />
}

