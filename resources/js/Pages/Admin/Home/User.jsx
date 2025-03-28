import AdminLayout from "../Layout/AdminLayout";
import 'CSS/AdminStyling/AdminUserDetails.css';
import 'CSS/AdminStyling/Table.css';
import { Head, Link } from '@inertiajs/react';

function User({user_activities}){


    let user = user_activities[0].user;

    let users_table_body = user_activities.map((e, i) => {


        return(
            <tr key={`${e.user.name}-${i}`}>
                <td className="text-left">{e.user.id}</td>
                <td className="text-left">{e.user.role}</td>
                <td className="text-left">{e.user.name}</td>
                <td className="text-left">{e.user.email}</td>
                <td className="text-left">{e.user.created_at}</td>
                <td className="text-left">
                    <div className='action-links-container'>

                        <button className='action-btn action-btn-del'>
                            <Link href={route('admin.users.destroy' , e.user.id)} method='post'>Delete</Link>
                        </button>
                    </div>

                </td>

            </tr>
        )
    });


    let user_activities_array = user_activities.map((e, i) => {
        return (
            <li className="table-row" key={`activity-${i}`}  >
                <div className="col col-1" data-label="User type" >{e.user.role}</div>
                <div className="col col-2 recent-activites-user-infos" data-label="User infos" >
                    <img src={e.user.avatar_path} alt="User avatar" />
                    {e.user.name}
                </div>
                <div className="col col-3" data-label="User action" >{e.activity}</div>
                <div className="col col-4" data-label="User action" >{Date(e.created_at)}</div>


                {e.activity_type == "added new product" 
                
                && 
                <div className="col col-5" data-label="User action" >
                    <Link href={route('admin.products.show' , e.user.id)} className='more-infos-link'>Product details...</Link>
                </div>
                }

            </li>
        )
    });





    


    return(
       <AdminLayout>
            <Head title="User details"/>
            <div className="dash-content">
                <table className="table-fill">
                    <caption>Details of {user.name},</caption>
                    <thead>
                        <tr>
                            <th className="text-left">ID</th>
                            <th className="text-left">Type</th>
                            <th className="text-left">Name</th>
                            <th className="text-left">Email</th>
                            <th className="text-left">Join date</th>
                            <th className="text-left">Actions</th>

                            
                        </tr>
                    </thead>
                    <tbody className="table-hover">
                        {users_table_body}

                    </tbody>
                </table>


                {/* ---------------- Recent Activity -----------------    */}
                <div className="activity">
                    <div className="title">
                        <i className="uil uil-clock-three"></i>
                        <span className="text">Recent user activities</span>
                    </div>
                    
                    <div className="recent-activites-container" >
                        <ul className="responsive-table">
                            <li className="table-header" >
                                <div className="col col-1" >User type</div>
                                <div className="col col-2" >User infos</div>
                                <div className="col col-3" >User action</div>
                                <div className="col col-3" >Action date</div>

                            </li>

                            {user_activities_array}
                        </ul>
                    </div>
                </div>






















            </div>
       </AdminLayout> 
    )
}

export default User;