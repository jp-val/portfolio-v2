import mongoose from 'mongoose'

export default interface IProject {
	_id?: mongoose.Types.ObjectId
	user_id: mongoose.Types.ObjectId
	title: string
	link: string
	tags: string[]
	description: string
	content: string
	isPublic: boolean
	uploadDate: Date
	lastUpdate: Date
}