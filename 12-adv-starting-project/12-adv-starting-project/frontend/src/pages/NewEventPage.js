import EventForm from "../components/EventForm.js";
import {json, redirect} from 'react-router-dom'


export default function NewEventPage(){
    console.log('hello')
    return <EventForm />
}

export async function action({request, params}){
    const formData = await request.formData()
    const eventData = {
        title: formData.get('title')  ,
        image: formData.get('image'),
        date: formData.get('date'),
        description: formData.get('description')
    } 
    const response = await fetch('https://automatic-guacamole-rxvw9p76jjh5w7-8080.app.github.dev/events/', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(eventData)
    } )

    if(!response.ok){
        throw json({message: 'not able to save event'}, {status: 500})
    }

    return redirect('/events')


}