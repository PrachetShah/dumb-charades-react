import React, { useEffect, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "./GameForm.css";
import axios from "axios";

function GameForm() {
  // let defaultVal = { English: false, Hindi: false };

  const [year, setYear] = useState(0);
  const [movie, setMovie] = useState(null);
  const [radio, setRadio] = useState("English");

  const handleYear = (e) => {
    setYear(e.target.value);
    console.log(year);
  };

  const handleClick = (e) => {
    console.log("Handle Change Called");
    let power = e.target.value;
    let lang = e.target.id;
    // console.log(power, lang);
    if (lang === "Hindi") {
      setRadio("Hindi");
    } else {
      setRadio("English");
    }
    // defaultVal[lang] = !defaultVal[lang];
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let mapping = { English: "en-US", Hindi: "hi-IN" };
    console.log("Handle Submit Called");

    // console.log(radio);

    let language = "English",
      origin = "US";

    if (radio === "English") {
      language = mapping[radio];
      origin = "US";
    } else {
      language = mapping[radio];
      origin = "IN";
    }

    let page = 1 + Math.floor(Math.random() * 15);
    // console.log(page);
    // console.log(language);

    let url = `https://api.themoviedb.org/3/discover/movie?include_video=false&language=${language}&page=${page}&sort_by=popularity.desc&with_origin_country=${origin}`;

    if (year > 1890) {
      console.log(year);
      url = url + `&year=${year}`;
    }

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
        movieNum = 1 + Math.floor(Math.random() * num - 1);
        console.log("Movie Num: ", movieNum);

        let result = res.data["results"][movieNum];
        // console.log(result);

        setMovie(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const type = "checkbox";
  const type = "radio";

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
          <div key={`inline-${type}`} className="mb-1 pt-2 menu">
            <Form.Check
              inline
              label="English"
              name="group1"
              type={type}
              id="English"
              onClick={handleClick}
            />
            <Form.Check
              inline
              label="Hindi"
              name="group1"
              type={type}
              id="Hindi"
              onClick={handleClick}
            />
          </div>
        </Row>

        <Row>
          <Button className="mt-4" onClick={handleSubmit}>
            Generate a Movie
          </Button>
        </Row>
        <Row className="mt-3 pt-2 bg-body-tertiary">
          <Col>{movie ? <h2>{movie["title"]}</h2> : ""}</Col>
        </Row>
      </Form>
    </div>
  );
}

export default GameForm;
