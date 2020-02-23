import { Document, Schema, model } from 'mongoose'

export interface UserFrame {
    email: string
    name: string
    password: string
    profile: string
    phone: string
}

interface IUser extends Document {
    email: string
    name: string
    password: string
    profile: string
    phone: string
}

const userSchema = new Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: String,
    profile: String,
    phone: String,
})

const UserModel = model<IUser>('user', userSchema)

export default UserModel