import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      get: (v) => (v / 100).toFixed(2),
      set: (v) => v * 100,
    },
    room_type: {
      // "Cuarto", "Departamento", "Casa"
      type: String,
      required: true,
    },
    tags: {
      // array de características: ["Baño propio", "Elevador", "Parque"]
      type: [String],
      default: [],
    },
    description: String,
    capacity: Number, // número de roomies
    photos_url: {
      // arreglo de url de las fotos del post
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
    toJSON: { getters: true },
  }
);

const Post = mongoose.model("Post", postSchema);

export default Post;
