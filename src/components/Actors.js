import React from "react";
import { actors } from "../data";

function Actors() {

  const displayActors = actors.map(actor => {
    return <div key={actor.name}>
      <h1>Name: {actor.name}</h1>
      <ul>
        {actor.movies.map((movie) => (
          <li key={movie}>{movie}</li>
        ))}
      </ul>
    </div>
  })

  return <div>
      <h1>Actors Page</h1>
      {displayActors}
    </div>;
}

export default Actors;
