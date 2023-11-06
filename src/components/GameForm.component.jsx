import React from "react";
import { Form, Button } from "react-bootstrap";

function GameForm() {
  const APICall = () => {
    let url =
      "https://api.themoviedb.org/3/discover/movie?include_video=false&language=en-US%2Chi-IN&page=1&sort_by=popularity.desc&with_origin_country=IN";
  };

  const type = "checkbox";

  return (
    <div className="d-flex align-items-center justify-content-center">
      <Form className="pt-5">
        <Form.Group
          style={{ display: "flex" }}
          className="bg-body-tertiary p-4 fs-5"
        >
          <Form.Label htmlFor="disabledTextInput" style={{ width: "5rem" }}>
            Enter Year:
          </Form.Label>
          <Form.Control id="disabledTextInput" placeholder="Optional" />
        </Form.Group>
        <Form.Group className="bg-body-tertiary mt-2 p-4 fs-5">
          <Form.Label className="mt-3">Enter Language: </Form.Label>
          {["English", "Hindi"].map((lang) => (
            <div key={`default-${type}`} className="mb-3">
              <Form.Check // prettier-ignore
                type={type}
                id={`default-${type}`}
                label={lang}
              />
            </div>
          ))}
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default GameForm;
