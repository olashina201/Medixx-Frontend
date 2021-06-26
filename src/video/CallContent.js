import React from "react";
import "./style.css";
import "./assests/bootstrap.min.css";
import image from "./assests/img/video-call.jpg";
import patient from "./assests/img/patients/patient1.jpg";

function CallContent() {
  return (
    <div class="call-contents">
      <div class="call-content-wrap">
        <div class="user-video">
          <img src={image} alt="User Image" />
        </div>
        <div class="my-video">
          <ul>
            <li>
              <img
                src={patient}
                class="img-fluid"
                alt="User Image"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CallContent;
