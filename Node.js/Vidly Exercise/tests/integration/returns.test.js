// Test Driven Design

// POST /api/returns {customerId, movieId}

// Return 401 if client is not logged in
// Return 400 if customerId is not provided
// Return 400 if movieId is not provided
// Return 404 if no retnal found for this customer/movie
// Return 400 if rental already processed
// Return 200 if valid request
// Set the return date
// Calculate the rental fee
// Increase the stock of movie
// Return the rental as reesponse
const { Rental } = require("../../models/rental");
const mongoose = require("mongoose");
const request = require("supertest");
const { User } = require("../../models/user");
const moment = require('moment'); // library to play with dates
const { Movie } = require("../../models/movie");

describe("/api/returns", () => {
  let server;
  let customerId;
  let movieId;
  let movie
  let rental;
  let token;

  async function exec() {
    return await request(server)
      .post("/api/returns")
      .set("x-auth-token", token)
      .send({ customerId, movieId });
  }

  beforeEach(async () => {
    server = require("../../index");

    customerId = mongoose.Types.ObjectId();
    movieId = mongoose.Types.ObjectId();
    token = new User().generateAuthToken();

    movie = new Movie({
      _id: movieId,
      title: '12345',
      dailyRentalRate: 2,
      genre: { name: "12345" },
      numberInStock: 10
    });
    await movie.save();

    rental = new Rental({
      customer: {
        _id: customerId,
        name: "12345",
        phone: "12345",
      },
      movie: {
        _id: movieId,
        title: "12345",
        dailyRentalRate: 2,
      },
    });
    await rental.save();
  });

  afterEach(async () => {
    await Rental.remove({}); // Removes all documents in the Genre collection
    await server.close();
    await Movie.remove({});
  });

  it("should return 401 if client is not logged in", async () => {
    token = "";

    const res = await exec();

    expect(res.status).toBe(401);
  });

  it("should return 400 if customerId is not provided", async () => {
    customerId = "";

    const res = await exec();

    expect(res.status).toBe(400);
  });

  it("should return 400 if movieId is not provided", async () => {
    movieId = "";

    const res = await exec();

    expect(res.status).toBe(400);
  });

  it("should return 404 if no rental found for this customer/movie", async () => {
    await Rental.remove({});

    const res = await exec();

    expect(res.status).toBe(404);
  });

  it("should return 400 if rental already processed", async () => {
    rental.dateReturned = new Date();
    await rental.save();

    const res = await exec();

    expect(res.status).toBe(400);
  });

  it("should return 200 if valid request", async () => {
    const res = await exec();

    expect(res.status).toBe(200);
  });

  it("should set the return date", async () => {
    const res = await exec();

    const rentalInDB = await Rental.findById(rental.id);
    // Can't use rental directly since it is modified somewhere else

    const diffInTime = new Date() - rentalInDB.dateReturned;
    expect(diffInTime).toBeLessThan(10 * 1000);
  });

  it("should set the rental fee", async () => {
    rental.dateOut = moment().add(-7, 'days').toDate(); // now minus 7 days
    await rental.save();

    const res = await exec();

    const rentalInDB = await Rental.findById(rental.id);
    expect(rentalInDB.rentalFee).toBe(14);
  });

  it("should increase the stock of movie", async () => {
    const res = await exec();

    const movieInDB = await Movie.findById(movieId);
    expect(movieInDB.numberInStock).toBe(11);
  });

  it("should return the rental as response", async () => {
    const res = await exec();
    const rentalInDB = await Rental.findById(rental._id)

    // expect(res.body).toMatchObject(rentalInDB);
    // The date returned in the body is a string so dates don't match
    expect(res.body).toHaveProperty('dateOut');
    expect(res.body).toHaveProperty('dateReturned');
    expect(res.body).toHaveProperty('rentalFee');
    expect(res.body).toHaveProperty('customer');
    expect(res.body).toHaveProperty('movie');

    expect(Object.keys(res.body)).toEqual(
      expect.arrayContaining(['dateOut', 'dateReturned', 'rentalFee', 'customer', 'movie'])
    )
  });
});
