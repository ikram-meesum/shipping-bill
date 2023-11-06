const express = require("express");
const router = express.Router();
const Detail = require("../modal/inv.detail.modal");

router.get("/", async (req, res) => {
  try {
    const doc = await Detail.find({});
    res.json(doc);
  } catch (err) {
    console.log("Error occured from get all invoice detail", err);
  }
});

router.get("/:id", async (req, res) => {
  const sid = req.params.id;
  try {
    const doc = await Detail.find({ invoice_id: sid });
    console.log(doc);
    res.json(doc);
  } catch (err) {
    console.log("Error occured from get single invoice detail", err);
  }
});

router.post("/", async (req, res) => {
  const newInvoice = new Detail();
  newInvoice.container_no = req.body.container_no;
  newInvoice.seal_invoice = req.body.seal_invoice;
  newInvoice.seal_landed = req.body.seal_landed;
  newInvoice.mark = req.body.mark;
  newInvoice.bale_invoice = req.body.bale_invoice;
  newInvoice.bale_lan = req.body.bale_lan;
  newInvoice.invoice_id = req.body.invoice_id;
  newInvoice.gross_weight_invoice = req.body.gross_weight_invoice;
  newInvoice.gross_weight_lan = req.body.gross_weight_lan;
  newInvoice.commence_date = req.body.commence_date;
  newInvoice.commence_time = req.body.commence_time;
  newInvoice.controller_name = req.body.controller_name;
  newInvoice.remark_06A = req.body.remark_06A;
  newInvoice.remark_09 = req.body.remark_09;
  try {
    const result = await newInvoice.save();
    console.log("Invoice Detail Inserted", result); // result
    return res.json({ id: result._id });
  } catch (err) {
    console.error("Error occured from post invoice detail:", err);
    res.json({ msg: `Error from post ${err}` });
  }
});

module.exports = router;
