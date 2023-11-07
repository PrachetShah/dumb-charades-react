import React, { useEffect, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "./GameForm.css";
import axios from "axios";

function GameForm() {
  let defaultVal = { English: false, Hindi: false };

  const [year, setYear] = useState(0);
  const [movie, setMovie] = useState(null);

  const handleYear = (e) => {
    setYear(e.target.value);
    console.log(year);
  };

  const handleChange = (e) => {
    console.log("Handle Change Called");
    // console.log(e.target.checked);
    let lang = e.target.value;
    // if (e.target.checked) {
    //   console.log(e.target);
    //   console.log(lang);
    // }
    defaultVal[lang] = !defaultVal[lang];
  };

  const callApi = (url) => {
    let num, movieNum;
    var headers = {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZTc2ZmQxODc2OTcwYTk1YjE0NWUxOGY4M2U4ZjIyMyIsInN1YiI6IjYxMjcwOWNhMTk0MTg2MDA4YzY4NTc0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PNA5PI8Xo_yfemAzq_uK4GPSAWe7m4vBIukZsmRoVbo",
    };
    axios
      .get(url, { headers })
      .then((res) => {
        // console.log(res);
        // console.log(res.data);
        num = res.data["results"].length;
        movieNum = 1 + Math.floor(Math.random() * num);
        console.log("Movie Num: ", movieNum);

        let result = res.data["results"][movieNum];
        console.log(result);
        return result;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let mapping = { English: "en-US", Hindi: "hi-IN" };
    console.log("Handle Submit Called");

    let language = "";
    if (defaultVal["English"] && defaultVal["Hindi"]) {
      language = "en-US%2Chi-IN";
    } else if (!defaultVal["English"] && defaultVal["Hindi"]) {
      language = "hi-IN";
    } else {
      language = "en-US";
    }

    let page = 1 + Math.floor(Math.random() * 15);
    if (page == 5) {
      page = 4;
    }
    console.log(page);
    console.log(language);

    let url = `https://api.themoviedb.org/3/discover/movie?include_video=false&language=${language}&page=${page}&sort_by=popularity.desc`;

    let num, movieNum;
    var headers = {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZTc2ZmQxODc2OTcwYTk1YjE0NWUxOGY4M2U4ZjIyMyIsInN1YiI6IjYxMjcwOWNhMTk0MTg2MDA4YzY4NTc0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PNA5PI8Xo_yfemAzq_uK4GPSAWe7m4vBIukZsmRoVbo",
    };
    axios
      .get(url, { headers })
      .then((res) => {
        // console.log(res);
        console.log(res.data);
        num = res.data["results"].length;
        movieNum = 1 + Math.floor(Math.random() * num - 1);
        console.log("Movie Num: ", movieNum);

        let result = res.data["results"][movieNum];
        console.log(result);
        setMovie(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {}, [movie]);

  const type = "checkbox";

  return (
    <div className="d-flex align-items-center justify-content-center">
      <Form className="pt-5">
        <Row className="bg-body-tertiary p-4">
          <Col>
            <h5 className="pe-2">Enter Year:</h5>
          </Col>
          <Col>
            <Form.Control placeholder="Optional" onChange={handleYear} />
          </Col>
        </Row>

        <Row className="bg-body-tertiary mt-4 p-4 fs-5">
          <h5 className="mt-3">Enter Language: </h5>
          {["English", "Hindi"].map((lang) => (
            <div key={`default-${lang}`} className="mb-1 pt-2" required>
              <Form.Check // prettier-ignore
                type={type}
                id={`default-${lang}`}
                label={lang}
                value={lang}
                onChange={handleChange}
              />
            </div>
          ))}
        </Row>

        <Row>
          <Button type="submit" className="mt-4" onClick={handleSubmit}>
            Generate a Movie
          </Button>
        </Row>
      </Form>

      {movie ? <h2>{movie["title"]}</h2> : ""}
    </div>
  );
}

export default GameForm;
