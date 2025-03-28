import { Head, Link } from '@inertiajs/react';

import AdminLayout from '../Layout/AdminLayout';
import 'CSS/AdminStyling/Table.css';


function Users({users}){
    let users_table_body = users.map((u, i) => {
        return(
            <tr key={`${u.name}-${i}`}>
                <td className="text-left">{u.id}</td>
                <td className="text-left">{u.role}</td>
                <td className="text-left">{u.name}</td>
                <td className="text-left">{u.email}</td>
                <td className="text-left">{Date(u.created_at)}</td>
                <td className="text-left">
                    <div className='action-links-container'>
                        <button className='action-btn action-btn-infos'>
                            <Link href={route('admin.users.show' ,u.id)}>More details</Link>
                        </button>

                        <button className='action-btn action-btn-del'>
                            <Link href={route('admin.users.destroy' , u.id)} method='post'>Delete</Link>
                        </button>
                    </div>

                </td>

            </tr>

        )
    });

    return(

        <AdminLayout isEnableSearch={true} search_placeholder='Search for user...' >
            <Head title='Users page'/>
            <table className="table-fill">
                <caption>Users list</caption>
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
        </AdminLayout>
    )
}

export default Users;