import React from 'react';
import Child from './components/Child.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Skill from './pages/Skill.jsx';
import Login from './pages/Login.jsx'; // ✅ Corrected import path
import Counter from './components/Counter.jsx'; // ✅ Corrected import path

const App = () => {
  var frds = ["Gowrii", "Durga", "Booma", "Karthik", "Vijay", "Ravi", "Suresh"];
  var user = { username: "Gowri", userpassword: "Gowri" };

  return (
    <div>
      {/* Render Child components */}
      <Child name="Gowri" phno="1234567890" Dept="IT" />
      <Child name="John" phno="0987654321" Dept="HR" />

      {/* Render Home with props */}
      <Home items={frds} users={user} />

      {/* Render other pages */}
      <About />
      <Contact />
      <Skill />

      {/* Render Login component */}
      <Login />
      <Counter />
    </div>
  );
};

export default App;
