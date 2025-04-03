import { Link ,useForm } from "@inertiajs/react";
import 'CSS/AdminStyling/Table.css';


function ActionLink({type , link_text , link_to , link_args , updatedObj}){
    let classname = "";
    let httpMethod = "";


    switch(type){
        case 'infos' :
            classname = 'action-btn action-btn-infos ';
            httpMethod = 'get';
        break;

        case 'edit' : 
            classname = 'action-btn action-btn-edit';
            httpMethod = 'get';

        break;

        case 'del' : 
            classname = 'action-btn action-btn-del';
            httpMethod = 'delete';

        break;
        case 'put' : 
            classname = 'action-btn action-btn bg-yellow-400';
            httpMethod = 'put';

        break;
        default : 
            classname = 'action-btn action-btn-infos';
            httpMethod = 'get';
    }

    return(

        <>
            {updatedObj ? ( 
                    <Link className={classname} method={httpMethod}  href={route(link_to, link_args ? link_args : null )} data={updatedObj} > {link_text} </Link>
                ) : (
                    <Link className={classname} method={httpMethod}  href={route(link_to, link_args ? link_args : null )}> {link_text} </Link>
                )
            }
        </>


    )
}

export default ActionLink;