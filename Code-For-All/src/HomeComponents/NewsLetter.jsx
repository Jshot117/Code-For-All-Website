import React, { useState } from "react";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email");
      return;
    }

    try {
      const response = await fetch(
        "https://server.rakibshahid.com/api/subscribe",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Response Data:", data);
        setEmail("");
        setError("");
        alert("Successfully subscribed!");
      } else {
        const errorData = await response.json();
        setError(
          errorData.message || "An error occurred. Please try again later."
        );
        console.log(errorData.error);
      }
    } catch (error) {
      console.error("Error:", error);
      setError(
        "A network error occurred. Please check your connection and try again."
      );
    }
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
    if (error) {
      setError("");
    }
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="  mx-auto md:size-fit md:mr-28">
        <div>
          {error && (
            <p className="translate-y-8 translate-x-3 absolute text-red-500 mt-2">
              {error}
            </p>
          )}
        </div>
        <div className="flex flex-row  ">
          <div>
            <input
              type="text"
              placeholder="Enter your email"
              value={email}
              onChange={handleChange}
              className="border-l border-t border-b rounded-l-md p-2"
            />
          </div>
          <div className=" border-spacing bg-purple-300 rounded-r-md font-bold hover:opacity-55  ">
            <input
              type="submit"
              value="Subscribe"
              className="p-2 cursor-pointer"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewsLetter;
