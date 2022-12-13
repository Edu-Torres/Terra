const bcrypt = require('bcrypt');

async function run() {
    const salt = await bcrypt.genSalt(10);
    console.log(salt); // $2b$10$IWh/Q.HUHljQmU6L0/3l8u
    const hashed = await bcrypt.hash('1234', salt);
    console.log(hashed);// $2b$10$IWh/Q.HUHljQmU6L0/3l8ucOVwY.hcv/rMf.vzBpPiG4ErrF95FXy
    // Hash value includes the salt
}
run()