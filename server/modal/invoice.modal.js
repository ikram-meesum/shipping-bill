const mongoose = require("mongoose");

let invoiceSchema = new mongoose.Schema(
  {
    invoice_no: { type: String, required: true, unique: true },
    invoice_date: { type: Date, required: true },
    // invoice_amount: { type: Number, required: true },
    contract_no: { type: String },
    shipper_name: { type: String },
    buyer_name: { type: String },
    bl_no: { type: String },
    carrier: { type: String },
    origin: { type: String },
    product_name: { type: String },
    port_of_loading: { type: String },
    port_of_destination: { type: String },
    eta: { type: String },
    no_of_bales: { type: String },
    devanning_date: { type: Date },
    devanning_place: { type: String },
    inv_gross_weight: { type: Number },
    inv_tare: { type: String },
    inv_net_weight: { type: Number },
    weighing_date: { type: Date },
    weighing_place: { type: String },
    weighing_gross_weight1: { type: Number },
    weighing_gross_weight2: { type: Number },
    cargo_condition: { type: String },
    findings: { type: String },
    container_qty: { type: Number, required: true },
    //invoice_amount: {type: Number, required: true},
    //invoice_amount: {type: Number, required: true},
    //invoice_amount: {type: Number, required: true},
  },
  { timestamps: true }
);

let Invoice = mongoose.model("invoice", invoiceSchema);

module.exports = Invoice;
