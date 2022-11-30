import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const handleAddProduct = data => {
        console.log(data);

        // 733ccff8b2166f98b7716e88c8d0bc09
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData => {
            if(imgData.success){
                console.log(imgData.data.url);
                const product = {
                    name: data.name, 
                    email: data.email,
                    // specialty: data.specialty,
                    image: imgData.data.url
                }

                // save doctor information to the database
                fetch('http://localhost:5000/products', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json', 
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(product)
                })
                .then(res => res.json())
                .then(result =>{
                    console.log(result);
                    toast.success(`${data.name} is added successfully`);
                    navigate('/dashboard/myproducts')
                })
            }
        })
        
    }
    return (
        <div className='w-96 p-7'>
        <h2 className="text-4xl">Add A Product</h2>
        <form onSubmit={handleSubmit(handleAddProduct)}>
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
            <div className="form-control w-full max-w-xs">
                <label className="label"> <span className="label-text">Product's Condition</span></label>
                <select 
                {...register('role')}
                className="select input-bordered w-full max-w-xs">
                    <option value="seller">
                        Seller
                    </option>
                    <option value="buyer">
                        Buyer
                    </option>
                    {/* {
                        specialties.map(specialty => <option
                            key={specialty._id}
                            value={specialty.name}
                        >{specialty.name}</option>)
                    } */}
                    
                    
                </select>
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label"> <span className="label-text">Photo</span></label>
                <input type="file" {...register("image", {
                    required: "Photo is Required"
                })} className="input input-bordered w-full max-w-xs" />
                {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
            </div>
            <input className='btn btn-accent w-full mt-4' value="Add Doctor" type="submit" />
        </form>
    </div>
    );
};

export default AddProduct;