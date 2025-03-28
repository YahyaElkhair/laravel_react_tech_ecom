import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import InputRadio from '@/Components/InputRadio';
import ShopLayout from '@/Pages/Store/Layout/ShopLayout';

import { Head, Link, useForm } from '@inertiajs/react';




import 'CSS/ShopStyling/Register.css';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        gender: '',
        user_type: '',

    });

    const submit = (e) => {
        e.preventDefault();
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <ShopLayout>
            <Head title="Register" />

            <div className="mt-6 flex flex-col items-center justify-center w-full h-auto">
                <h1>Create new account</h1>
                <form onSubmit={submit}>
                    <div className='mt-5'>
                        <InputLabel htmlFor="name" value="Full name" />

                        <TextInput
                            id="name"
                            name="name"
                            value={data.name}
                            className="mt-1 block w-full"
                            autoComplete="name"
                            isFocused={true}
                            onChange={(e) => setData('name', e.target.value)}
                            required
                        />

                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="email" value="Email" />

                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            onChange={(e) => setData('email', e.target.value)}
                            required
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>



                    <div className="mt-4 gender_container">
                        <InputLabel htmlFor="customer" value="Customer" />

                        <InputRadio
                            id="customer"
                            type="radio"
                            name="user_type"
                            value="customer"
                            onChange={(e) => setData('user_type', e.target.value)}
                            required
                        />

                        <InputLabel htmlFor="seller" value="Seller" />

                        <InputRadio
                            id="seller"
                            type="radio"
                            name="user_type"
                            value="seller"
                            onChange={(e) => setData('user_type', e.target.value)}
                            required
                        />
                        <InputError message={errors.email} className="mt-2" />
                    </div>






                    <div className="mt-4 gender_container">
                        <InputLabel htmlFor="male" value="Male" />

                        <InputRadio
                            id="male"
                            type="radio"
                            name="gender"
                            value="male"
                            onChange={(e) => setData('gender', e.target.value)}
                            required
                        />

                        <InputLabel htmlFor="female" value="Female" />

                        <InputRadio
                            id="female"
                            type="radio"
                            name="gender"
                            value="female"
                            onChange={(e) => setData('gender', e.target.value)}
                            required
                        />
                        <InputError message={errors.email} className="mt-2" />
                    </div>



                    




                    <div className="mt-4">
                        <InputLabel htmlFor="password" value="Password" />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            onChange={(e) => setData('password', e.target.value)}
                            required
                        />

                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel
                            htmlFor="password_confirmation"
                            value="Confirm Password"
                        />

                        <TextInput
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            onChange={(e) =>
                                setData('password_confirmation', e.target.value)
                            }
                            required
                        />

                        <InputError
                            message={errors.password_confirmation}
                            className="mt-2"
                        />
                    </div>

                    <div className="mt-4 w-full flex items-center justify-between">


                        <PrimaryButton className="ms-4 register_btn" disabled={processing}>
                            Register
                        </PrimaryButton>


                        <Link
                            href={route('login')}
                            className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800"
                        >
                            Already registered?
                        </Link>
                    </div>
                </form>

            </div>
            
        </ShopLayout>
    );
}
