import React from "react";

const Booking = () => {
  return (
    <div className="max-w-[72rem] m-auto w-full p-4" id="deals">
      <form
        action=""
        className="lg:flex lg:justify-between w-full items-center"
      >
        <div className="flex flex-col my-2 py-2">
          <label htmlFor="">Destination</label>
          <select
            name=""
            id=""
            className="lg:w-[300px] md:w-full border rounded-md p-2"
          >
            <option value="">Elfheim</option>
            <option value="">Svartelfheim</option>
            <option value="">Hellheim</option>
            <option value="">Nilfheim</option>
          </select>
        </div>
        <div className="flex w-full">
          <div className="flex flex-col w-full lg:max-w-[15rem] my-2 p-2">
            <label htmlFor="">Check-In</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
          <div className="flex flex-col w-full lg:max-w-[15rem] my-2 p-2">
            <label htmlFor="">Check-Out</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
        </div>
        <div className="flex flex-col my-2 p-2 w-full">
          <label htmlFor="">Search</label>
          <button className="w-full">Rates & Availabilities</button>
        </div>
      </form>
    </div>
  );
};

export default Booking;
