"use client";

import { useState } from "react";

export default function Contact() {
  const [formValue, setFormValue] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
  });

  const handelSubmit = async (e) => {
    e.preventDefault();
    console.log(formValue);
  };

  const handelChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {/* firstname, lastname, email, phone */}
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px]">
          <form method="POST">
            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                First name
              </label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                placeholder="First Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base"
                onChange={handelChange}
                value={formValue.firstname || ""}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Last name
              </label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Last Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base"
                onChange={handelChange}
                value={formValue.lastname || ""}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@email.com"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base"
                onChange={handelChange}
                value={formValue.email || ""}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="phone"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Phone
              </label>
              <input
                type="number"
                name="phone"
                placeholder="phone"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base"
                onChange={handelChange}
                value={formValue.phone || ""}
              />
            </div>
            <div>
              <button
                onClick={(e) => handelSubmit(e)}
                className="block rounded-md bg-green-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-green-700"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
