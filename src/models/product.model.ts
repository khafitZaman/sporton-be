import mongoose, {Schema, Document} from "mongoose";
import { describe } from "node:test";

export interface IProduct extends Document {
  name: string;
  description: string;
  stock: number;
  price: number;
  imageUrl: string;
  category: mongoose.Types.ObjectId;
}

const ProductSchema: Schema = new Schema({
  name: {type: String, require: true},
  description: {type: String, require: true},
  stock: {type: Number, require: true},
  price: {type: Number, require: true},
  imageUrl: {type: String, require: true},
  category: {type: mongoose.Types.ObjectId, ref: "Category", require: true},
}, {timestamps: true});

export default mongoose.model<IProduct>('Product', ProductSchema);