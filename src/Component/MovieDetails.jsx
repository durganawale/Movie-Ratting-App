import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Data from "../Data/data";

function MovieDetails({ movieList, setMovieList }) {
  const { id } = useParams();

  const navigate = useNavigate();

  const movie = movieList.find((m) => m.id == id);

  const [isEditing, setIsEditing] = useState(false);

  const [title, setTitle] = useState(movie ? movie.title : "");

  const [description, setDescription] = useState(
    movie ? movie.description : "",
  );

  const [rating, setRating] = useState(movie ? movie.rating : "");

  if (!movie) {
    return (
      <div className="text-info bg-dark mt-5 ">
        <h2>Movie Not Found</h2>

        <button className="btn btn-secondary" onClick={() => navigate("/")}>
          Back
        </button>
      </div>
    );
  }

  const handleDelete = () => {
    const updatedMovies = movieList.filter((m) => m.id != id);

    setMovieList(updatedMovies);

    navigate("/");
  };

  const handleEdit = () => {
    const updatedMovies = movieList.map((m) => {
      if (m.id == id) {
        return {
          ...m,
          title: title,
          description: description,
          rating: Number(rating),
        };
      }

      return m;
    });

    setMovieList(updatedMovies);

    setIsEditing(false);
  };

  return (
    <div className="container mt-5">
      <div className="card shadow mx-auto" style={{ maxWidth: "700px" }}>
        <div className="card-body p-4">
          {!isEditing ? (
            <>
              <h1 className="card-title mb-3">{movie.title}</h1>

              <p className="card-text">{movie.description}</p>

              <h5>Rating</h5>

              <div className="mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    style={{
                      color: star <= movie.rating ? "gold" : "white",
                      fontSize: "30px",
                      WebkitTextStroke: "1px black",
                    }}
                  >
                    ★
                  </span>
                ))}
              </div>

              <div className="d-flex gap-2">
                <button
                  className="btn btn-secondary"
                  onClick={() => navigate("/")}
                >
                  Back
                </button>

                <button
                  className="btn btn-warning"
                  onClick={() => setIsEditing(true)}
                >
                  Edit
                </button>

                <button className="btn btn-danger" onClick={handleDelete}>
                  Delete
                </button>
              </div>
            </>
          ) : (
            <>
              <h2 className="mb-4">Edit Movie</h2>

              <div className="mb-3">
                <label className="form-label">Title</label>

                <input
                  className="form-control"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Description</label>

                <textarea
                  className="form-control"
                  rows="4"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>

              <div className="mb-3">
                <label className="form-label">Rating</label>

                <input
                  type="number"
                  min="1"
                  max="5"
                  className="form-control"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                />
              </div>

              <button className="btn btn-success me-2" onClick={handleEdit}>
                Save Changes
              </button>

              <button
                className="btn btn-secondary"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
