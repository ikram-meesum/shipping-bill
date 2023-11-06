import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../component/Navbar";
import { useForm } from "react-hook-form";
import Footer from "../component/Footer";
import axios from "axios";

export default function AddDetail() {
  const id = useParams();
  //console.log(id.id);

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  let SERVER = JSON.stringify(import.meta.env, ["VITE_SERVER_URL"]);
  SERVER = JSON.parse(SERVER);
  let SERVER_URL = SERVER.VITE_SERVER_URL;

  return (
    <div>
      <Navbar />
      <section className="container">
        <h2 className="mt-5">Add Invoice Detail </h2>
        {id.id}
      </section>
      <Footer />
    </div>
  );
}
