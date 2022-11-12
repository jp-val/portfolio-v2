import mongoose from 'mongoose'

export default interface IUser {
	_id?: mongoose.Types.ObjectId
	username: string
	password: string
	articles: mongoose.Types.ObjectId[]
	projects: mongoose.Types.ObjectId[]
	lastLogin: Date
	signupDate: Date
}