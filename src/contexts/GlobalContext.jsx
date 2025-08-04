import { createContext, useState, useEffect, useContext } from "react";

const GlobalContext = createContext()

function GlobalProvider({ children }) {

    const apiUrl = 'http://localhost:3020/api/movies'
    const [movieList, setMovieList] = useState(null)

    useEffect(() => {
        fetch(apiUrl)
            .then(res => res.json())
            .then(data => {
                setMovieList(data)
            })
    }, [])

    console.log(movieList);
    return (
        <GlobalContext.Provider value={{
            movieList,
            setMovieList
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

function useGlobalContext() {
    return useContext(GlobalContext)
}

export { GlobalProvider, useGlobalContext }