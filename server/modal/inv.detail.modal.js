const mongoose = require("mongoose");

let detailSchema = new mongoose.Schema(
  {
    container_no: { type: String, required: true },
    seal_invoice: { type: String, required: true },
    seal_landed: { type: String },
    mark: { type: String },
    bale_invoice: { type: String },
    bale_lan: { type: String },
    invoice_id: { type: mongoose.Schema.Types.ObjectId, ref: "invoice" },
    gross_weight_invoice: { type: Number },
    gross_weight_lan: { type: Number },
    commence_date: { type: Date },
    commence_time: { type: String },
    controller_name: { type: String, required: true },
    remark_06A: { type: String },
    remark_09: { type: String },
    //invoice_amount: {type: Number, required: true},
    //invoice_amount: {type: Number, required: true},
  },
  { timestamps: true }
);

let Detail = mongoose.model("detail", detailSchema);

module.exports = Detail;
