import React from "react";
import BreadCrumb from "./BreadCrumb";
import profileCard from "./profileCard";
import Submit from "./Submit";
import "./css/bootstrap.min.css";

function AddPrescriptions() {
  return (
    <div>
      <BreadCrumb />

      <div class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
              <profileCard />
            </div>
            <div class="col-md-7 col-lg-8 col-xl-9">
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title mb-0">Add Prescription</h4>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="biller-info">
                        <h4 class="d-block">Dr. Darren Elder</h4>
                        <span class="d-block text-sm text-muted">Dentist</span>
                        <span class="d-block text-sm text-muted">
                          Newyork, United States
                        </span>
                      </div>
                    </div>
                    <div class="col-sm-6 text-sm-right">
                      <div class="billing-info">
                        <h4 class="d-block">1 November 2019</h4>
                        <span class="d-block text-muted">#INV0001</span>
                      </div>
                    </div>
                  </div>

                  <div class="add-more-item text-right">
                    <a href="">
                      <i class="fas fa-plus-circle"></i> Add Item
                    </a>
                  </div>

                  <div class="card card-table">
                    <div class="card-body">
                      <div class="table-responsive">
                        <table class="table table-hover table-center">
                          <thead>
                            <tr>
                              <th style={{ minWidth: "200px" }}>Name</th>
                              <th style={{ minWidth: "100px" }}>Quantity</th>
                              <th style={{ minWidth: "100px" }}>Days</th>
                              <th style={{ minWidth: "100px" }}>Time</th>
                              <th style={{ minWidth: "80px" }}></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <input class="form-control" type="text" />
                              </td>
                              <td>
                                <input class="form-control" type="text" />
                              </td>
                              <td>
                                <input class="form-control" type="text" />
                              </td>
                              <td>
                                <div class="form-check form-check-inline">
                                  <label class="form-check-label">
                                    <input
                                      class="form-check-input"
                                      type="checkbox"
                                    />{" "}
                                    Morning
                                  </label>
                                </div>
                                <div class="form-check form-check-inline">
                                  <label class="form-check-label">
                                    <input
                                      class="form-check-input"
                                      type="checkbox"
                                    />{" "}
                                    Afternoon
                                  </label>
                                </div>
                                <div class="form-check form-check-inline">
                                  <label class="form-check-label">
                                    <input
                                      class="form-check-input"
                                      type="checkbox"
                                    />{" "}
                                    Evening
                                  </label>
                                </div>
                                <div class="form-check form-check-inline">
                                  <label class="form-check-label">
                                    <input
                                      class="form-check-input"
                                      type="checkbox"
                                    />{" "}
                                    Night
                                  </label>
                                </div>
                              </td>
                              <td>
                                <a href="#" class="btn bg-danger-light trash">
                                  <i class="far fa-trash-alt"></i>
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  <Submit />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPrescriptions;
