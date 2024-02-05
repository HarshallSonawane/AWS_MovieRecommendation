import { React } from 'react'
import data from "./List.json"

function MovieList(props) {
    
    const filteredData = data.filter((el) => {
        if (props.input === '') {
            return el;
        }
        else {
            return el.text.toLowerCase().includes(props.input)
        }
    })

    return (
        <ul>
            {filteredData.map((item) => (
                <li key={item.movieId}>{item.title}</li>
            ))}
        </ul>
    )
}

export default MovieList