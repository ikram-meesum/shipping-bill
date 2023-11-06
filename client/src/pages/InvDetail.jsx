import React, { useState, useEffect } from "react";
import Navbar from "../component/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../component/Footer";
//const dayjs = require('dayjs')
import dayjs from "dayjs";

export default function InvDetail() {
  const [invoices, setInvoices] = useState([]);

  let SERVER = JSON.stringify(import.meta.env, ["VITE_SERVER_URL"]);
  SERVER = JSON.parse(SERVER);
  let SERVER_URL = SERVER.VITE_SERVER_URL;
  //console.log(SERVER_URL);

  const id = useParams();
  const invId = id.id;
  //console.log(invId);
  //console.log(`${SERVER_URL}/invoice/${invId}`);

  const getInvoice = async () => {
    //console.log(id.id);

    try {
      const res = await axios.get(`${SERVER_URL}/invoice/${invId}`);
      console.log(res.data);
      setInvoices(res.data);
    } catch (error) {
      // Handle errors
      console.log(`Following error occured from getInvoice method: ${error}`);
    }
  };

  useEffect(() => {
    //console.log("test");
    getInvoice();
  }, []);

  return (
    <section>
      <Navbar />
      <div className="container">
        <h2 className="mt-4 mb-4">Invoice Details</h2>

        {invoices.map((inv, ind) => {
          return (
            <div className="row" key={ind}>
              <div className="col-md-6">
                <ol className="list-group list-group-numbered">
                  <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Invoice Number</div>
                      {inv.invoice_no}
                    </div>
                  </li>

                  <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Invoice Date</div>
                      {dayjs(inv.invoice_date).format("DD-MMM-YYYY")}
                    </div>
                  </li>

                  <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Contract Number</div>
                      {inv.contract_no}
                    </div>
                  </li>

                  <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Shipper Name</div>
                      {inv.shipper_name}
                    </div>
                  </li>

                  <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Buyer Name</div>
                      {inv.buyer_name}
                    </div>
                  </li>

                  <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Origin</div>
                      {inv.origin}
                    </div>
                  </li>

                  <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Product Name</div>
                      {inv.product_name}
                    </div>
                  </li>

                  <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Port of Loading</div>
                      {inv.port_of_loading}
                    </div>
                  </li>

                  <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Port of Destination</div>
                      {inv.port_of_destination}
                    </div>
                  </li>

                  <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">ETA</div>
                      {inv.eta}
                    </div>
                  </li>

                  <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Number of Bales</div>
                      {inv.no_of_bales}
                    </div>
                  </li>

                  <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Devanning Date</div>
                      {dayjs(inv.devanning_date).format("DD-MMM-YYYY")}
                    </div>
                  </li>

                  <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Devanning Place</div>
                      {inv.devanning_place}
                    </div>
                  </li>
                </ol>
              </div>
              {/* second column */}
              <div className="col-md-6">
                <ol className="list-group list-group-numbered">
                  <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">BL Number</div>
                      {inv.bl_no}
                    </div>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Carrier</div>
                      {inv.carrier}
                    </div>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Invoice Gross Weight</div>
                      {inv.inv_gross_weight}
                    </div>
                  </li>

                  <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Invoice Tare</div>
                      {inv.inv_tare}
                    </div>
                  </li>

                  <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Invoice Net Weight</div>
                      {inv.inv_net_weight}
                    </div>
                  </li>

                  <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Weighing Date</div>
                      {dayjs(inv.weighing_date).format("DD-MMM-YYYY")}
                    </div>
                  </li>

                  <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Weighing Place</div>
                      {inv.weighing_place}
                    </div>
                  </li>

                  <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Weighing Gross Weight-1</div>
                      {inv.weighing_gross_weight1}
                    </div>
                  </li>

                  <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Weighing Gross Weight-2</div>
                      {inv.weighing_gross_weight2}
                    </div>
                  </li>

                  <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Cargo Condition</div>
                      {inv.cargo_condition}
                    </div>
                  </li>

                  <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Finding</div>
                      {inv.findings}
                    </div>
                  </li>

                  <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Container Quantity</div>
                      {inv.container_qty}
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </section>
  );
}
