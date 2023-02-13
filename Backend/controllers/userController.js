// const Imagemoudle = require('../models/ImageModule')

// const creatImage = async(req, res) =>{
//     const { name, password, image,timestamps, info} = req.body;   
//     const newImage = await Imagemoudle.create({ name, password, image,timestamps, info})
    
//     res.json(newImage)
// }
//     const getAllImages = async(req, res) =>{
//         const allImages = await Imagemoudle.find()
//         res.json(allImages)
//     }
//     const getSingleImage = async(req, res) =>{
//         const {photoId} = req.params;
//         const singleUser = await Imagemoudle.findById(photoId);
//         res.json(singleUser);

//     }
//     const updateImage = async(req, res) =>{
//         const {photoId} = req.params;
//         const {name, password, image,timestamps, info} = req.body;
//         const updateAPhoto = await Imagemoudle.findByIdAndUpdate(photoId, 
//             {
//                 name, password, image,timestamps, info
//         },      
//         {new: true}
//         );
//         res.json(updateAPhoto)
//     }
//     const deleteImage = async(req, res) =>{
//         const {photoId} = req.params;
//         const deleteAPhoto = await Imagemoudle.findByIdAndDelete(photoId);
//         res.json(deleteAPhoto);
//     }


// module.exports ={
//     creatImage,
//     getAllImages,
//     updateImage,
//     getSingleImage,
//     deleteImage,
// }