const router = require("express").Router();
const auth = require("../middlewares/auth");
const role = require("../middlewares/role");
const {
  createShift,
  getShifts,
  deleteShift
} = require("../controllers/shiftController");

router.post("/shifts", auth, role("admin"), createShift);
router.get("/shifts", auth, getShifts);
router.delete("/shift/:id", auth, role("admin"), deleteShift);

module.exports = router;
