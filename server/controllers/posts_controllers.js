import Post from "../models/posts.js";

export const createPost = async (req, res) => {
  try {
    const {
      address,
      city,
      price,
      room_type,
      capacity,
      tags,
      description,
      photos_url,
    } = req.body;

    // * No se está validando que el post pertenece a un usuario

    const newPost = new Post({
      address,
      city,
      price,
      room_type,
      capacity,
      tags,
      description,
      photos_url,
    });

    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};
