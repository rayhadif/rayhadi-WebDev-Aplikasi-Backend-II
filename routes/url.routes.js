const express = require("express");
const router = express.Router();
const { urlController } = require("../controllers");
const { urlValidation } = require("../validators");

router.route("/").get(urlController.getUrls);
router.route("/getbyname").get(urlValidation.getUrlByName,urlController.getUrlByName);
router.route("/getbymail&phone").get(urlValidation.getUrlByMailAndPhone,urlController.getUrlByMailAndPhone);
router.route("/updatebyname").patch(urlValidation.patchUrlByName,urlController.patchUrlByName);
router.route("/deletebymail").delete(urlValidation.deleteUrlByMail,urlController.deleteUrlByMail);
router.route("/createpraktikan").post(urlValidation.createpraktikan,urlController.createpraktikan);
router.route("/bulkpraktikan").post(urlValidation.bulkpraktikan,urlController.bulkpraktikan);

module.exports = router;