import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Booking.css";

const Overview = () => {
  const [booking, setBooking] = useState([]);
  const [radio, setRadio] = useState();
  var teleport = useNavigate();
  const { id } = useParams();
  // console.log("x",x);
  // console.log(id);
  console.log();
  const inputHandler = (zeta) => {
    setRadio(zeta.target.value);
  };

  useEffect(() => {
    axios.get(`http://localhost:4000/Hostels?id=${id}`).then((res) => {
      setBooking([...res.data]);
    });
  },[]);
  // console.log(booking)
  return (
    <div>
      <div className="d-flex align-items-center position-sticky top-0 z-3 bg-warning py-2 px-5">
        <button
          onClick={() => {
            teleport("/booking");
          }}
          className="btn btn-primary"
        >
          &#9666;View other options
        </button>
        <p className="display-5 mx-auto text-success">Booking Process</p>
      </div>
      <div style={{marginTop:"20px"}}> 
        {/* <p> Map rating votes photos details about(hostel info) </p> */}
        {booking.map((ov, i) => {
          return (
            <div>
              <div className="card mx-5 p-3">
                <img
                  src={ov.Image}
                  style={{ width: "500px", height: "350px" }}
                  alt={ov.Name}
                />
                <h5 className="">{ov.Name}</h5>
                <label>
                  Area/Locality: &nbsp;
                  <b style={{ fontFamily: "serif" }}>{ov.Area}</b>
                </label>
                <label>
                  Contact: <b style={{ fontFamily: "serif" }}>{ov.Contact}</b>
                </label>
                <label>
                  Room-share:{" "}
                  <span>
                    <b style={{ fontFamily: "serif" }}> (1-6) Persons</b>
                  </span>
                  <br />
                  <div className="mt-2 mb-2">
                    <h6 className="text-center">
                      Single Sharing: {ov.Roomsharing.OneSharing}
                      &nbsp;&nbsp;&nbsp; Double Sharing:{" "}
                      {ov.Roomsharing.TwoSharing}&nbsp;&nbsp;&nbsp; Three
                      Sharing: {ov.Roomsharing.ThreeSharing}&nbsp;&nbsp;&nbsp;
                      Four Sharing: {ov.Roomsharing.FourSharing}
                      &nbsp;&nbsp;&nbsp; Five Sharing:{" "}
                      {ov.Roomsharing.FiveSharing}&nbsp;&nbsp;&nbsp; Six
                      Sharing: {ov.Roomsharing.SixSharing}
                    </h6>
                  </div>{" "}
                </label>

                <label>
                  Facilities: &nbsp;&nbsp;
                  <h6
                    class="badge rounded-pill p-2"
                    style={{ backgroundColor: "cadetblue" }}
                  >
                    {" "}
                    {ov.Facilities[0]}
                  </h6>
                  &nbsp;
                  <h6
                    class="badge rounded-pill p-2"
                    style={{ backgroundColor: "cadetblue" }}
                  >
                    {" "}
                    {ov.Facilities[1]}
                  </h6>
                  &nbsp;
                  <h6
                    class="badge rounded-pill p-2"
                    style={{ backgroundColor: "cadetblue" }}
                  >
                    {" "}
                    {ov.Facilities[2]}
                  </h6>
                  &nbsp;
                  <h6
                    class="badge rounded-pill p-2"
                    style={{ backgroundColor: "cadetblue" }}
                  >
                    {" "}
                    {ov.Facilities[3]}
                  </h6>
                  &nbsp;
                  <h6 class="badge rounded-pill p-2"
                  style={{ backgroundColor: "cadetblue" }}
                  >
                    
                    {" "}
                    {ov.Facilities[4]}
                  </h6>
                  &nbsp;
                  <h6
                    class="badge rounded-pill p-2"
                    style={{ backgroundColor: "cadetblue" }}
                  >
                    {" "}
                    {ov.Facilities[5]}
                  </h6>
                  &nbsp;
                  <h6
                    class="badge rounded-pill p-2"
                    style={{ backgroundColor: "cadetblue" }}
                  >
                    {" "}
                    {ov.Facilities[6]}
                  </h6>
                  &nbsp;
                  <h6
                    class="badge rounded-pill p-2"
                    style={{ backgroundColor: "cadetblue" }}
                  >
                    {" "}
                    {ov.Facilities[7]}
                  </h6>
                  &nbsp;
                  <h6
                    class="badge rounded-pill p-2"
                    style={{ backgroundColor: "cadetblue" }}
                  >
                    {" "}
                    {ov.Facilities[8]}
                  </h6>
                  &nbsp;
                  <h6
                    class="badge rounded-pill p-2"
                    style={{ backgroundColor: "cadetblue" }}
                  >
                    +2
                  </h6>
                </label>

                <label>
                  Available Beds:{" "}
                  <b style={{ fontFamily: "serif" }}>{ov.AvailableBeds}</b>
                </label>
                <label
                  className="fa fa-whatsapp"
                  style={{ fontSize: "18px", color: "green" }}
                >
                  Whatsapp No:{" "}
                  <b style={{ fontFamily: "arial" }}>
                    <span className="badge bg-success">{ov.Contact}</span>
                  </b>
                </label>
                <label>
                  Rating: <b style={{ fontFamily: "serif" }}>{ov.Rating}/5</b>
                </label>
                <label>
                  Votes: <b style={{ fontFamily: "serif" }}>{ov.Votes}</b>
                </label>

                <div className="d-flex flex-wrap">
                  <div className="mt-5 w-50">
                    <label>
                      <h4>Overview</h4>
                    </label>
                    <div>
                      <label className="w-50">
                        Preferred Tenants &nbsp;
                        <h6 style={{ fontFamily: "arial" }}>Anyone</h6>
                      </label>
                      <label className="w-50">
                        Food Provided
                        <button
                          type="button"
                          class="btn btn-light p-1"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-title="Food charges are inclusive in room rent"
                        >
                          &#8520;
                        </button>
                        <h6 style={{ fontFamily: "arial" }}>
                          Breakfast, Lunch, Dinner
                        </h6>
                      </label>
                      <br />
                      <label className="w-50">
                        Minimum Stay Period{" "}
                        <h6 style={{ fontFamily: "arial" }}>None</h6>
                      </label>
                      <label className="w-50">
                        Notice Period{" "}
                        <h6 style={{ fontFamily: "arial" }}>10 Days</h6>
                      </label>
                      <br />
                      <label className="w-50">
                        Security Deposit{" "}
                        <h6 style={{ fontFamily: "arial" }}>&#8377; 1000</h6>
                      </label>
                      <label className="w-50">
                        Building Types{" "}
                        <h6 style={{ fontFamily: "arial" }}>Apartments</h6>
                      </label>
                    </div>
                    <label>
                      <h4>Additional Information</h4>
                    </label>
                    <div>
                      <label className="w-50">
                        Other Services &nbsp;
                        <h6 style={{ fontFamily: "cursive" }}>
                          Cleaning, Laundry, Cook, {ov.Facilities[8]}{" "}
                          {ov.Facilities[9]} {ov.Facilities[10]}
                        </h6>
                      </label>
                      <label className="w-50">
                        One time move in charge
                        <h6 style={{ fontFamily: "arial" }}>&#8377; 3,000</h6>
                      </label>
                      <br />
                      <label className="w-50">
                        Visitors Allowed{" "}
                        <h6 style={{ fontFamily: "arial" }}>No</h6>
                      </label>
                      <label className="w-50">
                        Operational Since{" "}
                        <h6 style={{ fontFamily: "arial" }}>{ov.Since}</h6>
                      </label>
                      <br />
                      <label className="w-50">
                        Complete Address{" "}
                        <h6 style={{ fontFamily: "arial" }}>
                          Teachers Colony, Beside CoolJuice Corner, {ov.Area}
                        </h6>
                      </label>
                      <label className="w-50">
                        PG/Hostel rules{" "}
                        <h6 style={{ fontFamily: "arial" }}>
                          Entry of Opposite gender not allowed, No Smoking,
                          Drinking Alcohol not Allowed
                        </h6>
                      </label>
                    </div>
                  </div>

                  <div className="card mt-5 p-2 w-50 ms-auto">
                    <h6 className="display-6 text-primary">
                      Please Select your room-share type
                    </h6>
                    <br />
                    Single Sharing:
                    <input
                      type="radio"
                      name="amount"
                      value={ov.Roomsharing.OneSharing}
                      onClick={inputHandler}
                      id=""
                    />
                    Two Sharing:{" "}
                    <input
                      type="radio"
                      name="amount"
                      value={ov.Roomsharing.TwoSharing}
                      onClick={inputHandler}
                      id=""
                    />
                    Three Sharing:{" "}
                    <input
                      type="radio"
                      name="amount"
                      value={ov.Roomsharing.ThreeSharing}
                      onClick={inputHandler}
                      id=""
                    />
                    Four Sharing:{" "}
                    <input
                      type="radio"
                      name="amount"
                      value={ov.Roomsharing.FourSharing}
                      onClick={inputHandler}
                      id=""
                    />
                    Five Sharing:{" "}
                    <input
                      type="radio"
                      name="amount"
                      value={ov.Roomsharing.FiveSharing}
                      onClick={inputHandler}
                      id=""
                    />
                    Six Sharing:{" "}
                    <input
                      type="radio"
                      name="amount"
                      value={ov.Roomsharing.SixSharing}
                      onClick={inputHandler}
                      id=""
                    />
                    <h5 className="text-end text-primary">
                      Payable Room Fee: {radio} Rs/-
                    </h5>
                    <i>
                      Advance: 1000/- (Note: 50% Refundable when noticed within
                      tenure period)
                    </i>
                  </div>
                </div>

                <p></p>
                <div className="d-flex justify-content-between mb-2">
                  <i></i>
                </div>
                <div className="d-flex justify-content-center my-3">
                  <button
                    className="btn btn-primary w-25"
                    onClick={() => {
                      teleport(`/Payment/${radio}/${id}/${ov.AvailableBeds}`);
                    }}
                  >
                    Proceed to Payment
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Overview;
