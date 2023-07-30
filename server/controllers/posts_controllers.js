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

export const getAllPosts = async (req, res) => {
  try {
    // Se filtran los campos más importantes
    const all_posts = await Post.find().select(
      "city price room_type capacity tags photos_url"
    );
    res.status(200).json(all_posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getPost = async (req, res) => {
  try {
    // Se devuelven todos los campos del post del id
    const { post_id } = req.params;
    const post = await Post.findById(post_id);
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
