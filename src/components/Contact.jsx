import React from "react";

const Contact = () => {
  return (
    <div className="mex-w-[72rem] m-auto w-full p-4 py-16" id="contact">
      <h2 className="text-center text-gray-700">Send us a message</h2>
      <p className="text-center text-gray-700 py-2">
        We're standing by!
        <div className="grid md:grid-cols-2">
          <img
            src="https://picsum.photos/710/462"
            alt="contact-img"
            className="w-full md:h-full object-cover p-2 max-h-[32rem] h-[12rem]"
          />
          <form action="">
            <div className="grid grid-cols-2">
              <input
                className="border m-2 p-2"
                type="text"
                name=""
                id=""
                placeholder="First Name"
              />
              <input
                className="border m-2 p-2"
                type="text"
                name=""
                id=""
                placeholder="Last Name"
              />
              <input
                className="border m-2 p-2"
                type="email"
                name=""
                id=""
                placeholder="Email"
              />
              <input
                className="border m-2 p-2"
                type="tel"
                name=""
                id=""
                placeholder="Phone"
              />
              <input
                className="border col-span-2 m-2 p-2"
                type="text"
                name=""
                id=""
                placeholder="Address"
              />
              <textarea
                className="border col-span-2 m-2 p-2"
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>
              <button className="col-span-2 m-2">Submit</button>
            </div>
          </form>
        </div>
      </p>
    </div>
  );
};

export default Contact;
