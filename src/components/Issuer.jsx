import React from "react";

const Issuer = () => {
  return (
    <div>
      <section className="max-w-screen-lg mx-auto py-8">
        <div className="text-left ml-3">
          <h1>Issuer</h1>
          <label
            htmlFor="firstName"
            className="mb-1 font-semibold text-gray-500"
          >
            ID
          </label>
          <input
            id="identity"
            type="text"
            placeholder="0x0000"
            className="block w-1/2 bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 appearance-none "
          />
          <button className="my-2 flex w-32 items-center justify-center rounded-lg bg-blue-500 py-2 text-center font-bold text-white outline-none transition focus:ring">
            Get Id
          </button>
        </div>
      </section>
    </div>
  );
};

export default Issuer;
