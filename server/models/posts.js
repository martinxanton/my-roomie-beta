import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    direccion: {
      type: String,
      required: true,
    },
    ciudad: {
      type: String,
      required: true,
    },
    precio: {
      type: Number,
      get: (v) => (v / 100).toFixed(2),
      set: (v) => v * 100,
    },
    tipo: {
      // "Cuarto", "Departamento", "Casa"
      type: String,
      required: true,
    },
    caracteristicas: {
      // array de tags: ["Baño propio", "Elevador", "Parque"]
      type: [String],
      default: [],
    },
    descripcion: String,
    nro_roomies: Number,
    url_fotos: {
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
