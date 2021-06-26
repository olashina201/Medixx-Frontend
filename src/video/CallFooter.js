import React from "react";
import "./style.css";
import "./assests/bootstrap.min.css";

function CallFooter() {
  return (
    <div class="call-footer">
      <div class="call-icons">
        <span class="call-duration">00:59</span>
        <ul class="call-items">
          <li class="call-item">
            <a
              href="#"
              title="Enable Video"
              data-placement="top"
              data-toggle="tooltip"
            >
              <i class="fas fa-video camera"></i>
            </a>
          </li>
          <li class="call-item">
            <a
              href="#"
              title="Mute Audio"
              data-placement="top"
              data-toggle="tooltip"
            >
              <i class="fa fa-microphone microphone"></i>
            </a>
          </li>
          <li class="call-item">
            <a
              href="#"
              title="Add User"
              data-placement="top"
              data-toggle="tooltip"
            >
              <i class="fa fa-user-plus"></i>
            </a>
          </li>
          <li class="call-item">
            <a
              href="#"
              title="Full Screen"
              data-placement="top"
              data-toggle="tooltip"
            >
              <i class="fas fa-arrows-alt-v full-screen"></i>
            </a>
          </li>
        </ul>
        <div class="end-call">
          <a href="">
            <i class="material-icons">call_end</i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default CallFooter;
