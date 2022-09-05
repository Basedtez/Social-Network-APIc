const router = require("express").Router();
const userRoutes = require("./user-routes");
const thoughtRoutes = require("./Thoughts-routes");

router.use("/users", userRoutes);
router.use("/Thoughts", thoughtRoutes);

module.exports = router;