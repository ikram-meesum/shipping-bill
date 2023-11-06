import React, { useState, useEffect } from "react";
import Navbar from "../component/Navbar";
import { BsPencilSquare } from "react-icons/bs";
import { BiDetail } from "react-icons/bi";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";

export default function Main() {
  const [invoices, setInvoices] = useState([]);
  const navigate = useNavigate();

  let SERVER = JSON.stringify(import.meta.env, ["VITE_SERVER_URL"]);
  SERVER = JSON.parse(SERVER);
  let SERVER_URL = SERVER.VITE_SERVER_URL;
  //console.log(SERVER_URL);

  const getInvoices = async () => {
    try {
      const res = await axios.get(`${SERVER_URL}/invoice`);
      //console.log(res.data);
      setInvoices(res.data);
    } catch (error) {
      // Handle errors
      console.log(`Following error occured from getInvoice method: ${error}`);
    }
  };

  useEffect(() => {
    //console.log("test");
    getInvoices();
  }, []);

  return (
    <section>
      <Navbar />
      <div className="m-2">
        <h2 className="mt-4 mb-2">All Invoices</h2>
        <button
          className="btn btn-primary mt-2 mb-4 btn-sm"
          onClick={() => {
            navigate("/addinvoice");
          }}
        >
          Add New Invoice
        </button>

        <table className="table table-striped table-hover">
          <thead>
            <tr className="table-dark">
              <th scope="col">S#</th>
              <th scope="col">Invoice #</th>
              <th scope="col">Invoice Date</th>
              <th scope="col">Shipper Name</th>
              <th scope="col">Buyer Name</th>
              <th scope="col">Ed</th>
              <th scope="col">Inv</th>
              <th scope="col">Det</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((inv, ind) => {
              return (
                <tr key={ind}>
                  <th scope="row">{ind + 1}</th>
                  <td>{inv.invoice_no}</td>
                  <td>{dayjs(inv.invoice_date).format("DD-MMM-YYYY")}</td>
                  <td>{inv.shipper_name}</td>
                  <td>{inv.buyer_name}</td>
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
                    <Link to={`/detail/${inv.container_qty}/${inv._id}`}>
                      <BiDetail color="red" />
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
