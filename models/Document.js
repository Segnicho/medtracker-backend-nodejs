import mongoose from "mongoose";

const DocumentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
  },
  desc: {
    type: String,
  },
  userId:{
    type:String
  }
});

export default mongoose.model("Document", DocumentSchema);
