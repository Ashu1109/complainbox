import mongoose from "mongoose";
const complainSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
    },
    title: {
      type: String,
      required: true,
    },
    complain: {
      type: String,
      required: true,
    },
    catogery: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "Active",
    },
    image: {
      public_id: {
        type: String,
        default: null,
      },
      url: {
        type: String,
        default: null,
      },
    },
  },
  { timestamps: true }
);

const Complain =
  mongoose.models.complains || mongoose.model("complains", complainSchema);
export default Complain;
