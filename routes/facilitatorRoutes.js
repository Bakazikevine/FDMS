import express from "express"
import facilitatorController from "../controller/facilitatorController.js"
const route = express.Router();

route.post("/facilitator/create",facilitatorController.createNewFacilitator);
route.get("/facilitator/retrieve",facilitatorController.getallfacilitators);
route.get("/facilitator/retrieveById/:id",facilitatorController.getallfacilitatorsById);
route.get("/facilitator/retrieveByEmail/:email",facilitatorController.getallfacilitatorsByEmail);
route.patch("/facilitator/update/:id",facilitatorController.updateFacilitator);
route.delete("/facilitator/delete/:id",facilitatorController.deleteFacilitator);

export default route