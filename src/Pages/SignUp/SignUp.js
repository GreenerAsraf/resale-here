import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { Controller, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { setAuthToken } from '../../API/setAuthToken';
import useToken from '../../Hooks/useToken';

// import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';


const SignUp = () => {
    const { register, handleSubmit,  control, reset , formState: { errors } } = useForm();
    const { createUser, updateUser,signInWithGoogle } = useContext(AuthContext);
    const [signUpError, setSignUPError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail);
    

    const navigate = useNavigate();

    if(token){
        navigate('/');
    }

    // const handleSignUp = (data) => {
    //     console.log(data);
    //     setSignUPError('');
    //     createUser(data.email, data.password)
    //         .then(result => {
    //             const user = result.user;
    //             setAuthToken(result.user)
    //             console.log(user);
    //             toast('User Created Successfully.')
    //             const userInfo = {
    //                 displayName: data.name
    //             }
    //             updateUser(userInfo)
    //                 .then(() => {
    //                     console.log(data.name, data.email);
    //                     saveUser(data.name, data.email);
    //                 })
    //                 .catch(err => console.log(err));
    //         })
    //         .catch(error => {
    //             console.log(error)
    //             setSignUPError(error.message)
    //         });
    // }

    const handleSignUp = (data) => {
        setSignUPError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('User Created Successfully.')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email,data.role);
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error)
                setSignUPError(error.message)
            });
    }


   
const handleGoogleSignIn =() =>{
   signInWithGoogle().then(result => {
    
    console.log(result.user)
    // setAuthToken(result.user)
});
}
  

    const saveUser = (name, email,role) =>{
        const user ={name, email,role};
        fetch('https://resale-here-server.vercel.app/users', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            setCreatedUserEmail(email);
        })
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
        <div className='w-96 p-7'>
            <h2 className='text-xl text-center'>Sign Up</h2>
            <form onSubmit={handleSubmit(handleSignUp)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Role</span></label>
                    <select {...register("role",{
                         required: "role is Required"
                    })}
                    className="input input-bordered w-full max-w-xs"
                    >
                        <option value="seller">Seller</option>
                        <option value="buyer">Buyer</option>   
                    </select>
                    {errors.role && <p className='text-red-500'>{errors.role.message}</p>}
                </div>
                

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Name</span></label>
                    <input type="text" {...register("name", {
                        required: "Name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Email</span></label>
                    <input type="email" {...register("email", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                </div>
               

                        {/* image  */}
                        {/* <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Select Image</span></label>
                    <input type="file" {...register("file", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-500'>{errors.file.message}</p>}
                </div> */}

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Password</span></label>
                    <input type="password" {...register("password", {
                        required: "Password is required",
                        minLength: { value: 6, message: "Password must be 6 characters long" },
                        pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                </div>
                <input className='btn btn-accent w-full mt-4' value="Sign Up" type="submit" />
                {signUpError && <p className='text-red-600'>{signUpError}</p>}
            </form>
            <p>Already have an account <Link className='text-secondary' to="/login">Please Login</Link></p>
            <div className="divider">OR</div>

            <button  className='btn btn-outline w-full' onClick={handleGoogleSignIn}>CONTINUE WITH GOOGLE</button>

        </div>
    </div>
    );
};

export default SignUp;