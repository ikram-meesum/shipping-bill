import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../component/Navbar";
import axios from "axios";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import { BsPencilSquare } from "react-icons/bs";
import { BiDetail } from "react-icons/bi";
import { useForm } from "react-hook-form";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Detail() {
  const navigate = useNavigate();
  const id = useParams();
  console.log("id: ", id.id);
  console.log("qty: ", id.qty);

  const {
    register,
    watch,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [details, setDetails] = useState([]);
  const [isEnter, setIsEnter] = useState(false);

  let SERVER = JSON.stringify(import.meta.env, ["VITE_SERVER_URL"]);
  SERVER = JSON.parse(SERVER);
  let SERVER_URL = SERVER.VITE_SERVER_URL;

  const getDetail = async () => {
    try {
      const res = await axios.get(`${SERVER_URL}/detail/${id.id}`);
      console.log(res.data);
      setDetails(res.data);
      // console.log("total record: ", res.data.length);
    } catch (error) {
      // Handle errors
      console.log(`Following error occured from getDetail method: ${error}`);
    }
  };

  useEffect(() => {
    getDetail();
  }, []);

  const onSubmit = async (data) => {
    console.log(data);

    let insertData = {
      container_no: data.container_no,
      seal_invoice: data.seal_invoice,
      seal_landed: data.seal_landed,
      mark: data.mark,
      bale_invoice: data.bale_invoice,
      bale_lan: data.bale_lan,
      invoice_id: id.id,

      gross_weight_invoice: data.gross_weight_invoice,
      gross_weight_lan: data.gross_weight_lan,
      commence_date: data.commence_date,
      commence_time: data.commence_time,
      controller_name: data.controller_name,
      remark_06A: data.remark_06A,
      remark_09: data.remark_09,
    };

    try {
      const response = await axios.post(`${SERVER_URL}/detail`, insertData);
      console.log(response.data);
      toast.success("Invoice detail has been inserted!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setDetails([...details, insertData]);
      reset();
      //navigate("/main");
    } catch (error) {
      console.log(`Following error occured form post invoice detail: ${error}`);
    }
  };

  const styleDiv = {
    display: id.qty == details.length ? "none" : "block",
    // color: darkMode ? 'white' : 'black',
    // textAlign:'center',
    // padding:'2rem'
  };

  return (
    <div>
      <Navbar />
      <ToastContainer />
      <section className="container">
        <h2>Invoice Details </h2>

        {/* start modal */}

        <button
          type="button"
          className="btn btn-primary btn-sm mt-3 mb-3 styleDiv"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          style={{
            display: id.qty == details.length ? "none" : "block",
          }}
        >
          Add New Detail
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Add Invoice Details
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form
                  className="row g-3 mt-3"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="col-md-4">
                    <label htmlFor="inputZip" className="form-label">
                      Container Number
                    </label>
                    <input
                      type="text"
                      {...register("container_no", { required: true })}
                      className="form-control"
                      placeholder="Container-1"
                    />
                    {errors.container_no && (
                      <p className="text-danger">
                        Container number is required.
                      </p>
                    )}
                  </div>

                  {/* Second Row */}
                  <div className="col-md-4">
                    <label htmlFor="inputZip" className="form-label">
                      Seal Invoice
                    </label>
                    <input
                      {...register("seal_invoice", { required: true })}
                      type="text"
                      className="form-control"
                    />
                    {errors.seal_invoice && (
                      <p className="text-danger">Seal invoice is required.</p>
                    )}
                  </div>

                  <div className="col-md-4">
                    <label htmlFor="inputZip" className="form-label">
                      Mark
                    </label>
                    <input
                      {...register("mark", { required: true })}
                      type="text"
                      className="form-control"
                    />
                    {errors.mark && (
                      <p className="text-danger">Mark is required.</p>
                    )}
                  </div>

                  {/* Second Row */}

                  <div className="col-md-4">
                    <label htmlFor="inputZip" className="form-label">
                      Bale Invoice
                    </label>
                    <input
                      {...register("bale_invoice", { required: true })}
                      type="text"
                      className="form-control"
                    />
                    {errors.bale_invoice && (
                      <p className="text-danger">Bale invoice is required.</p>
                    )}
                  </div>

                  <div className="col-md-4">
                    <label htmlFor="inputZip" className="form-label">
                      Bale Lan
                    </label>
                    <input
                      {...register("bale_lan", { required: true })}
                      type="text"
                      className="form-control"
                    />
                    {errors.bale_lan && (
                      <p className="text-danger">Bale Lan is required.</p>
                    )}
                  </div>

                  <div className="col-md-4">
                    <label htmlFor="inputZip" className="form-label">
                      Gross Weight Invoice
                    </label>
                    <input
                      {...register("gross_weight_invoice", { required: true })}
                      type="number"
                      className="form-control"
                    />
                    {errors.gross_weight_invoice && (
                      <p className="text-danger">
                        Gross weight invoice is required.
                      </p>
                    )}
                  </div>

                  {/* Third Line */}

                  <div className="col-md-4">
                    <label htmlFor="inputZip" className="form-label">
                      Gross Weight Lan
                    </label>
                    <input
                      {...register("gross_weight_lan", { required: true })}
                      type="number"
                      className="form-control"
                    />
                    {errors.gross_weight_lan && (
                      <p className="text-danger">
                        Gross weight lan is required.
                      </p>
                    )}
                  </div>

                  <div className="col-md-4">
                    <label htmlFor="inputZip" className="form-label">
                      Commence Date
                    </label>
                    <input
                      type="date"
                      {...register("commence_date", { required: true })}
                      className="form-control"
                    />
                    {errors.commence_date && (
                      <p className="text-danger">Commence date is required.</p>
                    )}
                  </div>

                  <div className="col-md-4">
                    <label htmlFor="inputZip" className="form-label">
                      Commence Time
                    </label>
                    <input
                      {...register("commence_time", { required: true })}
                      type="time"
                      className="form-control"
                    />
                    {errors.commence_time && (
                      <p className="text-danger">Commence time is required.</p>
                    )}
                  </div>

                  {/* Forth Line */}

                  <div className="col-md-4">
                    <label htmlFor="inputZip" className="form-label">
                      Controller Name
                    </label>
                    <input
                      {...register("controller_name", { required: true })}
                      type="text"
                      className="form-control"
                    />
                    {errors.controller_name && (
                      <p className="text-danger">
                        Controller name is required.
                      </p>
                    )}
                  </div>

                  <div className="col-md-4">
                    <label htmlFor="inputZip" className="form-label">
                      Remark 06A
                    </label>
                    <input
                      {...register("remark_06A", { required: true })}
                      type="text"
                      className="form-control"
                    />
                    {errors.remark_06A && (
                      <p className="text-danger">Remark 06A is required.</p>
                    )}
                  </div>

                  <div className="col-md-4">
                    <label htmlFor="inputZip" className="form-label">
                      Remarks 09
                    </label>
                    <input
                      {...register("remark_09", { required: true })}
                      type="text"
                      className="form-control"
                    />
                    {errors.remark_09 && (
                      <p className="text-danger">Remark 09 is required.</p>
                    )}
                  </div>

                  <div className="col-12 mt-5 mb-5">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      //disabled="true"
                    >
                      Insert Record
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* end modal */}

        <section className="ml-2 mr-5">
          <table className="table table-striped table-hover">
            <thead>
              <tr className="table-dark">
                <th scope="col">S#</th>
                <th scope="col">Container #</th>
                <th scope="col">Commence Date</th>
                <th scope="col">Commence Time</th>
                <th scope="col">Seal Invoice</th>
                <th scope="col">Bale Invoice</th>
                <th scope="col">Ed</th>
                <th scope="col">Inv</th>
                <th scope="col">Det</th>
              </tr>
            </thead>
            <tbody>
              {details.map((inv, ind) => {
                return (
                  <tr key={ind}>
                    <th scope="row">{ind + 1}</th>
                    <td>{inv.container_no}</td>
                    <td>{dayjs(inv.commence_date).format("DD-MMM-YYYY")}</td>
                    <td>{inv.commence_time}</td>
                    <td>{inv.seal_invoice}</td>
                    <td>{inv.bale_invoice}</td>
                    <td>
                      <Link to={"/main"}>
                        <BsPencilSquare color="blue" />
                      </Link>
                    </td>
                    <td>
                      <Link to={`/invdetail/${inv._id}`}>
                        <BiDetail color="red" />
                      </Link>
                    </td>
                    <td>
                      <Link to={`/adddetail/${id.id}/${inv._id}`}>
                        <BiDetail color="red" />
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
      </section>
    </div>
  );
}
