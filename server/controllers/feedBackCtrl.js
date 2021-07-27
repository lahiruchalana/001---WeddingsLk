import FeedBack from '../models/feedBackModel.js'
// import Products from '../models/productModel.js'


export const getFeedBacks = async(req, res) =>{
    try {
        const feedBacks = await FeedBack.find()
        res.json(feedBacks)
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
};

export const createFeedBack = async (req, res) =>{
    try {
        // if user have role = 1 ---> admin
        // only admin can create , delete and update category
        const {vendor, couple_name, feedback, images} = req.body;
        if(!images) return res.status(400).json({msg: "No image upload"})


        const newFeedBack = new FeedBack({vendor, couple_name, feedback, images})

        await newFeedBack.save()
        res.json({msg: "Posted Your Feedback. Share Your Other Feedbacks"})
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
};

export const deleteFeedBack = async(req, res) =>{
    try {
        await FeedBack.findByIdAndDelete(req.params.id)
        res.json({msg: "Deleted Your Feedback"})
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
};

// export const updateFeedBack = async(req, res) =>{
//     try {
//         const {vendor, couple_name, feedback, images} = req.body;
//         await FeedBack.findOneAndUpdate({_id: req.params.id}, {vendor, couple_name, feedback, images})

//         res.json({msg: "Updated the Feedback"})
//     } catch (err) {
//         return res.status(500).json({msg: err.message})
//     }

// };
