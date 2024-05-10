import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Today from './pages/Today'
import Developer from './pages/Developer'
import Test from './pages/Test'
import N3 from './pages/N3'
import Gisa from './pages/Gisa'
import N2 from './pages/N2'
import Channel from './pages/Channel'
import Video from './pages/Video'
import Search from './pages/Search'
import Not from './pages/Not'
import Header from './components/section/Header'
import Main from './components/section/Main'
import Footer from './components/section/Footer'
import Speaking from './pages/Speaking'

const App = () => {
  return (
    <BrowserRouter>
            <Header />
            <Main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path="/today" element={<Today />} />
                    <Route path="/developer" element={<Developer />} />
                    <Route path="/test" element={<Test />} />
                    <Route path="/n3" element={<N3 />} />
                    <Route path="/gisa" element={<Gisa />} />
                    <Route path="/japan" element={<Speaking />} />
                    <Route path="/n2" element={<N2 />} />
                    <Route path='/channel/:channelId' element={<Channel />} />
                    <Route path='/video/:videoId' element={<Video />} />
                    <Route path='/search/:searchId' element={<Search />} />
                    <Route path="*" element={<Not />} />
                </Routes>
            </Main>
            <Footer />
        </BrowserRouter>
  )
}

export default App