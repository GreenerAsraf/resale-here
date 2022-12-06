import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import Loading from '../../Loading/Loading';

const ManageSellers = () => {


    const [deletingSeller, setDeletingSeller] = useState(null);

    // const closeModal = () => {
    //     setDeletingSeller(null);
    // }


    const { data: seller, isLoading, refetch } = useQuery({
        queryKey: ['seller'],
        queryFn: async () => {
            try {
                const res = await fetch('https://resale-here-server.vercel.app/seller', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    });


    const handleDeleteSeller = seller => {
        fetch(`https://resale-here-server.vercel.app/users/seller/${seller._id}`, {
            method: 'DELETE', 
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                refetch();
                toast.success(`Seller ${seller.name} deleted successfully`)
            }
        })
    }

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-3xl">Manage Sellers: {seller?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            seller.map((seller, i) => <tr key={seller._id}>
                                <th>{i + 1}</th>
                                <td><div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src={seller?.image} alt="" />
                                    </div>
                                </div></td>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                                <td>{seller.specialty}</td>
                                <td>
                                    <label onClick={() => setDeletingSeller(seller)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {/* {
                deletingSeller && <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deletingSeller.name}. It cannot be undone.`}
                    successAction = {handleDeleteSeller}
                    successButtonName="Delete"
                    modalData = {deletingSeller}
                    closeModal = {closeModal}
                >
                </ConfirmationModal>
            } */}
        </div>
    );
};

export default ManageSellers;