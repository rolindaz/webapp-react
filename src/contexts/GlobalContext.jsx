import { createContext, useState, useEffect, useContext } from "react";

const GlobalContext = createContext()

function GlobalProvider({ children }) {

    const apiUrl = 'http://localhost:3020/api/movies'
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch(apiUrl)
            .then(res => res.json())
            .then(data => {
                setMovies(data)
            })
    }, [])

    console.log(movies);
    return (
        <GlobalContext.Provider value={{
            movies,
            setMovies
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

function useGlobalContext() {
    return useContext(GlobalContext)
}

export { GlobalProvider, useGlobalContext }