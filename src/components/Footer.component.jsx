import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaGlobe,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      <div class="position-fixed bottom-0 mt-2" style={{ width: "100%" }}>
        <footer class=" text-center text-white">
          <div class="container pt-2">
            <section class="mt-4">
              <span className="fs-3 px-2">
                <FaGithub />
              </span>
              <span className="fs-3 px-2">
                <FaLinkedin />
              </span>
              <span className="fs-3 px-2">
                <FaTwitter />
              </span>
              <span className="fs-3 px-2">
                <FaGlobe />
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
