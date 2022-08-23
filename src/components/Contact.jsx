import React from "react";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

export const Contact = () => {
  const confirmForm = (e) => {
    e.preventDefault();
    Swal.fire({
      position: "center",
      icon: "success",
      title: "The message was sent correctly.",
      showConfirmButton: false,
      timer: 2000,
    });
  };

  return (
    <div className="contact">
      {/* TITLE */}
      <Helmet>
        <title>Contact | Traveler Web</title>
      </Helmet>
      <div>
        <p>Please send us your opinion about our platform.</p>
        <form onSubmit={(e) => confirmForm(e)}>
          <div className="mb-3">
            <label htmlFor="namr" className="form-label">
              Name:
            </label>
            <input type="text" className="form-control" id="name" required></input>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address:
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              required
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Example textarea:
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
