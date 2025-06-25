import React from 'react'
// import Child from './component/Child'
import Home from './pages/Home'
import About from './pages/About'
import Skill from './pages/Skill'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Counter from './component/Counter'
import Navbar from './component/Navbar'
import { Routes, Route } from 'react-router-dom'
// import State from './hooks/State'
// import Hooks from './pages/Hooks'
// import Effect from './hooks/Effect'
// import Ref from "./hooks/Ref" 
import Todo from './component/Todo' // ✅ Correct if hooks is in the same folder (src)
const App = () => {
  return (
    //     <div>

    //       <Child name="Dharanya" phone="1234567899" dept="IT" />
    //       <Child name="Dharan" phone="1234567899" dept="IT" />
    //       <Home items={f} users={user} />
    //       <Login />
    //       <About />
    //       <Skill />
    //       <Contact />
    //       <Counter />
    //       <Navbar/>
    //     </div>
    <div>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/skill' element={<Skill />} />
        <Route path='/login' element={<Login />} />
        <Route path='/counter' element={<Counter />} />
        {/* <Route path='/hooks' element={<Hooks />} /> */}
        {/* <Route path='/state' element={<State />} /> */}
        {/* <Route path='/effect' element={<Effect />} /> */}
        {/* <Route path='/ref' element={<Ref />} /> */}
        <Route path='/todo' element={<Todo />} />
      </Routes>
    </div>
  )
}
export default App