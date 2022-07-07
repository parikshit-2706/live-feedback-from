import React, { useState } from "react";

function Form(props) {
  const [details, setDetails] = useState({
    alias: "",
    email: "",
    feedback: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    props.takeFeedback(details);
  };

  return (
    <form className="feedback-form" onSubmit={handleSubmit}>
      <div className="inner--form">
        <label htmlFor="alias"> Alias : </label>
        <input
          type="text"
          name="alias"
          value={details.alias}
          onChange={(e) => {
            setDetails({ ...details, alias: e.target.value });
          }}
        />
      </div>

      <div className="inner--form">
        <label htmlFor="email"> Email : </label>
        <input
          type="text"
          name="email"
          value={details.email}
          onChange={(e) => {
            setDetails({ ...details, email: e.target.value });
          }}
        />
      </div>

      <div className="inner--form">
        <label htmlFor="alias"> Your Feedback : </label>
        <textarea
          value={details.feedback}
          onChange={(e) => {
            setDetails({ ...details, feedback: e.target.value });
          }}
        >
          {" "}
        </textarea>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
