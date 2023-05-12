import axios from "axios";
import React, { useState } from "react";
import "./Booking.css";
import Login from "./Login";
import { useNavigate } from "react-router-dom";

const Booking = () => {
  const [booking, setBooking] = useState([]);
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("");
  var teleport = useNavigate();

  const searchFilter = (zeta) => {
    setSearch(zeta.target.value);
  };
  const selectFilter = (peta) => {
    setSelect(peta.target.value);
  };

  React.useEffect(()=>{
    axios.get("http://localhost:4000/Hostels").then((res) => {
      setBooking([...res.data]);
    });
  },[]);

  let hostel = booking;
  const filteredSearch = hostel.filter(
    (item) =>
      item.Area.toLowerCase().includes(search.toLowerCase()) ||
      item.Name.toLowerCase().includes(search.toLowerCase())
  );
  const filteredSelect = hostel.filter((item) =>
    item.Area.toLowerCase().includes(select)
  );

  const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
  const appendAlert = (message, type) => {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = [
      `<div class="alert alert-danger alert-dismissible" role="alert">`,
      `   <div>${"You have logged-in successfully!"}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      "</div>",
    ].join("");

    alertPlaceholder.append(wrapper);
  };

  const alertTrigger = document.getElementById("liveAlertBtn");
  if (alertTrigger) {
    alertTrigger.addEventListener("click", () => {
      appendAlert("You have logged-in successfully!", "danger");
    });
  }

  return (
    Login.status===true ? (
      <div className="d-flex flex-wrap justify-content-center">
        <div className="">
          <div id="liveAlertPlaceholder"></div>
          <div className="d-flex flex-wrap bg-warning px-3 py-2 align-items-center position-fixed top-0 w-100">
            <button
              onClick={() => {
                teleport("/");
              }}
              className="btn btn-primary"
            >
              &#9666;Back
            </button>
            <select
              onChange={selectFilter}
              value={select}
              name=""
              htmlFor="search"
              id=""
              className="d-flex mx-auto w-25 form-select"
            >
              <option defaultChecked hidden defaultValue={select}>
                Select Area/Locality
              </option>
              <option id="search" value="kphb">
                Kphb
              </option>
              <option id="search" value="kondapur">
                Kondapur
              </option>
              <option id="search" value="lb nagar">
                LB Nagar
              </option>
              <option id="search" value="madhapur">
                Madhapur
              </option>
              <option id="search" value="raidurg">
                Raidurg
              </option>
              <option id="search" value="miyapur">
                Miyapur
              </option>
              <option id="search" value="manikonda">
                Manikonda
              </option>
              <option id="search" value="bala nagar">
                Bala Nagar
              </option>
              <option id="search" value="paradise">
                Paradise Circle
              </option>
            </select>
            {/* <input type="search" name="" id="" defaultValue='&#128269;Search here' className='d-flex form-control-sm' /> */}
            <form className="d-flex align-items-center" action="">
              <input
                type="text"
                className="form-control-sm"
                placeholder="By hostel name or area"
                name="search"
                value={search}
                onChange={searchFilter}
              />
              <button type="submit" className="">
                <i className="fa fa-search"></i>
              </button>
            </form>
          </div>
          <div style={{marginTop:"54px"}}>
            <div className="d-flex flex-wrap inline-block">
              &nbsp;&nbsp;&nbsp;
              <h4 className="">State: Telangana</h4>
              &nbsp;&nbsp;&nbsp;
              <h4 className="">City: Hyderabad</h4>
            </div>
            <div
              className="d-flex flex-wrap justify-content-evenly mx-3 my-3"
              style={{ rowGap: "30px" }}
            >
              {(filteredSelect || filteredSearch).map((ht) => {
                return (
                  <div className="box border border-warning rounded p-4 bg-warning-subtle">
                    <img
                      src={ht.Image}
                      className="d-flex mx-auto"
                      style={{ width: "100%", height: "150px" }}
                      alt={ht.Name}
                    />
                    <h5 className="d-flex justify-content-center">{ht.Name}</h5>
                    <label>Area/Locality: </label> &nbsp;
                    <b style={{ fontFamily: "serif" }}>{ht.Area}</b>
                    <br />
                    <label>Contact: </label>{" "}
                    <b style={{ fontFamily: "serif" }}>{ht.Contact}</b>
                    <br />
                    <label>Room-share: </label>
                    <span>
                      <b style={{ fontFamily: "serif" }}>
                        {ht.OneSharing} (1-6) Persons
                      </b>
                    </span>
                    <br />
                    <div className="d-flex justify-content-between">
                      <label>
                        Total Beds:{" "}
                        <b style={{ fontFamily: "serif" }}>{ht.NumberOfBeds}</b>
                      </label>
                      <i>
                        <button
                          onClick={() => {
                            teleport(`/Overview/${ht.id}`);
                          }}
                          value={ht.id}
                          id="button"
                          className="btn btn-primary px-3 py-2"
                        >
                          Book&#x25B8;
                        </button>
                      </i>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    ) : <h4 className="d-flex justify-content-center">Please <a href="/login">login</a> to continue with booking</h4>
  );
};

export default Booking;

//<div className='e-card-header'>
//<div className='e-card-content'></div>
// booking.length>1 && booking.map((bk) =>{
//   return(
//     <div className='box mx-3 p-2'>
//     <img src={bk.Image} className="d-flex mx-auto" style={{'width':'280px','height':'150px'}} alt={bk.Name} />
//     <h5 className="d-flex justify-content-center">{bk.Name}</h5>
//    <label>Area/Locality: </label> &nbsp;<b style={{fontFamily:'serif'}}>{bk.Area}</b><br/>
//    <label>Contact: </label> <b style={{fontFamily:'serif'}}>{bk.Contact}</b><br />
//    <label>Room-share: </label><span key={bk.Roomsharing}><b>{bk.OneSharing}</b></span><br />
//    <label>Available Beds: </label> <b style={{fontFamily:'serif'}}>{bk.NumberOfBeds-145}</b>
//    {/* {(bk.Roomsharing)} */}
//   </div>
//   )
// })
