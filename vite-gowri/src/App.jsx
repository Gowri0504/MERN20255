import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import React from 'react';
import Child from './components/Child.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Skill from './pages/Skill.jsx';
import Login from './pages/Login.jsx'; // ✅ Corrected import path
import Counter from './components/Counter.jsx'; // ✅ Corrected import path
import State from './Hooks/State.jsx';  
import Hooks from './pages/Hooks.jsx';
import Effect from './Hooks/Effect.jsx'; // ✅ Corrected import path


const App = () => {
   var frds = ["Gowrii", "Durga", "Booma", "Karthik", "Vijay", "Ravi", "Suresh"];
  var user = { username: "Gowri", userpassword: "Gowri" };

  return (
    // <div>
    //   {/* Render Child components */}
    //   <Child name="Gowri" phno="1234567890" Dept="IT" />
    //   <Child name="John" phno="0987654321" Dept="HR" />

    //   {/* Render Home with props */}
    //   <Home items={frds} users={user} />

    //   {/* Render other pages */}
    //   <About />
    //   <Contact />
    //   <Skill />

    //   {/* Render Login component */}
    //   <Login />
    //   <Counter />
    //   <Navbar />
    // </div>

    <div>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home items={frds} users={user} />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/skill' element={<Skill />} />
        <Route path='/login' element={<Login />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/hooks' element={<Hooks />} />
        <Route path='/state' element={<State />} />
        <Route path='/effect' element={<Effect />} />

      </Routes>
    </div>
  );
};

export default App;
