import { Link } from '@inertiajs/react';

import 'CSS/AdminStyling/AddBtn.css';

function AddBtn({link_to}){

    return(

        <Link href={route(link_to)}>
            <button className="plus"></button>
        </Link>
    )

}

export default AddBtn;