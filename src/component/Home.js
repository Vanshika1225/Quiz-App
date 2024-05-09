import React from "react";
import frontimg from "../images/front-img.png";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
const Home = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    navigate("/Game");
  };

  return (
    <div className="home">
      <div className="image">
        <img src={frontimg} alt="Front Image" />
      </div>

      <div className="input-field">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Enter Your Name : </label>
          <input
            type="text"
            placeholder="Enter Your Name..."
            name="username"
            onChange={(e) => e.target.value}
            {...register("username", { required: true, minLength: 3 })}
          />
          {errors.username && errors.username.type === "required" && (
            <p className="error-message">This is required field</p>
          )}
          {errors.username && errors.username.type === "minLength" && (
            <p className="error-message">Minimum 3 Characters required</p>
          )}
          <button type="submit">Start</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
