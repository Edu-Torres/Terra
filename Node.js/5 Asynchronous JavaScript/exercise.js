doThings();

async function doThings() {
  try {
    const customer = await getCustomer(1);
    console.log("Customer: ", customer);
    if (customer.isGold) {
      const movies = await getTopMovies();
      console.log("Movies: ", movies);
      await sendEmail(customer.email, movies);
    }
  } catch (err) {
    console.log(err);
  }
}

function getCustomer(id) {
  console.log("Fetching customer data...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: "Mosh Hamedani",
        isGold: true,
        email: "email",
      });
    }, 4000);
  });
}

function getTopMovies() {
  console.log("Fetching movies...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["movie1", "movie2"]);
    }, 4000);
  });
}

function sendEmail(email, movies) {
  console.log("Sending email...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("Email sent"));
    }, 4000);
  });
}
