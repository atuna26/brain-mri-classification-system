import BrainMRI from '../models/brainMRI.js';

export const writeExpertComment = async (req,res)=>{
    try{
        const {mriId,comment} = req.body;
        const brainMRI = await BrainMRI.findById(mriId);
        brainMRI.expertComment = comment;
        brainMRI.lastUploadDate = Date.now();
        await brainMRI.save();
        res.status(200).json(brainMRI)
    }catch(err){
        res.status(500).json({error:err.message})
    }
}