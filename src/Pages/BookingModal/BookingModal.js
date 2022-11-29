import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Context/AuthProvider';

const BookingModal = () => {
    const { register, handleSubmit } = useForm();
    // const onSubmit = data => console.log(data);
    // const date = format(selectedDate, 'PP');
    const { user } = useContext(AuthContext);

    // const handleBooking = event => {
    //     event.preventDefault();
    //     const form = event.target;
    //     const name = form.name.value;
    //     const email = form.email.value;
    //     const phone = form.phone.value;
    //     // [3, 4, 5].map((value, i) => console.log(value))
    //     const booking = {
            // appointmentDate: date,
            // treatment: treatmentName,
            // patient: name,
            // slot,
            // email,
            // phone,
            // price
        // }



    return (
        <div>
            {/* The button to open modal */}
<label htmlFor="my-modal-6" className="btn">open modal</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal-6" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
  <form className='grid grid-cols-1 gap-3 mt-10'>
                        {/* <input type="text" disabled value={date} className="input w-full input-bordered " /> */}
                        <select name="slot" className="select select-bordered w-full">
                          
                        </select>
                        <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
                        <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
    <div className="modal-action">
      <label htmlFor="my-modal-6" className="btn">Submit</label>
    </div>
  </div>
</div>
        </div>
    );
};

export default BookingModal;