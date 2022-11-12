import mongoose from 'mongoose'

export default interface IProfessor {
	_id?: mongoose.Types.ObjectId
	name: string
	elo_rating: number
	wins: number
	losses: number
	isActive: boolean
	startDate: Date
}