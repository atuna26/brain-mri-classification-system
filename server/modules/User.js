import mongoose, { Schema } from "mongoose";

const UserSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: "doctor" },
    uploadedMRI:  [{ type: Schema.Types.ObjectId, ref: "BrainMRI" }],
    reviews: { type: Array, default: [] },
}, { timestamps: true });

const User = mongoose.model("User", UserSchema);
export default User;

