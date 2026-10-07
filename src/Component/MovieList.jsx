import React from "react";
import { Link } from "react-router-dom";
import Data from "../Data/data";
function MovieList({ movieList }) {
  return (
    <div className="container mt-5">
      <div>
        <h1 className="text-warning text-center">Movie List</h1>

        <table className="table table-dark table-stripe">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Rating</th>
            </tr>
          </thead>

          <tbody>
            {movieList.map((movie) => (
              <tr key={movie.id}>
                <td>
                  <Link
                    to={`/movie/${movie.id}`}
                    className="text-decoration-none text-white"
                  >
                    {movie.title}
                  </Link>
                </td>

                <td>{movie.description}</td>

                <td>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      style={{
                        color: star <= movie.rating ? "gold" : "white",
                        fontSize: "25px",
                        WebkitTextStroke: "1px black",
                      }}
                    >
                      ★
                    </span>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to="/add-movie" className="btn btn-warning w-50">
          Add Movie
        </Link>
      </div>
    </div>
  );
}

export default MovieList;
