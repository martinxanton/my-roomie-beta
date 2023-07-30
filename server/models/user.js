import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        min: 2,
        max: 50
    },
    lastName: {
        type: String,
        required: true,
        min: 2,
        max: 50
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: [true, 'Email already exists']
    },
    password: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        default: 'https://thinksport.com.au/wp-content/uploads/2020/01/avatar-.jpg'
    }}, 
    {timestamps: true}
);


export default mongoose.model('User', UserSchema); 