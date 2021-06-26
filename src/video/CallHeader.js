import React from "react";
import "./style.css";
import "./assests/bootstrap.min.css";
import patient from "./assests/img/patients/patient1.jpg";

function CallHeader() {
  return (
    <div class="fixed-header">
      <div class="navbar">
        <div class="user-details">
          <div class="float-left user-img">
            <a
              class="avatar avatar-sm mr-2"
              href="patient-profile.html"
              title="Charlene Reed"
            >
              <img
                src={patient}
                alt="User Image"
                class="rounded-circle"
              />
              <span class="status online"></span>
            </a>
          </div>
          <div class="user-info float-left">
            <a href="patient-profile.html">
              <span>Charlene Reed</span>
            </a>
            <span class="last-seen">Online</span>
          </div>
        </div>
        <ul class="nav float-right custom-menu">
          <li class="nav-item dropdown dropdown-action">
            <a
              href="#"
              class="nav-link dropdown-toggle"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="fa fa-cog"></i>
            </a>
            <div class="dropdown-menu dropdown-menu-right">
              <a href="" class="dropdown-item">
                Settings
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CallHeader;
