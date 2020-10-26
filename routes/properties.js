const express = require("express");
const router = express.Router();

const Properties = require("../models/Properties");

router.get("/", async (req, res) => {
  try {
    const properties = await Properties.find();
    if (!properties) throw Error("No properties found");

    res.status(200).json(properties);
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const properties = await Properties.findById(req.params.id);
    if (!properties) throw Error("No properties found");

    res.status(200).json(properties);
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

router.get("/security_code/:security_code", async (req, res) => {
  try {
    const properties = await Properties.findOne({security_code: req.params.security_code});
    if (!properties) throw Error("No properties found");
    res.status(200).json(properties);
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const property = await Properties.findByIdAndDelete(req.params.id);
    if (!property) throw Error("Something went wrong while deleting property");

    res.status(200).json({ success: true });
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

router.post("/", async (req, res) => {
  try {
    const newProperty = new Properties(req.body);
    const property = await newProperty.save();
    if (!property) throw Error("Something went wrong while saving property");

    res.status(201).json(property);
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const property = await Properties.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (!property) throw Error("Something went wrong while updating property");

    res.status(200).json({ success: true });
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

module.exports = router;
