import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import usersModel from '../models/userModel.js'
import mongoose from 'mongoose'
const fbFrndRequest = async (req, resp) => {

    const { _id, value, userId, userName } = req.body

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return resp.status(404).send("user doesn't exist")
    }
    if (!mongoose.Types.ObjectId.isValid(userId)) {
        return resp.status(404).send("user doesn't exist")
    }

    try {

        let fbReqData = await usersModel.findById(_id)
       
        if (value === "sendFrndRequest") {
            if (!fbReqData?.frequest?.includes(userId)) {
                fbReqData = await usersModel.findByIdAndUpdate(_id, { $addToSet: { "frequest": [{ userId, userName }] } })
                console.log(fbReqData)
                fbReqData = await usersModel.findByIdAndUpdate({ _id: _id }, { $pull: { "crequest": { userId: userId, userName: userName } } })
                resp.status(200).json(fbReqData)
            }
            if (fbReqData?.frequest?.includes(userId)) {
                fbReqData = await usersModel.findByIdAndUpdate({ _id: _id }, { $pull: { "frequest": { userId: userId, userName: userName } } })
                resp.status(200).json(fbReqData)
            }
        }

        if (value === "cancelFrndRequest") {
            if (!fbReqData?.crequest?.includes(userId)) {
                fbReqData = await usersModel.findByIdAndUpdate(_id, { $addToSet: { "crequest": [{ userId, userName }] } })
                fbReqData = await usersModel.findByIdAndUpdate({ _id: _id }, { $pull: { "frequest": { userId: userId, userName: userName } } })
                resp.status(200).json(fbReqData)
            }
        }

        if (value === "acceptFrndRequest") {
            if (!fbReqData?.friends?.includes(userId)) {
                fbReqData = await usersModel.findByIdAndUpdate({ _id: _id }, { $pull: { "frequest": { userId: userId, userName: userName } } })
                fbReqData = await usersModel.findByIdAndUpdate(_id, { $addToSet: { "friends": [{ userId, userName }] } })
                resp.status(200).json(fbReqData)
            }
        }

        if (value === "removeFrndRequest") {
            fbReqData = await usersModel.findByIdAndUpdate({ _id: _id }, { $pull: { "friends": { userId: userId, userName: userName } } })
            resp.status(200).json(fbReqData)
        }
    }

    catch (error) {
        resp.status(404).json({ message: error.message })
    }
}

const saveUserChats = async (req, resp) => {

    const { _id, userName, userId, userEmail, userChats } = req.body

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return resp.status(404).send("user doesn't exist")
    }

    if (!mongoose.Types.ObjectId.isValid(userId)) {
        return resp.status(404).send("user doesn't exist")
    }

    try {
        let saveUsersChat = await usersModel.findById(_id)
        if (userChats !== "") {
            saveUsersChat = await usersModel.findByIdAndUpdate(_id, { $addToSet: { "letsChat": [{ userName, userId, userEmail, userChats }] } })
            saveUsersChat = await usersModel.findByIdAndUpdate(userId, { $addToSet: { "letsChat": [{ userName, userId: _id, userEmail, userChats }] } })
            resp.status(200).json(saveUsersChat)
        }

    } catch (error) {
        resp.status(404).json({ message: error.message })
    }
}


const saveChatbotChats = async (req, resp) => {

    const { _id, message, sepId } = req.body

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return resp.status(404).send("user doesn't exist")
    }

    try {
        let saveChats = await usersModel.findById(_id)
        if (message !== "") {
            saveChats = await usersModel.findByIdAndUpdate(_id, { $addToSet: { "chatBox": [{ message, sepId }] } })
            resp.status(200).json(saveChats)
        }

    } catch (error) {
        resp.status(404).json({ message: error.message })
    }
}

const fetchAllFbUsers = async (req, resp) => {
    try {
        const fetchFbUsersData = await usersModel.find()
        resp.status(200).json(fetchFbUsersData)
    } catch (error) {
        resp.status(404).json({ message: error.message })
    }
}



export { fbFrndRequest, fetchAllFbUsers, saveUserChats, saveChatbotChats }