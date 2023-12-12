import emailjs from "@emailjs/browser";
import { useRef } from "react";
// import Swal from "sweetalert2";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_befbdg1",
        "template_r0bc26d",
        form.current,
        "FEy8sxlh3qGL34dud"
      )
      .then(
        (result) => {
          // Swal.fire({
          //   position: "top-end",
          //   icon: "success",
          //   title: "Successfully Send your Email!!",
          //   showConfirmButton: false,
          //   timer: 1500
          // });
          console.log(result.text);
        },
        (error) => {
          // Swal.fire({
          //   icon: "error",
          //   title: "Oops...",
          //   text: "Something went wrong!",
           
          // });
          console.log(error.text);
        }
      );
  };
  return (
    <div className="mt-12 flex justify-center">
           
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-6">
            <form ref={form} onSubmit={sendEmail}>
             <div>
              <div className="form-control w-full mb-6">
              <input type="text" name="user_name" placeholder="Enter your name" className="input input-bordered font-bold text-black" />
              </div>
              <div className="form-control w-full mb-6">
              <input type="email" name="user_email" placeholder="Enter your email" className="input input-bordered font-bold text-black" />
              </div>
              <div className="form-control w-full mb-6">
              <textarea type="text" name="message" placeholder="Write your message" className="input input-bordered font-bold text-black" />
              </div>
              <div className="form-control w-full mb-6">
              <input type="submit" value="Send" className="btn btn-block font-bold text-black text-2xl" />
              </div>
             </div>
            </form>
          </div>
        </div>
    
  );
};

export default ContactUs;
