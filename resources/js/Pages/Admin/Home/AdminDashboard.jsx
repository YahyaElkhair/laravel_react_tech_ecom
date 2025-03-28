import React, { useEffect, useState } from 'react';
import 'CSS/AdminStyling/AdminDashboard.css';
import { Head , Link } from '@inertiajs/react';

import AdminLayout from '../Layout/AdminLayout';
    




const AdminDashboard = ({recent_activites}) => {
    let link_href = null;

    let recent_activites_array = recent_activites.map((e, i) => {

        switch (e.activity_type) {
            case "registration":
                link_href = "admin.users.show"
                break;
    
            default:
                break;
        }


        return (
            <li className="table-row" key={`activity-${i}`}  >
                <div className="col col-1" data-label="User type" >{e.user.role}</div>
                <div className="col col-2 recent-activites-user-infos" data-label="User infos" >
                    
                    <img src={e.user.avatar_path} alt="User avatar" />
                    {e.user.name}
                </div>
                <div className="col col-3" data-label="User action" >{e.activity}</div>
                <div className="col col-3" data-label="User action" >
                    <Link href={route(link_href , e.user.id)} className='more-infos-link'>More informations...</Link>
                </div>

            </li>
        )
    });


    return (
        <AdminLayout>
            <Head title='Admin - Dashboard'/>
            <div className="dash-content">
                <div className="overview">
                    <div className="title">
                        <i className="uil uil-tachometer-fast-alt"></i>
                        <span className="text">Dashboard</span>
                    </div>
                    <div className="boxes">
                        <div className="box box1">
                            <i className="uil uil-arrow-growth"></i>
                            <span className="text">Monthly income</span>
                            <span className="number">50,120</span>
                        </div>

                        <div className="box box2">
                            <i className="uil uil-arrow-growth"></i>
                            <span className="text">Daily income</span>
                            <span className="number">20,120</span>
                        </div>

                        <div className="box box3">
                            <i className="uil uil-arrow-growth"></i>
                            <span className="text">Total income</span>
                            <span className="number">10,120</span>
                        </div>
                        
                    </div>
                </div>



                {/* ---------------- Recent Activity -----------------    */}
                <div className="activity">
                    <div className="title">
                        <i className="uil uil-clock-three"></i>
                        <span className="text">Recent Activity</span>
                    </div>
                    
                    <div className="recent-activites-container" >
                        <ul className="responsive-table">
                            <li className="table-header" >
                                <div className="col col-1" >User type</div>
                                <div className="col col-2" >User infos</div>
                                <div className="col col-3" >User action</div>
                                <div className="col col-3" >Show more</div>


                            </li>
                            {recent_activites_array}
                        </ul>
                    </div>
                    

                </div>
            </div>
        </AdminLayout>

    );
};

export default AdminDashboard;
