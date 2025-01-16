import { useLoaderData, json } from 'react-router-dom';

import EventsList from '../components/EventsList';

function EventsPage() {
    const data = useLoaderData()
    const events = data.events

    if(data.isError){
      return <p> {data.message}  </p>
    }
    
  return (
    <>
    <EventsList  events={events} />
    </>
  );
}

export default EventsPage;


export async    function loader(){
  const response = await fetch('https://automatic-guacamole-rxvw9p76jjh5w7-8080.app.github.dev/events');

          if (!response.ok) {
              // return {
              //   isError: true, 
              //   message: 'Could not fetch the data'
              // }
              throw json({message: 'Not able to fetch events'}, {status: 500}) 
              // new Response(JSON.stringify({message: 'Not able to fetch events'}), {status: 500})
          } else {
            const resData = await response.json();
            return resData
            
          }

}