import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({auth}) {

    return (
        <>
            <Head title="Dashboard" />

            <h1>User Dashboard</h1>
        </>
    );
}
