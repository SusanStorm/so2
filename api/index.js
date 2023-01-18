import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000'})

API.interceptors.request.use((req) => {
    if(localStorage.getItem('Profile')){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('Profile')).token}`
    }
    return req;
})

export const logIn = (authData) => API.post('/user/login', authData);
export const signUp = (authData) => API.post('/user/signup', authData);

export const postQuestion = (questionData) => API.post('/questions/Ask', questionData)
export const getAllQuestions = () => API.get('/questions/get');
export const deleteQuestion = (id) => API.delete(`/questions/delete/${id}`) 
export const voteQuestion = (id, value ) => API.patch(`/questions/vote/${id}`, { value })

export const postAnswer = (id, noOfAnswers, answerBody, userAnswered ) => API.patch(`/answer/post/${id}`, { noOfAnswers, answerBody, userAnswered })
export const deleteAnswer = (id, answerId, noOfAnswers) => API.patch(`/answer/delete/${id}`, { answerId, noOfAnswers})

export const getAllUsers = () => API.get('/user/getAllUsers');
export const updateProfile = (id, updateData) => API.patch(`/user/update/${id}`, updateData)

let data;
const fbReqBtn = (fbReqData) => {
    data = API.patch(`/user/fbReqBtn`, fbReqData)
    return data;
}

const fetchAllFbUsersData = () => {
    data = API.get(`/user/fbReqBtn`)
    return data;
}

const postFbImgApi = (postsImgData) => {
    data = API.post('/socialmedia/postyourpost', postsImgData)
    return data;
}

const fetchAllFbPosts = () => {
    data = API.get(`/socialmedia/posts`)
    return data;
}

const saveUserMessages = (userChatData) => {
    const data = API.patch(`/user/saveuserchats`, userChatData)
    return data;
}

const saveChatbotMessages = (chatData) => {
    const data = API.patch(`/user/savechats`, chatData)
    return data;
}

const voteFbPosts = (voteFbPostData) => {
    const data = API.patch(`/socialmedia/votepost`, voteFbPostData)
    return data;
}

const deletePost = (_id) => {
    const data = API.patch(`/socialmedia/deletepost`, _id)
    return data;
}
const getUpdatedProfile = (id) => {
    data = API.get(`/user/update/${id}`)
    return data;
}
export {
    getUpdatedProfile,fbReqBtn, fetchAllFbUsersData, postFbImgApi, fetchAllFbPosts, voteFbPosts,
    deletePost, saveChatbotMessages, saveUserMessages
}