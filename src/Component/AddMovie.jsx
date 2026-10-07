import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Data from "../Data/data";
function AddMovie({ movieList, setMovieList }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMovie = {
      id: Date.now(),
      title: title,
      description: description,
      rating: Number(rating),
    };

    setMovieList([...movieList, newMovie]);

    navigate("/");
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4 mx-auto" style={{ maxWidth: "600px" }}>
        <h2 className="text-center text-warning mb-4">Add New Movie</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Movie Title:</label>

            <input
              type="text"
              className="form-control text-info bg-dark text-white"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter movie title"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Description:</label>

            <textarea
              className="form-control text-info bg-dark text-white"
              rows="2"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter movie description"
              required
            ></textarea>
          </div>

          <div className="mb-3">
            <label className="form-label ">Rating:</label>

            <input
              type="number"
              className="form-control text-info bg-dark text-white"
              min="1"
              max="5"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              placeholder="Enter rating 1-5"
              required
            />
          </div>

          <button className="btn btn-warning w-100">Add Movie</button>
        </form>
      </div>
    </div>
  );
}

export default AddMovie;
