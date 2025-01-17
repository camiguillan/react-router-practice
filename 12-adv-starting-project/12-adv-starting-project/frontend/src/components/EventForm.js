import { useNavigate, Form , useNavigation, useActionData,json, redirect} from 'react-router-dom';


import classes from './EventForm.module.css';

function EventForm({ method, event }) {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting'; 
  const data = useActionData(); 

  console.log(data)

    function cancelHandler() {
    navigate('..');
  }

  return (
    <Form method={method} className={classes.form}>
      {data && 
        data.errors && <ul>
          {Object.values(data.errors).map(error => {
            return <li key={error}> {error}   </li>
          })}
        </ul>
      }
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" required
          defaultValue={ event ?  event.title : ''}
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" name="image" required
        defaultValue={ event ?  event.image : ''}
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" required
        defaultValue={ event ?  event.date : ''}
        
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows="5" required
        defaultValue={ event ?  event.description : ''} />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
         <button disabled={isSubmitting} >{ isSubmitting? 'Submitting...' : 'Save'}</button>
      </div>
    </Form>
  );
}

export default EventForm;


export async function action({request, params}){
  const method = request.method
  const formData = await request.formData()
  const eventData = {
      title: formData.get('title')  ,
      image: formData.get('image'),
      date: formData.get('date'),
      description: formData.get('description')
  } 

  let url = 'https://automatic-guacamole-rxvw9p76jjh5w7-8080.app.github.dev/events'

  if (method === 'PATCH'){
    url = 'https://automatic-guacamole-rxvw9p76jjh5w7-8080.app.github.dev/events/' + params.id
  }

  const response = await fetch(url, {
      method: method,
      headers: {
          'Content-Type' : 'application/json'
      },
      body: JSON.stringify(eventData)
  } )

  if(response.status === 422){
      return response
  }

  if(!response.ok){
      throw json({message: 'not able to save event'}, {status: 500})
  }

  return redirect('/events')


}
