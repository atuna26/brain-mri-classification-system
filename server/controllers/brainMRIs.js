import User from '../modules/User.js';
import BrainMRI from '../modules/BrainMRI.js';

export const getBrainMRIs = async (req,res)=>{
    try{
        const brainMRIs = await BrainMRI.find();
        res.status(200).json(brainMRIs)
    }catch(err){
        res.status(500).json({error:err.message})
    }
}

export const getBrainMRI = async (req,res)=>{
    try{
        const {id} = req.body;
        const brainMRI = await BrainMRI.findById(id);
        res.status(200).json(brainMRI)
    }catch(err){
        res.status(500).json({error:err.message})
    }
}

export const uploadBrainMRI = async (req, res) => {
    try {
        const { id } = req.params;
        const { files } = req;

        const filePaths = files.map(file => file.path);

        const newBrainMRI = new BrainMRI({
            patientDoctor: id,
            mriImagePaths: filePaths,
            mriResult: "Waiting for AI analysis", 
        });

        await newBrainMRI.save();
        res.status(201).json(newBrainMRI);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const sendToExpert = async (req,res)=>{
    try{
        const {mriId,expertId} = req.body;
        const brainMRI = await BrainMRI.findById(mriId);
        brainMRI.lastUploadDate = Date.now();
        brainMRI.patientExpert = expertId;
        brainMRI.expertStatus = "Sent to expert.";
        await brainMRI.save();
        res.status(200).json(brainMRI)
    }catch(err){
        res.status(500).json({error:err.message})
    }
}
