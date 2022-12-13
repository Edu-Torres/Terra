const express = require("express");
const router = express.Router();
const { Movie } = require('../models/movie');
const { Customer } = require('../models/customer');
const { Rental, validate } = require("../models/rental");

router.get("/", async (req, res) => {
    const rentals = await Rental.find().sort('-dateOut');
    res.send(rentals);
})

router.post("/", async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const customer = await Customer.findById(req.body.customerId);
    if (!customer) return res.status(400).send('Invalid customer.');
    const movie = await Movie.findById(req.body.movieId);
    if (!movie) return res.status(400).send('Invalid movie.');
    if (movie.numberInStock === 0) return res.status(400).send('Movie not in stock.');
    let rental = new Rental({
        movie: {
            _id: movie._id,
            title: movie.title,
            dailyRentalRate: movie.dailyRentalRate
        },
        customer: {
            _id: customer._id,
            name: customer.name,
            phone: customer.phone
        }
    });
    
    rental.save()
        .then((answer) => {
            movie.numberInStock--
            movie.save()
                .then(() => {
                    res.send(answer);
                })
                .catch(res.send)
        })
        .catch(res.send);
})

router.put("/:id", async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const customer = await Customer.findById(req.body.customerId);
    if (!customer) return res.status(400).send('Invalid customer.');
    const movie = await Movie.findById(req.body.movieId);
    if (!movie) return res.status(400).send('Invalid movie.');
    const rental = await Rental.findByIdAndUpdate(req.params.id, {
        movie: {
            _id: movie._id,
            title: movie.title,
            dailyRentalRate: movie.dailyRentalRate
        },
        customer: {
            _id: customer._id,
            name: customer.name,
            phone: customer.phone
        }
    }, {new: true});
    if (!rental) return res.status(404).send("Rental with given id not found");
    res.send(rental);
})

router.delete("/:id", async (req, res) => {
    const rental = await Rental.findByIdAndDelete(req.params.id);
    if (!rental) return res.status(404).send("Rental with given id not found");
    res.send(rental);
})

module.exports = router;
