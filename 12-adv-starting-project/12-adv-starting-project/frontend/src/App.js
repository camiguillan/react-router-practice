// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import EventDetailPage from './pages/EventDetailPage';
import NewEventPage ,{action as newEventAction} from './pages/NewEventPage';
import EditEventPage from './pages/EditEventPage';
import Root from './pages/Root';
import EventsRoot from './pages/EventsRoot';
import { loader} from './pages/EventsPage';
import Error from './pages/Error';
import { eventDetailLoader,  action as deleteAction } from './pages/EventDetailPage';

const route = createBrowserRouter([
  {path: '/' , element: <Root/>,
    errorElement: <Error/> ,
    children: [
      {index: true, element: <HomePage/>},  
      {path:'events', element: <EventsRoot />, children:
        [ {index: true, element: <EventsPage/> , loader: loader },
          // {path: ':id', element: <EventDetailPage/>, loader: eventDetailLoader },
          {path:'new'   , element: <NewEventPage/>,
            action: newEventAction
           },
          {path: ':id', 
            id: 'eventDetail',
            children:[
            {index: true, element: <EventDetailPage/>,
              action: deleteAction
            },
            {path:'edit' , element:<EditEventPage/>},
          ],
          loader: eventDetailLoader
        }

        ] 
       }
      
    ]
   }
])


function App() {
  return <RouterProvider router={route}  />;
}

export default App;
