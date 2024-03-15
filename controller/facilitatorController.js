import facilitatorModel from "../models/facilitatorModel.js";

const facilitatorController = {
  createNewFacilitator: async (req, res) => {
    try {
      const newfacilitator = await facilitatorModel.create(req.body);
      res.status(201).json({
        message: "Facilitator Well created",
        facilitator: newfacilitator,
      });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({
        message: "Internal server error",
      });
    }
  },

  getallfacilitators: async (req, res) => {
    try {
      const listfacilitator = await facilitatorModel.find();
      res.status(201).json({
        message: "List of Facilitators",
        facilitator: listfacilitator,
      });
    } catch (err) {
      console.log(err.message);
      res.status(500).json({ message: "Server Error" });
    }
  },

  getallfacilitatorsById: async (req, res) => {
    try {
      const facilitatorById = await facilitatorModel.findById({
        _id: req.params.id,
      });
      if (!facilitatorById) {
        res.status(404).json({
          message: "Facilitator not found",
        });
        res.status(200).json(facilitatorById);
      }
      res.status(201).json({
        message: "Get facilitator",
        facilitator: facilitatorById,
      });
    } catch (err) {
      console.log(err.message);
      res.status(500).json({ message: "Server Error" });
    }
  },

  getallfacilitatorsByEmail: async (req, res) => {
    try {
      const facilitatorByEmail = await facilitatorModel.findOne({
        email: req.params.email,
      });
      if (!facilitatorByEmail) {
        res.status(404).json({
          message: "Facilitator not found",
        });
        res.status(200).json(facilitatorByEmail);
      }
      res.status(201).json({
        message: "Get facilitator",
        facilitator: facilitatorByEmail,
      });
    } catch (err) {
      console.log(err.message);
      res.status(500).json({ message: "Server Error" });
    }
  },

  updateFacilitator: async (req, res) => {
    try {
      const updateFacilitator = await facilitatorModel.findOneAndUpdate(
        { _id: req.params.id },
        {
          fullNames: req.body.fullNames,
          email: req.body.email,
          phone: req.body.phone,
          nationalId: req.body.nationalId,
          courses: req.body.courses,
          role: req.body.role,
        },
        { new: true }
      );

      res.status(201).json({
        message: "facilitator updated",
        facilitator: updateFacilitator,
      });
    } catch (err) {
      console.log(err.message);
      res.status(500).json({ message: "Server Error" });
    }
  },

  deleteFacilitator: async (req, res) => {
    try {
      const deleteFacilitator = await facilitatorModel.deleteOne({
        _id: req.params.id,
      });

      res.status(201).json({
        message: "facilitator deleted",
        facilitator: deleteFacilitator,
      });
    } catch (err) {
      console.log(err.message);
      res.status(500).json({ message: "Server Error" });
    }
  },
};
export default facilitatorController;
