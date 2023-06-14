import React from 'react';
import MoviesCard from './MoviesCard';

const MoviesList = ({moviesList}) => {
    
    return (
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
            {moviesList.map((movie,idx) => {
                return (
                    <div key={idx} style={{margin : '5px'}}>
                        <MoviesCard movie={movie}/>
                    </div>
                )
            })}
        </div>
    )
}

export default MoviesList;