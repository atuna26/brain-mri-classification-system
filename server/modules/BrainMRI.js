import mongoose, { Schema } from "mongoose";

const BrainMRISchema = new mongoose.Schema({
    patientName: { type: String, required: true },
    patientAge: { type: Number, required: true },
    patientGender: { type: String, required: true },
    patientDiagnosis: { type: String, required: true },
    patientDoctor: { type:Schema.Types.ObjectId, ref: "User" },
    patientExpert: { type:Schema.Types.ObjectId, ref: "User" },
    expertStatus:{ type: String, default: "Not sent to expert."},
    expertComment: { type: String,},
    mriDate: { type: Date, default: Date.now },
    lastUploadDate: { type: Date, default: Date.now },
    mriImagePaths: [{ type: String, required: true }],
    mriResult: { type: String, required: true },
}, { timestamps: true });

const BrainMRI = mongoose.model("BrainMRI", BrainMRISchema);
export default BrainMRI;