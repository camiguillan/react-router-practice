import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";
import MainNavigation from '../components/MainNavigation.js'

export default function Error(){
    const error =  useRouteError()

    let title = 'An error ocurred';
    let message = 'Something went wrong!'

    if(error.status === 500){
        message =error.data.message
    }

    if(error.status === 404){
        title =' Not Found!'
        message = 'Could not found resource or page!'
    }

    return <>
    <MainNavigation />
    <PageContent title={title} >
        <p> {message} </p>
    </PageContent> 
    </>
}