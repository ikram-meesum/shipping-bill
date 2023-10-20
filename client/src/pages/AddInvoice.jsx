import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import axios from "axios";

//import dotenv from "dotenv";
//import env from "react-dotenv";

export default function AddInvoice() {
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
  console.log(SERVER_URL);

  const onSubmit = async (data) => {
    console.log(data);

    try {
      const response = await axios.post(`${SERVER_URL}/invoice`, {
        invoice_no: data.invNo,
        invoice_date: data.invDate,
        invoice_amount: data.invAmount,
        contract_no: data.contractNo,
        shipper_name: data.shipper,
        buyer_name: data.buyerName,
        bl_no: data.blNo,
        carrier: data.carrier,
        origin: data.origin,
        product_name: data.productName,
        port_of_loading: data.portOfLoading,
        port_of_destination: data.portOfDestination,
        eta: data.eta,
        no_of_bales: data.noOfBales,
        devanning_date: data.devanningDate,
        devanning_place: data.devanningPlace,
        inv_gross_weight: data.invGrossWeight,
        inv_tare: data.invTare,
        inv_net_weight: data.invNetWeight,
        weighing_date: data.weighingDate,
        weighing_place: data.weighingPlace,
        weighing_gross_weight1: data.weighingGrossWeight1,
        weighing_gross_weight2: data.weighingGrossWeight2,
        cargo_condition: data.cargoCondition,
        findings: data.findings,
        container_qty: data.containerQuantity,
      });
      console.log(response.data);
    } catch (error) {
      console.log(`Following error occured form post invoice: ${error}`);
    }
    // if (data.username === "ikram@gmail.com" && data.password === "12345") {
    //   setDisable(true);
    //   setRain(true);

    //   setTimeout(() => {
    //     navigate("/main");
    //   }, 7000);
    // } else {
    //   Swal.fire(
    //     "Authentication Failed",
    //     "Please enter valid username or password",
    //     "error"
    //   );
    // }
  };

  return (
    <main>
      <Navbar />
      <section className="container">
        <h2 className="text-primary mt-3 mb-3">Invoice Infomation</h2>

        <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
          <div className="col-md-4">
            <label htmlFor="inputCity" className="form-label">
              Invoice Number
            </label>
            <input
              {...register("invNo", { required: true })}
              type="text"
              className="form-control"
            />
            {errors.invNo && (
              <p className="text-danger">Invoice number is required.</p>
            )}
          </div>
          <div className="col-md-4">
            <label htmlFor="inputCity" className="form-label">
              Invoice Date
            </label>
            <input
              {...register("invDate", { required: true })}
              type="date"
              className="form-control"
            />
            {errors.invDate && (
              <p className="text-danger">Invoice date is required.</p>
            )}
          </div>

          <div className="col-md-4">
            <label htmlFor="inputZip" className="form-label">
              Invoice Amount
            </label>
            <input
              {...register("invAmount", { required: true })}
              type="number"
              className="form-control"
            />
            {errors.invAmount && (
              <p className="text-danger">Invoice amount is required.</p>
            )}
          </div>
          {/* Second Row */}
          <div className="col-md-4">
            <label htmlFor="inputZip" className="form-label">
              Contract Number
            </label>
            <input
              {...register("contractNo", { required: true })}
              type="text"
              className="form-control"
            />
            {errors.contractNo && (
              <p className="text-danger">Contract number is required.</p>
            )}
          </div>

          <div className="col-md-4">
            <label htmlFor="inputZip" className="form-label">
              Shipper Name
            </label>
            <input
              {...register("shipper", { required: true })}
              type="text"
              className="form-control"
            />
            {errors.shipper && (
              <p className="text-danger">Shipper is required.</p>
            )}
          </div>

          <div className="col-md-4">
            <label htmlFor="inputZip" className="form-label">
              Buyer Name
            </label>
            <input
              {...register("buyerName", { required: true })}
              type="text"
              className="form-control"
            />
            {errors.buyerName && (
              <p className="text-danger">Buyer name is required.</p>
            )}
          </div>
          {/* Third Row */}
          <div className="col-md-4">
            <label htmlFor="inputZip" className="form-label">
              BL Number
            </label>
            <input
              {...register("blNo", { required: true })}
              type="text"
              className="form-control"
            />
            {errors.blNo && (
              <p className="text-danger">BL number is required.</p>
            )}
          </div>

          <div className="col-md-4">
            <label htmlFor="inputZip" className="form-label">
              Carrier
            </label>
            <input
              {...register("carrier", { required: true })}
              type="text"
              className="form-control"
            />
            {errors.carrier && (
              <p className="text-danger">Carrier is required.</p>
            )}
          </div>

          <div className="col-md-4">
            <label htmlFor="inputZip" className="form-label">
              Origion
            </label>
            <input
              {...register("origin", { required: true })}
              type="text"
              className="form-control"
            />
            {errors.origin && (
              <p className="text-danger">Origin is required.</p>
            )}
          </div>

          {/* Forth Line */}

          <div className="col-md-4">
            <label htmlFor="inputZip" className="form-label">
              Product Name
            </label>
            <input
              type="text"
              {...register("productName", { required: true })}
              className="form-control"
            />
            {errors.productName && (
              <p className="text-danger">Product name is required.</p>
            )}
          </div>

          <div className="col-md-4">
            <label htmlFor="inputZip" className="form-label">
              Port of Loading
            </label>
            <input
              {...register("portOfLoading", { required: true })}
              type="text"
              className="form-control"
            />
            {errors.portOfLoading && (
              <p className="text-danger">Port of loading is required.</p>
            )}
          </div>

          <div className="col-md-4">
            <label htmlFor="inputZip" className="form-label">
              Port of Destination
            </label>
            <input
              {...register("portOfDestination", { required: true })}
              type="text"
              className="form-control"
            />
            {errors.portOfDestination && (
              <p className="text-danger">Port of destination is required.</p>
            )}
          </div>

          {/* Fifth Line */}

          <div className="col-md-4">
            <label htmlFor="inputZip" className="form-label">
              ETA
            </label>
            <input
              {...register("eta", { required: true })}
              type="text"
              className="form-control"
            />
            {errors.eta && <p className="text-danger">ETA is required.</p>}
          </div>

          <div className="col-md-4">
            <label htmlFor="inputZip" className="form-label">
              Number of Bales
            </label>
            <input
              {...register("noOfBales", { required: true })}
              type="text"
              className="form-control"
            />
            {errors.noOfBales && (
              <p className="text-danger">Number of bales is required.</p>
            )}
          </div>

          <div className="col-md-4">
            <label htmlFor="inputZip" className="form-label">
              Devanning Date
            </label>
            <input
              {...register("devanningDate", { required: true })}
              type="date"
              className="form-control"
            />
            {errors.devanningDate && (
              <p className="text-danger">Devanning date is required.</p>
            )}
          </div>
          {/* Six Row */}

          <div className="col-md-4">
            <label htmlFor="inputZip" className="form-label">
              Devanning Place
            </label>
            <input
              type="text"
              {...register("devanningPlace", { required: true })}
              className="form-control"
            />
            {errors.devanningPlace && (
              <p className="text-danger">Devanning place is required.</p>
            )}
          </div>

          <div className="col-md-4">
            <label htmlFor="inputZip" className="form-label">
              Invoice Gross Weight
            </label>
            <input
              type="number"
              {...register("invGrossWeight", { required: true })}
              className="form-control"
            />
            {errors.invGrossWeight && (
              <p className="text-danger">Invoice gross weight is required.</p>
            )}
          </div>

          <div className="col-md-4">
            <label htmlFor="inputZip" className="form-label">
              Invoice Tare
            </label>
            <input
              type="text"
              {...register("invTare", { required: true })}
              className="form-control"
            />
            {errors.invTare && (
              <p className="text-danger">Invoice tare is required.</p>
            )}
          </div>
          {/* Seven Row */}

          <div className="col-md-4">
            <label htmlFor="inputZip" className="form-label">
              Invoice Net Weight
            </label>
            <input
              type="number"
              {...register("invNetWeight", { required: true })}
              className="form-control"
            />
            {errors.invNetWeight && (
              <p className="text-danger">Invoice net weight is required.</p>
            )}
          </div>

          <div className="col-md-4">
            <label htmlFor="inputZip" className="form-label">
              Weighing Date
            </label>
            <input
              type="date"
              {...register("weighingDate", { required: true })}
              className="form-control"
            />
            {errors.weighingDate && (
              <p className="text-danger">Weighing date is required.</p>
            )}
          </div>

          <div className="col-md-4">
            <label htmlFor="inputZip" className="form-label">
              Weighing Place
            </label>
            <input
              type="text"
              {...register("weighingPlace", { required: true })}
              className="form-control"
            />
            {errors.weighingPlace && (
              <p className="text-danger">Weighing place is required.</p>
            )}
          </div>
          {/* Eight Row */}

          <div className="col-md-4">
            <label htmlFor="inputZip" className="form-label">
              Weighing Gross Weight-1
            </label>
            <input
              type="number"
              {...register("weighingGrossWeight1", { required: true })}
              className="form-control"
            />
            {errors.weighingGrossWeight1 && (
              <p className="text-danger">Weighing gross weight 1 required.</p>
            )}
          </div>

          <div className="col-md-4">
            <label htmlFor="inputZip" className="form-label">
              Weighing Gross Weight-2
            </label>
            <input
              type="number"
              {...register("weighingGrossWeight2", { required: true })}
              className="form-control"
            />
            {errors.weighingGrossWeight2 && (
              <p className="text-danger">
                Weighing gross weight 2 is required.
              </p>
            )}
          </div>

          <div className="col-md-4">
            <label htmlFor="inputZip" className="form-label">
              Cargo Condition
            </label>
            <input
              type="text"
              {...register("cargoCondition", { required: true })}
              className="form-control"
            />
            {errors.cargoCondition && (
              <p className="text-danger">Cargo condition is required.</p>
            )}
          </div>
          {/* Nine Row */}

          <div className="col-md-4">
            <label htmlFor="inputZip" className="form-label">
              Findings
            </label>
            <input
              type="text"
              {...register("findings", { required: true })}
              className="form-control"
            />
            {errors.findings && (
              <p className="text-danger">Findings is required.</p>
            )}
          </div>

          <div className="col-md-4">
            <label htmlFor="inputZip" className="form-label">
              Container Quantity
            </label>
            <input
              type="number"
              {...register("containerQuantity", { required: true })}
              className="form-control"
            />
            {errors.containerQuantity && (
              <p className="text-danger">Container quantity is required.</p>
            )}
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Insert Record
            </button>
          </div>
        </form>

        <Footer />
      </section>
    </main>
  );
}
