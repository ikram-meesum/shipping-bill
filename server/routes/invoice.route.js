const express = require("express");
const router = express.Router();
const Invoice = require("../modal/invoice.modal");

router.get("/", async (req, res) => {
  try {
    const doc = await Invoice.find({});
    res.json(doc);
  } catch (err) {
    console.log("Error occured from get all invoices", err);
  }
});

router.get("/:id", async (req, res) => {
  const sid = req.params.id;

  try {
    const doc = await Invoice.find({ _id: sid });
    console.log(doc);
    res.json(doc);
  } catch (err) {
    console.log("Error occured from get single invoice", err);
  }
});

router.post("/", async (req, res) => {
  const newInvoice = new Invoice();
  newInvoice.invoice_no = req.body.invoice_no;
  newInvoice.invoice_date = req.body.invoice_date;
  newInvoice.invoice_amount = req.body.invoice_amount;
  newInvoice.contract_no = req.body.contract_no;
  newInvoice.shipper_name = req.body.shipper_name;
  newInvoice.buyer_name = req.body.buyer_name;
  newInvoice.bl_no = req.body.bl_no;
  newInvoice.carrier = req.body.carrier;
  newInvoice.origin = req.body.origin;
  newInvoice.product_name = req.body.product_name;
  newInvoice.port_of_loading = req.body.port_of_loading;
  newInvoice.port_of_destination = req.body.port_of_destination;
  newInvoice.eta = req.body.eta;
  newInvoice.no_of_bales = req.body.no_of_bales;
  newInvoice.devanning_date = req.body.devanning_date;
  newInvoice.devanning_place = req.body.devanning_place;
  newInvoice.inv_gross_weight = req.body.inv_gross_weight;
  newInvoice.inv_tare = req.body.inv_tare;
  newInvoice.inv_net_weight = req.body.inv_net_weight;
  newInvoice.weighing_date = req.body.weighing_date;
  newInvoice.weighing_place = req.body.weighing_place;
  newInvoice.weighing_gross_weight1 = req.body.weighing_gross_weight1;
  newInvoice.weighing_gross_weight2 = req.body.weighing_gross_weight2;
  newInvoice.cargo_condition = req.body.cargo_condition;
  newInvoice.findings = req.body.findings;
  newInvoice.container_qty = req.body.container_qty;

  try {
    const result = await newInvoice.save();
    console.log("Invoice Inserted", result); // result
    res.json({ msg: "Record Inserted", id: result._id });
  } catch (err) {
    console.error("Error occured from post invoices", err);
    res.json({ msg: `Error from post ${err}` });
  }

  ///////////////
  // const invoiceData = new Invoice({
  //   user_name: req.body.user_name,
  //   email: req.body.email,
  //   password: req.body.password,
  // });

  // invoiceData.save((err, item) => {
  //   if (err) {
  //     return err;
  //   }
  //   console.log("User Inserted ", item);
  //   res.json(item);
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  let result = null;

  // try {
  //   result = await User.findByIdAndDelete({ _id: id });
  //   console.log("DELETE RECORDS", result);
  //   res.json(result);
  // } catch (err) {
  //   console.log("Error occured from delete route: ", err);
  // }
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const updatedResult = await Invoice.findByIdAndUpdate(
      { _id: id },
      {
        user_name: req.body.user_name,
        email: req.body.email,
        password: req.body.password,
      }
    );
    console.log("UPDATED: ", updatedResult);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
