import React from "react";

function BreadCrumb() {
  return (
    <div class="breadcrumb-bar">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-md-12 col-12">
            <nav aria-label="breadcrumb" class="page-breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="index-2.html">Home</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Add Prescription
                </li>
              </ol>
            </nav>
            <h2 class="breadcrumb-title">Add Prescription</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BreadCrumb;
