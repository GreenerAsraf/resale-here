import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    // const imageHostKey ='733ccff8b2166f98b7716e88c8d0bc09';
    const imageHostKey =process.env.REACT_APP_IMGBB_KEY;

    // console.log(imageHostKey);

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
                    image: imgData.data.url,
                    price:data.price,
                    condition: data.codition,
                    location:data.location,
                    phone: data.phone,
                    description: data.description,
                    purchase: data.purchase


                    

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
                    // navigate('/dashboard/myproducts')
                })
            }
        })
        
    }
    return (
        <div className='w-full p-7'>
        <h2 className="text-4xl">Add A Product</h2>
        <form className='grid grid-cols-2 gap-6 w-full bg-slate-200  p-12' onSubmit={handleSubmit(handleAddProduct)}>
            <div className="form-control w-full max-w-xs">
                <label className="label"> <span className="label-text">Product Name</span></label>
                <input type="text" {...register("name", {
                    required: "Name is Required"
                })} className="input input-bordered w-full max-w-xs" />
                {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label"> <span className="label-text">Product Price</span></label>
                <input type="text" {...register("price", {
                    required: "Price is Required"
                })} className="input input-bordered w-full max-w-xs" />
                {errors.price && <p className='text-red-500'>{errors.price.message}</p>}
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label"> <span className="label-text">Your Location</span></label>
                <input type="text" {...register("location", {
                    required: "Location is Required",
                   
                })}  placeholder ="Chittagong" className="input input-bordered w-full max-w-xs" />
                {errors.price && <p className='text-red-500'>{errors.price.message}</p>}
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label"> <span className="label-text">Mobile Number</span></label>
                <input type="tel" {...register("phone", {
                    required: "Phone is Required",
                    placeholder:"Write your mobile number"
                })} className="input input-bordered w-full max-w-xs" />
                {errors.phone && <p className='text-red-500'>{errors.phone.message}</p>}
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label"> <span className="label-text">Email</span></label>
                <input type="email" {...register("email", {
                    required: true
                })} className="input input-bordered w-full max-w-xs" />
                {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label"> <span className="label-text">Year of purchase</span></label>
                <input type="date" {...register("purchase", {
                    required: true
                })} className="input input-bordered w-full max-w-xs" />
                {errors.purchase && <p className='text-red-500'>{errors.purchase.message}</p>}
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label"> <span className="label-text">description</span></label>
                <input type="text" {...register("description", {
                    required: true
                })} placeholder ='Write about the product' className="input input-bordered w-full max-w-xs" />
                {errors.description && <p className='text-red-500'>{errors.description.message}</p>}
            </div>

            <div className="form-control w-full max-w-xs">
                <label className="label"> <span className="label-text">Product's Condition</span></label>
                <select 
                {...register('codition')}
                className="select input-bordered w-full max-w-xs">
                    <option value="good">
                        Good
                    </option>
                    <option value="excellent">
                    Excellent
                    </option>  
                    <option value="fair">
                        Fair
                    </option>  
                </select>
            </div>

            <div className="form-control w-full max-w-xs">
                <label className="label"> <span className="label-text">Photo</span></label>
                <input type="file" {...register("image", {
                    required: "Photo is Required"
                })} className="input input-bordered w-full max-w-xs" />
                {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
            </div>
            <br />
            <input className='btn btn-accent w-full mt-4' value="Add Product" type="submit" />
        </form>
    </div>
    );
};

export default AddProduct;