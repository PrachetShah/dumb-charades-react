import React from "react";
import { FaGithub, FaGlobe, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div class="mt-2" style={{ width: "100%" }}>
        <footer class=" text-center text-white">
          <div class="container pt-2">
            <section class="mt-4">
              <span className="fs-3 px-2">
                <a
                  href="https://github.com/PrachetShah"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white"
                >
                  <FaGithub />
                </a>
              </span>
              <span className="fs-3 px-2">
                <a
                  href="https://www.linkedin.com/in/prachet-shah/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white"
                >
                  <FaLinkedin />
                </a>
              </span>
              <span className="fs-3 px-2">
                <a
                  href="https://twitter.com/prachet_shah"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white"
                >
                  <FaTwitter />
                </a>
              </span>
              <span className="fs-3 px-2">
                <a
                  href="https://prachetshah.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white"
                >
                  <FaGlobe />
                </a>
              </span>
            </section>
          </div>

          <h5 class="text-center p-3">Made by Prachet Shah {"<"}3</h5>
        </footer>
      </div>
    </>
  );
}

export default Footer;
