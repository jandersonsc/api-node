import express from 'express'
// import clients from './clients'
import users from './users'
import posts from './posts'
import questions from './questions'
import answers from './answers'
import questionOptions from './questionOptions'

const appRouter = express.Router()

appRouter.use('/users', users)
appRouter.use('/posts', posts)
appRouter.use('/questions', questions)
appRouter.use('/answers', answers)
appRouter.use('/question-options', questionOptions)
// appRouter.use('/clients', clients)

export default appRouter