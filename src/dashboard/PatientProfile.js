import React from "react";
import prof from "../assets/images/doctor.png";

function PatientProfile() {
  const profile = JSON.parse(localStorage.getItem("profile"));
  return (
    <div>
      <h1>Welcome {profile?.payload?.firstName}</h1>
      <div className="main-content-container container-fluid px-4">
          <div className="page-header row no-gutters py-4">
            <div className="col-12 col-sm-4 text-center text-sm-left mb-0">
              <span className="text-uppercase page-subtitle">Overview</span>
              <h3 className="page-title">Profile</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="card card-small mb-4 pt-3">
                <div className="card-header border-bottom text-center">
                  <div className="mb-2 mx-auto">
                    <img
                      className="rounded-circle"
                      src={ prof }
                      alt=""
                      width={96}
                      height={96}
                      style={{ objectFit: "cover" }}
                    />{" "}
                  </div>
                  <h4 className="mb-2">{profile?.payload?.firstName}</h4>
                  <button
                    type="button"
                    className="mb-2 btn btn-sm btn-pill btn-outline-primary mr-2"
                  >
                    <i className="material-icons mr-1">cached</i>Analysis
                  </button>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item px-4">
                    <span className="descriptionText">
                      Body Mass Index : {profile?.payload?.weight}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card card-small mb-4">
                <div className="card-header border-bottom">
                  <h6 className="m-0">Account Details</h6>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item p-3">
                    <div className="row">
                      <div className="col">
                        <form>
                          <div className="form-row">
                            <input
                              placeholder="Name"
                              id="feName"
                              label="Name"
                              name="name"
                              divClass="form-group col-md-6"
                              labelHtmlFor="feFirstName"
                              defaultValue={profile?.payload?.firstName}
                              disabled="disabled"
                            />
                            <input
                              placeholder="Email"
                              id="feEmail"
                              type="email"
                              name="email"
                              label="Email"
                              divClass="form-group col-md-6"
                              labelHtmlFor="feEmailAddress"
                              defaultValue={profile?.payload?.email}
                              disabled="disabled"
                            />
                          </div>
                          <div className="form-row">
                            <div className="form-group col-md-4">
                              <label htmlFor="feInputState">Gender</label>
                              <select
                                id="feInputState"
                                defaultValue={"DEFAULT"}
                                className="form-control"
                                name="gender"
                                onChange=""
                              >
                                <option value="DEFAULT">male</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Others</option>
                              </select>
                            </div>
                            <div className="form-group col-md-4">
                              <label htmlFor="feInputBlood">Blood Group</label>
                              <select
                                id="feInputBlood"
                                defaultValue={"DEFAULT"}
                                className="form-control"
                                name="bloodGroup"
                                onChange=""
                              >
                                <option value="DEFAULT">bloodGroup</option>
                                <option>A+</option>
                                <option>A-</option>
                                <option>B+</option>
                                <option>B-</option>
                                <option>AB+</option>
                                <option>AB-</option>
                                <option>O+</option>
                                <option>O-</option>
                              </select>
                            </div>
                          </div>
                          <div className="form-group">
                            <label htmlFor="feInputAddress">Address</label>
                            <input
                              type="text"
                              name="address"
                              className="form-control"
                              id="feInputAddress"
                              defaultValue=""
                              onChange=""
                              placeholder="Exp: House#321 Road 18"
                            />{" "}
                          </div>
                          <div className="form-row">
                            <div className="form-group col-md-12">
                              <label htmlFor="feDescription">
                                Informations
                              </label>
                              <textarea
                                className="form-control"
                                name="description"
                                onChange=""
                                rows={5}
                                value=""
                              />
                            </div>
                          </div>
                          <button
                            className="btn btn-accent"
                            noValidate
                            onClick=""
                          >
                            Update Account
                          </button>
                        </form>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default PatientProfile;
