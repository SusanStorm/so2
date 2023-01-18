import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './Pages/Home/Home'
import Auth from './Pages/Auth/Auth'
import Questions from './Pages/Questions/Questions'
import AskQuestion from './Pages/AskQuestion/AskQuestion'
import DisplayQuestion from './Pages/Questions/DisplayQuestion'
import Tags from './Pages/Tags/Tags'
import Users from './Pages/Users/Users'
import UserProfile from './Pages/UserProfile/UserProfile'
import Chatbot from './components/Cbot/Cbot'
import Fb from './components/media/fb feature/Fb'
import FbPostForm from './components/media/fb feature/fb posts scroller/FbPostForm'
import FbCurrUserPosts from './components/media/fb feature/fb posts scroller/FbCurrUserPosts'
// import CurrUserPosts from './components/media/fb feature/'

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/Auth' element={<Auth />}/>
            <Route path='/AskQuestion' element={<AskQuestion />}/>
            <Route path='/Questions' element={<Questions />}/>
            <Route path='/Questions/:id' element={<DisplayQuestion />}/>
            <Route path='/Tags' element={<Tags />} />
            <Route path='/Users' element={<Users />} />
            <Route path='/chatbot' element={<Chatbot />} />
            <Route path={'/fbclone'} element={<Fb />} />
      <Route path={'/fbclone/:id'} element={<FbCurrUserPosts />} />
      <Route path={'/fbpostform'} element={<FbPostForm />} />
      {/* <Route path={'/chatbot'} element={<ChatRobt />} /> */}
      <Route path={'*'} element={<div style={{ height: "80vh", display: "flex", justifyContent: "center", alignItems: "center" }}><h3> The Page You Search Doesn't Exist In Route</h3></div>} />
    </Routes>
    )
}

export default AllRoutes
