import { Link } from "@inertiajs/react";
import 'CSS/AdminStyling/Table.css';


function ActionLink({type , link_text , link_to , link_args}){
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

        default : 
            classname = 'action-btn action-btn-infos';
            httpMethod = 'get';
    }

    return(
        <button className={classname}>
            <Link method={httpMethod}  href={route(link_to, link_args ? link_args : null )}> {link_text} </Link>
        </button>
    )
}

export default ActionLink;