import { Schema, models, model, Model } from "mongoose";

export type CategoryProps = {
    _id?: string;
    title: string;
    img: string;
};

const CategorySchema = new Schema<CategoryProps>({
    title: {
        type: String,
        required: [true, "Please provide category name"],
    },
    img: {
        type: String,
        required: [true, "Please provide category img link"],
        default: "https://www.jkhfindia.org/files/noimageavailable.png"
    },
});

const Category: Model<CategoryProps> =
    models.Category || model("Category", CategorySchema);

export default Category;