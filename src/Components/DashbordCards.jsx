import React from "react";
import SearchIcon from "../Images/svgs/search.svg";
import Dots from "../Images/svgs/dots.svg";
import Graph from "../Images/svgs/d.svg";
import Donat from "../Images/svgs/donat.svg";

function DashbordCards({ setOpen, open }) {
  return (
    <>
      <div className="main_panel_wrapper pb-4  bg_light_grey w-100 d-flex flex-column">
        {/* top-bar  */}
        <div className="top_bar px-3  bg-white py-2 ">
          <div className="d-flex align-items-center  justify-content-between">
            <div className="d-flex align-items-center search_bar_wrapper">
              <svg
                onClick={() => setOpen(!open)}
                className="togle cursor   "
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.3999 9.59961C2.3999 9.28135 2.52633 8.97613 2.75137 8.75108C2.97642 8.52604 3.28164 8.39961 3.5999 8.39961H15.9695C16.2878 8.39961 16.593 8.52604 16.818 8.75108C17.0431 8.97613 17.1695 9.28135 17.1695 9.59961C17.1695 9.91787 17.0431 10.2231 16.818 10.4481C16.593 10.6732 16.2878 10.7996 15.9695 10.7996H3.5999C3.28164 10.7996 2.97642 10.6732 2.75137 10.4481C2.52633 10.2231 2.3999 9.91787 2.3999 9.59961ZM2.3999 4.79961C2.3999 4.48135 2.52633 4.17612 2.75137 3.95108C2.97642 3.72604 3.28164 3.59961 3.5999 3.59961H20.3999C20.7182 3.59961 21.0234 3.72604 21.2484 3.95108C21.4735 4.17612 21.5999 4.48135 21.5999 4.79961C21.5999 5.11787 21.4735 5.42309 21.2484 5.64814C21.0234 5.87318 20.7182 5.99961 20.3999 5.99961H3.5999C3.28164 5.99961 2.97642 5.87318 2.75137 5.64814C2.52633 5.42309 2.3999 5.11787 2.3999 4.79961ZM2.3999 14.3996C2.3999 14.0814 2.52633 13.7761 2.75137 13.5511C2.97642 13.326 3.28164 13.1996 3.5999 13.1996H20.3999C20.7182 13.1996 21.0234 13.326 21.2484 13.5511C21.4735 13.7761 21.5999 14.0814 21.5999 14.3996C21.5999 14.7179 21.4735 15.0231 21.2484 15.2481C21.0234 15.4732 20.7182 15.5996 20.3999 15.5996H3.5999C3.28164 15.5996 2.97642 15.4732 2.75137 15.2481C2.52633 15.0231 2.3999 14.7179 2.3999 14.3996ZM2.3999 19.1996C2.3999 18.8814 2.52633 18.5761 2.75137 18.3511C2.97642 18.126 3.28164 17.9996 3.5999 17.9996H15.9695C16.2878 17.9996 16.593 18.126 16.818 18.3511C17.0431 18.5761 17.1695 18.8814 17.1695 19.1996C17.1695 19.5179 17.0431 19.8231 16.818 20.0481C16.593 20.2732 16.2878 20.3996 15.9695 20.3996H3.5999C3.28164 20.3996 2.97642 20.2732 2.75137 20.0481C2.52633 19.8231 2.3999 19.5179 2.3999 19.1996Z"
                  fill="black"
                />
              </svg>
              <form
                className="form_box   mx-2 d-flex p-2 align-items-center"
                action=""
              >
                <div className="d-flex">
                  <img src={SearchIcon} alt=" search icon" />
                </div>
                <input
                  type="text"
                  className="bg-transparent  border-0 px-2 fw-400  outline-none"
                  placeholder="Search in the admin panel"
                />
              </form>
            </div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 18H19V11.031C19 7.148 15.866 4 12 4C8.134 4 5 7.148 5 11.031V18ZM12 2C16.97 2 21 6.043 21 11.031V20H3V11.031C3 6.043 7.03 2 12 2ZM9.5 21H14.5C14.5 21.663 14.2366 22.2989 13.7678 22.7678C13.2989 23.2366 12.663 23.5 12 23.5C11.337 23.5 10.7011 23.2366 10.2322 22.7678C9.76339 22.2989 9.5 21.663 9.5 21Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
        {/* Dashboard-panel  */}
        <div className="w-100 px-3 py-4">
          <div className="d-flex   justify-content-between">
            <div className="d-flex">
              {/* <button onClick={() => setOpen(!open)}>Click</button> */}
              <h1 className="fs-400   black fs-lg">Dashboard</h1>
            </div>
            <button className="export_btn  white fs-xxs px-3 py-2 fw-400 border-0">
              Export
            </button>
          </div>
          <div className="  row justify-content-star  mt-3">
            <div className="    col-xl col-lg-4 col-md-6  mb-3 mr-3  ">
              <div className="   bg-white cards  flex-column d-flex justify-content-around px-3">
                <div className="d-flex justify-content-between   bg-white">
                  <h3 className="fw-400 fade_grey fs-xs">Total Sells</h3>
                  <div>
                    <img src={Dots} alt="dots" />
                  </div>
                </div>

                <div className="d-flex justify-content-between   align-items-center bg_white">
                  <h3 className="fw-500 black mb-0 fs-lg">₹ 50680.00</h3>
                  <div className="d-flex flex-column   justify-content-between">
                    <h3 className="color_green fs-xxs mb-0 text-end">15.3%</h3>
                    <p className="text-end  para mb-0">
                      Compared to Last Month
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="    col-xl col-lg-4 col-md-6 mb-3 mr-3  ">
              <div className=" bg-white   cards  flex-column d-flex justify-content-around px-3">
                <div className="d-flex justify-content-between   bg-white">
                  <h3 className="fw-400 fade_grey fs-xs">Total Sells</h3>
                  <div>
                    <img src={Dots} alt="dots" />
                  </div>
                </div>

                <div className="d-flex justify-content-between   align-items-center bg_white">
                  <h3 className="fw-500 black mb-0 fs-lg">₹ 50680.00</h3>
                  <div className="d-flex flex-column   justify-content-between">
                    <h3 className="color_green fs-xxs mb-0 text-end">15.3%</h3>
                    <p className="text-end  para mb-0">
                      Compared to Last Month
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="     col-xl col-lg-4 col-md-6 mb-3    ">
              <div className="  bg-white  cards  flex-column d-flex justify-content-around px-3">
                <div className="d-flex justify-content-between   bg-white">
                  <h3 className="fw-400 fade_grey fs-xs">Total Sells</h3>
                  <div>
                    <img src={Dots} alt="dots" />
                  </div>
                </div>

                <div className="d-flex justify-content-between   align-items-center bg_white">
                  <h3 className="fw-500 black mb-0 fs-lg">₹ 50680.00</h3>
                  <div className="d-flex flex-column   justify-content-between">
                    <h3 className="color_green fs-xxs mb-0 text-end">15.3%</h3>
                    <p className="text-end  para mb-0">
                      Compared to Last Month
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chart-section  */}
        <div className="chat_wrapper px-3">
          <div className="row  justify-content-between ">
            <div className="col-xl-3 col-lg-5 mb-4 col-12 ">
              <div className="    chart_content_wrapper p-2 bg-white">
                <div className="d-flex align-items-center justify-content-between">
                  <h3 className="fw-400 fade_grey mb-0 fs-xs"> Active Users</h3>
                  <div>
                    <img src={Dots} alt="dots" />
                  </div>
                </div>
                <div className="grey_box my-2 text-center w-100 p-2">
                  <h3 className="fw-500 black mb-0 fs-lg">34</h3>
                </div>
                <div className="d-flex align-items-center py-1 bottom_border  justify-content-between">
                  <h4 className="fw-400 fade_grey mb-0 fs-xs"> City</h4>
                  <h4 className="fw-400 fade_grey mb-0 fs-xs"> Users</h4>
                </div>
                <div className="d-flex align-items-center py-1 bottom_border  justify-content-between">
                  <h4 className="fw-400 black mb-0 fs-xs"> Hisar</h4>
                  <h4 className="fw-400 black mb-0 fs-xs"> 12</h4>
                </div>
                <div className="d-flex align-items-center py-1 bottom_border  justify-content-between">
                  <h4 className="fw-400 black mb-0 fs-xs"> Hansi</h4>
                  <h4 className="fw-400 black mb-0 fs-xs"> 8</h4>
                </div>
                <div className="d-flex align-items-center py-1 bottom_border  justify-content-between">
                  <h4 className="fw-400 black mb-0 fs-xs"> Fatehabad</h4>
                  <h4 className="fw-400 black mb-0 fs-xs"> 4</h4>
                </div>
                <div className="d-flex align-items-center py-1 bottom_border  justify-content-between">
                  <h4 className="fw-400 black mb-0 fs-xs"> Siwani</h4>
                  <h4 className="fw-400 black mb-0 fs-xs"> 9</h4>
                </div>
                <div className="d-flex align-items-center py-1 bottom_border  justify-content-between">
                  <h4 className="fw-400 black mb-0 fs-xs"> Agroha</h4>
                  <h4 className="fw-400 black mb-0 fs-xs"> 10</h4>
                </div>
                <div className="d-flex align-items-center py-1 bottom_border  justify-content-between">
                  <h4 className="fw-400 black mb-0 fs-xs"> Barwala</h4>
                  <h4 className="fw-400 black mb-0 fs-xs"> 18</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-7 col-12 h-100 ">
              <div className="  h-100 chart_box px-2 py-3  chart_content_wrapper bg-white">
                <div className="d-flex justify-content-between   bg-white">
                  <h3 className="fw-400 black fs-xs">Income Statistics</h3>
                  <div>
                    <img src={Dots} alt="dots" />
                  </div>
                </div>
                <img src={Graph} className="w-100 img_height " alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* Chart-section  */}
        <div className="chat_wrapper px-3  mt-4">
          <div className="row  justify-content-between ">
            <div className="col-xl-9 col-lg-7 mb-xl-0 mb-4 col-12 ">
              <div className=" px-3   chart_content_wrapper p-2 bg-white">
                <div className="d-flex align-items-center justify-content-between">
                  <h3 className="fw-600 black  mb-0 fs-xs">Recent Orders</h3>
                  <div>
                    <img src={Dots} alt="dots" />
                  </div>
                </div>

                <div className="d-flex px-2   row align-items-center py-2 bottom_border  justify-content-between">
                  <h4 className="fw-400 col fade_grey mb-0 fs-xs"> No</h4>
                  <h4 className="fw-400 col fade_grey mb-0 fs-xs"> Status</h4>
                  <h4 className="fw-400 col fade_grey mb-0 fs-xs"> City</h4>
                  <h4 className="fw-400 col-xl-4 col  fade_grey mb-0 fs-xs">
                    Customer
                  </h4>
                  <h4 className="fw-400 col fade_grey mb-0 fs-xs"> Date</h4>
                  <h4 className="fw-400 col fade_grey mb-0 fs-xs"> Total</h4>
                </div>
                <div className="d-flex px-2 row align-items-center py-2 bottom_border  justify-content-between">
                  <h4 className="fw-400 col black mb-0  fs-xs"> #0012</h4>
                  <h4 className="fw-400 col black mb-0  fs-xs"> Status</h4>
                  <h4 className="fw-400 col black mb-0  fs-xs"> Hisar</h4>
                  <h4 className="fw-400 col-xl-4 col black mb-0  fs-xs">
                    John Doe
                  </h4>
                  <h4 className="fw-400 col black mb-0  fs-xs"> 18-10-2023</h4>
                  <h4 className="fw-400 col black mb-0  fs-xs"> ₹ 360.00</h4>
                </div>
                <div className="d-flex px-2 row align-items-center py-2 bottom_border  justify-content-between">
                  <h4 className="fw-400 col black mb-0  fs-xs"> #0012</h4>
                  <h4 className="fw-400 col black mb-0  fs-xs"> Status</h4>
                  <h4 className="fw-400 col black mb-0  fs-xs"> Hisar</h4>
                  <h4 className="fw-400 col-xl-4 col black mb-0  fs-xs">
                    John Doe
                  </h4>
                  <h4 className="fw-400 col black mb-0  fs-xs"> 18-10-2023</h4>
                  <h4 className="fw-400 col black mb-0  fs-xs"> ₹ 360.00</h4>
                </div>
                <div className="d-flex px-2 row align-items-center py-2 bottom_border  justify-content-between">
                  <h4 className="fw-400 col black mb-0  fs-xs"> #0012</h4>
                  <h4 className="fw-400 col black mb-0  fs-xs"> Status</h4>
                  <h4 className="fw-400 col black mb-0  fs-xs"> Hisar</h4>
                  <h4 className="fw-400 col-xl-4 col black mb-0  fs-xs">
                    John Doe
                  </h4>
                  <h4 className="fw-400 col black mb-0  fs-xs"> 18-10-2023</h4>
                  <h4 className="fw-400 col black mb-0  fs-xs"> ₹ 360.00</h4>
                </div>
                <div className="d-flex px-2 row align-items-center py-2 bottom_border  justify-content-between">
                  <h4 className="fw-400 col black mb-0  fs-xs"> #0012</h4>
                  <h4 className="fw-400 col black mb-0  fs-xs"> Status</h4>
                  <h4 className="fw-400 col black mb-0  fs-xs"> Hisar</h4>
                  <h4 className="fw-400 col-xl-4 col black mb-0  fs-xs">
                    John Doe
                  </h4>
                  <h4 className="fw-400 col black mb-0  fs-xs"> 18-10-2023</h4>
                  <h4 className="fw-400 col black mb-0  fs-xs"> ₹ 360.00</h4>
                </div>
                <div className="d-flex px-2 row align-items-center py-2 bottom_border  justify-content-between">
                  <h4 className="fw-400 col black mb-0  fs-xs"> #0012</h4>
                  <h4 className="fw-400 col black mb-0  fs-xs"> Status</h4>
                  <h4 className="fw-400 col black mb-0  fs-xs"> Hisar</h4>
                  <h4 className="fw-400 col-xl-4 col black mb-0  fs-xs">
                    John Doe
                  </h4>
                  <h4 className="fw-400 col black mb-0  fs-xs"> 18-10-2023</h4>
                  <h4 className="fw-400 col black mb-0  fs-xs"> ₹ 360.00</h4>
                </div>
                <div className="d-flex px-2 row align-items-center py-2 bottom_border  justify-content-between">
                  <h4 className="fw-400 col black mb-0  fs-xs"> #0012</h4>
                  <h4 className="fw-400 col black mb-0  fs-xs"> Status</h4>
                  <h4 className="fw-400 col black mb-0  fs-xs"> Hisar</h4>
                  <h4 className="fw-400 col-xl-4 col black mb-0  fs-xs">
                    John Doe
                  </h4>
                  <h4 className="fw-400 col black mb-0  fs-xs"> 18-10-2023</h4>
                  <h4 className="fw-400 col black mb-0  fs-xs"> ₹ 360.00</h4>
                </div>
                <div className="d-flex px-2 row align-items-center py-2 bottom_border  justify-content-between">
                  <h4 className="fw-400 col black mb-0  fs-xs"> #0012</h4>
                  <h4 className="fw-400 col black mb-0  fs-xs"> Status</h4>
                  <h4 className="fw-400 col black mb-0  fs-xs"> Hisar</h4>
                  <h4 className="fw-400 col-xl-4 col black mb-0  fs-xs">
                    John Doe
                  </h4>
                  <h4 className="fw-400 col black mb-0  fs-xs"> 18-10-2023</h4>
                  <h4 className="fw-400 col black mb-0  fs-xs"> ₹ 360.00</h4>
                </div>
                <div className="d-flex px-2 row align-items-center py-2 bottom_border  justify-content-between">
                  <h4 className="fw-400 col black mb-0  fs-xs"> #0012</h4>
                  <h4 className="fw-400 col black mb-0  fs-xs"> Status</h4>
                  <h4 className="fw-400 col black mb-0  fs-xs"> Hisar</h4>
                  <h4 className="fw-400  col-xl-4 col black mb-0  fs-xs">
                    John Doe
                  </h4>
                  <h4 className="fw-400 col black mb-0  fs-xs"> 18-10-2023</h4>
                  <h4 className="fw-400 col black mb-0  fs-xs"> ₹ 360.00</h4>
                </div>
                <div className="d-flex px-2 row align-items-center py-2 bottom_border  justify-content-between">
                  <h4 className="fw-400 col black mb-0  fs-xs"> #0012</h4>
                  <h4 className="fw-400 col black mb-0  fs-xs"> Status</h4>
                  <h4 className="fw-400 col black mb-0  fs-xs"> Hisar</h4>
                  <h4 className="fw-400  col-xl-4 col black mb-0  fs-xs">
                    John Doe
                  </h4>
                  <h4 className="fw-400 col black mb-0  fs-xs"> 18-10-2023</h4>
                  <h4 className="fw-400 col black mb-0  fs-xs"> ₹ 360.00</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-5 col-12 h-100 ">
              <div className="  h-100 chart_box px-3 py-3  chart_content_wrapper bg-white">
                <div className="d-flex justify-content-between   bg-white">
                  <h3 className="fw-400 black fs-xs">Sales by source</h3>
                  <div>
                    <img src={Dots} alt="dots" />
                  </div>
                </div>
                <div className="text-center">
                  <img
                    src={Donat}
                    className=" mx-auto w-75  text-center  mt-2"
                    alt=""
                  />
                </div>

                <div className="d-flex     align-items-center mt-3 p-2 bottom_border  justify-content-between">
                  <h4 className="fw-400 col fade_grey mb-0 fs-xs"> Source</h4>
                  <h4 className="fw-400 col text-center fade_grey mb-0 fs-xs">
                    Orders
                  </h4>
                  <h4 className="fw-400 col text-end fade_grey mb-0 fs-xs">
                    Amount
                  </h4>
                </div>
                <div className="d-flex      align-items-center p-2 bottom_border justify-content-between  ">
                  <h4 className="fw-400 col black mb-0 fs-xs"> Direct</h4>
                  <h4 className="fw-400 col text-center black mb-0    fs-xs">
                    110
                  </h4>
                  <h4 className="fw-400 col text-end black mb-0 fs-xs">
                    ₹45,368.00
                  </h4>
                </div>
                <div className="d-flex     align-items-center p-2 bottom_border justify-content-between  ">
                  <h4 className="fw-400 col  black mb-0 fs-xs"> Salesman</h4>
                  <h4 className="fw-400 col text-center  black mb-0   fs-xs">
                    36
                  </h4>
                  <h4 className="fw-400 col text-end black mb-0 fs-xs">
                    ₹13,810.00
                  </h4>
                </div>
                <div className="d-flex     align-items-center p-2 bottom_border justify-content-between  ">
                  <h4 className="fw-400 col  black mb-0 fs-xs">Wholesalers</h4>
                  <h4 className="fw-400 col text-center black mb-0     fs-xs">
                    43
                  </h4>
                  <h4 className="fw-400 col text-end black mb-0 fs-xs">
                    ₹56,108.00
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashbordCards;
