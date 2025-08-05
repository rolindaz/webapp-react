import { GlobalProvider } from "./contexts/GlobalContext"
import DefaultLayout from "./layouts/DefaultLayout"
import ContactsPage from "./pages/ContactsPage"
import HomePage from "./pages/HomePage"
import MoviePage from "./pages/MoviePage"
import { Navigate, BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route Component={DefaultLayout}>
              <Route index Component={HomePage} />
              <Route path="/contact-us" Component={ContactsPage} />
              <Route path="/movies/:id" Component={MoviePage} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  )
}

export default App
