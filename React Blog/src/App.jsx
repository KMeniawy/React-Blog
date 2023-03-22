import { useState } from 'react'



import "./pages/LandingPage"


function App() {

  return (
    //Navbar
    <Routes>
      <Route path='/' element={<LandingPage></LandingPage>}/>
    </Routes>
    //Footer
  )
}

export default App
