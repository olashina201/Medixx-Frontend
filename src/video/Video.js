import React from "react";
import CallHeader from "./CallHeader";
import CallContent from "./CallContent";
import CallFooter from "./CallFooter";
import "./style.css";

function Video() {
  return (
    <div class="main-wrapper">
    <div class="content">
    <div class="container-fluid">
      <div class="call-wrapper">
        <div class="call-main-row">
          <div class="call-main-wrapper">
            <div class="call-view">
              <div class="call-window">
                <CallHeader />
                <CallContent />
                <CallFooter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  );
}

export default Video;
