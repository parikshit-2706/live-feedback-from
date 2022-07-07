import Form from "./Form";
import "./styles.css";

import { useState } from "react";

export default function App() {
  const [feedback, setFeedback] = useState([
    {
      alias: "",
      email: "",
      feedback: ""
    }
  ]);

  const takeFeedback = (data) => {
    console.log(data);
    setFeedback((oldarray) => [
      ...oldarray,
      {
        alias: data.alias,
        email: data.email,
        feedback: data.feedback
      }
    ]);
  };

  return (
    <div className="App">
      <div className="nav">
        <h1>Welcome to Feedback app...</h1>
        <p>
          Your Feedback help us to improve, write your feedback in the form
          below, give us your suggestions and share your experience.
        </p>
        <p> Thank you in advance. ❤️ from Team Brooklyn </p>
      </div>

      <div className="form--style">
        <Form takeFeedback={takeFeedback} />
        <ol>
          {" "}
          {feedback.length == 0 ? (
            <h3>Feels so empty</h3>
          ) : (
            feedback.map((ele) => {
              return (
                <li>
                  {ele.alias} : {ele.feedback}
                </li>
              );
            })
          )}
        </ol>
      </div>
    </div>
  );
}
