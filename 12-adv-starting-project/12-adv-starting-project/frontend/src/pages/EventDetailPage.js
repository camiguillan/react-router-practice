import { useParams } from "react-router-dom"

export default function EventDetailPage(){
    const params = useParams()
    return <div>
        <h1> Event Details Page </h1>
        <p> {params.id} </p>
    </div>  
}