import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    address: {
      type: String,
      required: [true, "Address is required"],
    },
    city: {
      type: String,
      required: [true, "City is required"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      get: (v) => (v / 100).toFixed(2),
      set: (v) => v * 100,
    },
    room_type: {
      // "Cuarto", "Departamento", "Casa"
      type: String,
      required: [true, "Room type is required"],
    },
    capacity: {
      // número de roomies
      type: Number,
      required: [true, "Capacity is required"],
    },
    tags: {
      // array de características: ["Baño propio", "Elevador", "Parque"]
      type: [String],
      default: [],
    },
    description: {
      type: String,
      default: "",
    },
    photos_url: {
      // arreglo de url de las fotos del post
      type: [String],
      default: [
        "https://images.freeimages.com/images/large-previews/eae/roomz-5-1231926.jpg",
      ],
    },
  },
  {
    timestamps: true,
    toJSON: { getters: true },
  }
);

const Post = mongoose.model("Post", postSchema);

export default Post;
