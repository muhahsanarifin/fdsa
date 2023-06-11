import React, { useState } from "react";
import * as validate from "../helpers/validation";
import * as Button from "../components/Button";

export const Json = () => {
  const [body, setBody] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setBody({ ...body, [name]: value });
  };

  const handleSave = (e) => {
    e.preventDefault();

    // Validate body
    const validateBody = validate.body(body);
    if (validateBody) return console.error(validateBody);

    // Body
    console.log("Body:", body);

    // Reset form
    document.getElementById("form").reset();

    // Reset body
    setBody({
      username: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    });
  };

  return (
    <section className="max-w-4xl mx-auto p-6  bg-white rounded-md shadow-md dark:bg-gray-800">
      <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
        Easy-Peasy Form
      </h2>

      <form onSubmit={handleSave} id="form">
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="username"
            >
              Username
            </label>
            <input
              name="username"
              id="username"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              onChange={(e) => {
                handleInput(e);
              }}
            />
          </div>

          <div>
            <label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="emailAddress"
            >
              Email Address
            </label>
            <input
              name="email"
              id="emailAddress"
              type="email"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              onChange={(e) => {
                handleInput(e);
              }}
            />
          </div>

          <div>
            <label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="password"
            >
              Password
            </label>
            <input
              name="password"
              id="password"
              type="password"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              onChange={(e) => {
                handleInput(e);
              }}
            />
          </div>

          <div>
            <label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="passwordConfirmation"
            >
              Password Confirmation
            </label>
            <input
              name="passwordConfirmation"
              id="passwordConfirmation"
              type="password"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              onChange={(e) => {
                handleInput(e);
              }}
            />
          </div>
        </div>

        <div className="flex justify-end mt-6 gap-x-2">
          {false && <Button.Clear onTitle={"Clear"} />}
          <Button.Save onTitle={"Save"} />
        </div>
      </form>
    </section>
  );
};
