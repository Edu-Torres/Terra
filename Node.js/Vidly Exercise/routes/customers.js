const auth = require('../middleware/auth');
const { Customer, validate } = require('../models/customer');  // destructuring
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    const customers = await Customer.find().sort("name");
    res.send(customers);
})

router.post("/", async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    let customer = new Customer({
        name: req.body.name,
        phone: req.body.phone,
        isGold: req.body.isGold
    });
    customer = await customer.save();
    res.send(customer);
})

router.put("/:id", auth, async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const customer = await Customer.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        phone: req.body.phone,
        isGold: req.body.isGold
    });
    if (!customer) return res.status(404).send("Customer with given id not found");
    res.send(customer);
})

router.delete("/:id", auth, async (req, res) => {
    const customer = await Customer.findByIdAndDelete(req.params.id);
    if (!customer) return res.status(404).send("Customer with given id not found");
    res.send(customer);
})

module.exports = router;
