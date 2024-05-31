const Header = () => {
  return (
    <div className="navbar-custom">
      <div className="topbar container-fluid">
        <div className="d-flex align-items-center gap-lg-2 gap-1">
          {/* Topbar Brand Logo */}
          <div className="logo-topbar">
            {/* Logo light */}
            <a href="index.html" className="logo-light">
              <span className="logo-lg">
                <img src="assets/images/logo.png" alt="logo" />
              </span>
              <span className="logo-sm">
                <img src="assets/images/logo-sm.png" alt="small logo" />
              </span>
            </a>

            {/* Logo Dark */}
            <a href="index.html" className="logo-dark">
              <span className="logo-lg">
                <img src="assets/images/logo-dark.png" alt="dark logo" />
              </span>
              <span className="logo-sm">
                <img src="assets/images/logo-dark-sm.png" alt="small logo" />
              </span>
            </a>
          </div>

          {/* Sidebar Menu Toggle Button */}
          <button className="button-toggle-menu">
            <i className="mdi mdi-menu"></i>
          </button>

          {/* Horizontal Menu Toggle Button */}
          <button
            className="navbar-toggle"
            data-bs-toggle="collapse"
            data-bs-target="#topnav-menu-content"
          >
            <div className="lines">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>

          {/* Topbar Search Form */}
          <div className="app-search dropdown d-none d-lg-block">
            <form>
              <div className="input-group">
                <input
                  type="search"
                  className="form-control dropdown-toggle"
                  placeholder="Search..."
                  id="top-search"
                />
                <span className="mdi mdi-magnify search-icon"></span>
                <button
                  className="input-group-text btn btn-primary"
                  type="submit"
                >
                  Search
                </button>
              </div>
            </form>

            <div
              className="dropdown-menu dropdown-menu-animated dropdown-lg"
              id="search-dropdown"
            >
              {/* item*/}
              <div className="dropdown-header noti-title">
                <h5 className="text-overflow mb-2">
                  Found <span className="text-danger">17</span> results
                </h5>
              </div>

              {/* item*/}
              <a
                href="javascript:void(0);"
                className="dropdown-item notify-item"
              >
                <i className="uil-notes font-16 me-1"></i>
                <span>Analytics Report</span>
              </a>

              {/* item*/}
              <a
                href="javascript:void(0);"
                className="dropdown-item notify-item"
              >
                <i className="uil-life-ring font-16 me-1"></i>
                <span>How can I help you?</span>
              </a>

              {/* item*/}
              <a
                href="javascript:void(0);"
                className="dropdown-item notify-item"
              >
                <i className="uil-cog font-16 me-1"></i>
                <span>User profile settings</span>
              </a>

              {/* item*/}
              <div className="dropdown-header noti-title">
                <h6 className="text-overflow mb-2 text-uppercase">Users</h6>
              </div>

              <div className="notification-list">
                {/* item*/}
                <a
                  href="javascript:void(0);"
                  className="dropdown-item notify-item"
                >
                  <div className="d-flex">
                    <img
                      className="d-flex me-2 rounded-circle"
                      src="assets/images/users/avatar-2.jpg"
                      alt="Generic placeholder image"
                      height="32"
                    />
                    <div className="w-100">
                      <h5 className="m-0 font-14">Erwin Brown</h5>
                      <span className="font-12 mb-0">UI Designer</span>
                    </div>
                  </div>
                </a>

                {/* item*/}
                <a
                  href="javascript:void(0);"
                  className="dropdown-item notify-item"
                >
                  <div className="d-flex">
                    <img
                      className="d-flex me-2 rounded-circle"
                      src="assets/images/users/avatar-5.jpg"
                      alt="Generic placeholder image"
                      height="32"
                    />
                    <div className="w-100">
                      <h5 className="m-0 font-14">Jacob Deo</h5>
                      <span className="font-12 mb-0">Developer</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <ul className="topbar-menu d-flex align-items-center gap-3">
          <li className="dropdown d-lg-none">
            <a
              className="nav-link dropdown-toggle arrow-none"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="false"
              aria-expanded="false"
            >
              <i className="ri-search-line font-22"></i>
            </a>
            <div className="dropdown-menu dropdown-menu-animated dropdown-lg p-0">
              <form className="p-3">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search ..."
                  aria-label="Recipient's username"
                />
              </form>
            </div>
          </li>

          <li className="dropdown">
            <a
              className="nav-link dropdown-toggle arrow-none"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="false"
              aria-expanded="false"
            >
              <img
                src="assets/images/flags/us.jpg"
                alt="user-image"
                className="me-0 me-sm-1"
                height="12"
              />
              <span className="align-middle d-none d-lg-inline-block">
                English
              </span>{" "}
              <i className="mdi mdi-chevron-down d-none d-sm-inline-block align-middle"></i>
            </a>
            <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated">
              {/* item*/}
              <a href="javascript:void(0);" className="dropdown-item">
                <img
                  src="assets/images/flags/germany.jpg"
                  alt="user-image"
                  className="me-1"
                  height="12"
                />{" "}
                <span className="align-middle">German</span>
              </a>

              {/* item*/}
              <a href="javascript:void(0);" className="dropdown-item">
                <img
                  src="assets/images/flags/italy.jpg"
                  alt="user-image"
                  className="me-1"
                  height="12"
                />{" "}
                <span className="align-middle">Italian</span>
              </a>

              {/* item*/}
              <a href="javascript:void(0);" className="dropdown-item">
                <img
                  src="assets/images/flags/spain.jpg"
                  alt="user-image"
                  className="me-1"
                  height="12"
                />{" "}
                <span className="align-middle">Spanish</span>
              </a>

              {/* item*/}
              <a href="javascript:void(0);" className="dropdown-item">
                <img
                  src="assets/images/flags/russia.jpg"
                  alt="user-image"
                  className="me-1"
                  height="12"
                />{" "}
                <span className="align-middle">Russian</span>
              </a>
            </div>
          </li>

          <li className="dropdown notification-list">
            <a
              className="nav-link dropdown-toggle arrow-none"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="false"
              aria-expanded="false"
            >
              <i className="ri-notification-3-line font-22"></i>
              <span className="noti-icon-badge"></span>
            </a>
            <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated dropdown-lg py-0">
              <div className="p-2 border-top-0 border-start-0 border-end-0 border-dashed border">
                <div className="row align-items-center">
                  <div className="col">
                    <h6 className="m-0 font-16 fw-semibold"> Notification</h6>
                  </div>
                  <div className="col-auto">
                    <a
                      href="javascript: void(0);"
                      className="text-dark text-decoration-underline"
                    >
                      <small>Clear All</small>
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="px-2"
                style={{ maxHeight: "300px" }}
                data-simplebar="init"
              >
                <div
                  className="simplebar-wrapper"
                  style={{ margin: "0px -12px" }}
                >
                  <div className="simplebar-height-auto-observer-wrapper">
                    <div className="simplebar-height-auto-observer"></div>
                  </div>
                  <div className="simplebar-mask">
                    <div
                      className="simplebar-offset"
                      styles={{ right: "0px", bottom: "0px" }}
                    >
                      <div
                        className="simplebar-content-wrapper"
                        tabIndex="0"
                        role="region"
                        aria-label="scrollable content"
                        styles={{ height: "auto", overflow: "hidden" }}
                      >
                        <div
                          className="simplebar-content"
                          style={{ padding: "0px 12px" }}
                        >
                          <h5 className="text-muted font-13 fw-normal mt-2">
                            Today
                          </h5>
                          {/* item*/}

                          <a
                            href="javascript:void(0);"
                            className="dropdown-item p-0 notify-item card unread-noti shadow-none mb-2"
                          >
                            <div className="card-body">
                              <span className="float-end noti-close-btn text-muted">
                                <i className="mdi mdi-close"></i>
                              </span>
                              <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                  <div className="notify-icon bg-primary">
                                    <i className="mdi mdi-comment-account-outline"></i>
                                  </div>
                                </div>
                                <div className="flex-grow-1 text-truncate ms-2">
                                  <h5 className="noti-item-title fw-semibold font-14">
                                    Datacorp{" "}
                                    <small className="fw-normal text-muted ms-1">
                                      1 min ago
                                    </small>
                                  </h5>
                                  <small className="noti-item-subtitle text-muted">
                                    Caleb Flakelar commented on Admin
                                  </small>
                                </div>
                              </div>
                            </div>
                          </a>

                          {/* item*/}
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item p-0 notify-item card read-noti shadow-none mb-2"
                          >
                            <div className="card-body">
                              <span className="float-end noti-close-btn text-muted">
                                <i className="mdi mdi-close"></i>
                              </span>
                              <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                  <div className="notify-icon bg-info">
                                    <i className="mdi mdi-account-plus"></i>
                                  </div>
                                </div>
                                <div className="flex-grow-1 text-truncate ms-2">
                                  <h5 className="noti-item-title fw-semibold font-14">
                                    Admin{" "}
                                    <small className="fw-normal text-muted ms-1">
                                      1 hours ago
                                    </small>
                                  </h5>
                                  <small className="noti-item-subtitle text-muted">
                                    New user registered
                                  </small>
                                </div>
                              </div>
                            </div>
                          </a>

                          <h5 className="text-muted font-13 fw-normal mt-0">
                            Yesterday
                          </h5>

                          {/* item*/}
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item p-0 notify-item card read-noti shadow-none mb-2"
                          >
                            <div className="card-body">
                              <span className="float-end noti-close-btn text-muted">
                                <i className="mdi mdi-close"></i>
                              </span>
                              <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                  <div className="notify-icon">
                                    <img
                                      src="assets/images/users/avatar-2.jpg"
                                      className="img-fluid rounded-circle"
                                      alt=""
                                    />
                                  </div>
                                </div>
                                <div className="flex-grow-1 text-truncate ms-2">
                                  <h5 className="noti-item-title fw-semibold font-14">
                                    Cristina Pride{" "}
                                    <small className="fw-normal text-muted ms-1">
                                      1 day ago
                                    </small>
                                  </h5>
                                  <small className="noti-item-subtitle text-muted">
                                    Hi, How are you? What about our next meeting
                                  </small>
                                </div>
                              </div>
                            </div>
                          </a>

                          <h5 className="text-muted font-13 fw-normal mt-0">
                            30 Dec 2021
                          </h5>

                          {/* item*/}
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item p-0 notify-item card read-noti shadow-none mb-2"
                          >
                            <div className="card-body">
                              <span className="float-end noti-close-btn text-muted">
                                <i className="mdi mdi-close"></i>
                              </span>
                              <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                  <div className="notify-icon bg-primary">
                                    <i className="mdi mdi-comment-account-outline"></i>
                                  </div>
                                </div>
                                <div className="flex-grow-1 text-truncate ms-2">
                                  <h5 className="noti-item-title fw-semibold font-14">
                                    Datacorp
                                  </h5>
                                  <small className="noti-item-subtitle text-muted">
                                    Caleb Flakelar commented on Admin
                                  </small>
                                </div>
                              </div>
                            </div>
                          </a>

                          {/* item*/}
                          <a
                            href="javascript:void(0);"
                            className="dropdown-item p-0 notify-item card read-noti shadow-none mb-2"
                          >
                            <div className="card-body">
                              <span className="float-end noti-close-btn text-muted">
                                <i className="mdi mdi-close"></i>
                              </span>
                              <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                  <div className="notify-icon">
                                    <img
                                      src="assets/images/users/avatar-4.jpg"
                                      className="img-fluid rounded-circle"
                                      alt=""
                                    />
                                  </div>
                                </div>
                                <div className="flex-grow-1 text-truncate ms-2">
                                  <h5 className="noti-item-title fw-semibold font-14">
                                    Karen Robinson
                                  </h5>
                                  <small className="noti-item-subtitle text-muted">
                                    Wow ! this admin looks good and awesome
                                    design
                                  </small>
                                </div>
                              </div>
                            </div>
                          </a>

                          <div className="text-center">
                            <i className="mdi mdi-dots-circle mdi-spin text-muted h3 mt-0"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="simplebar-placeholder"
                    styles={{ width: "0px", height: "0px" }}
                  ></div>
                </div>
                <div
                  className="simplebar-track simplebar-horizontal"
                  style={{ visibility: "hidden" }}
                >
                  <div
                    className="simplebar-scrollbar"
                    styles={{ width: "0px", display: "none" }}
                  ></div>
                </div>
                <div
                  className="simplebar-track simplebar-vertical"
                  style={{ visibility: "hidden" }}
                >
                  <div
                    className="simplebar-scrollbar"
                    styles={{ height: "0px", display: "none" }}
                  ></div>
                </div>
              </div>

              {/* All*/}
              <a
                href="javascript:void(0);"
                className="dropdown-item text-center text-primary notify-item border-top py-2"
              >
                View All
              </a>
            </div>
          </li>

          <li className="dropdown d-none d-sm-inline-block">
            <a
              className="nav-link dropdown-toggle arrow-none"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="false"
              aria-expanded="false"
            >
              <i className="ri-apps-2-line font-22"></i>
            </a>
            <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated dropdown-lg p-0">
              <div className="p-2">
                <div className="row g-0">
                  <div className="col">
                    <a className="dropdown-icon-item" href="#">
                      <img src="assets/images/brands/slack.png" alt="slack" />
                      <span>Slack</span>
                    </a>
                  </div>
                  <div className="col">
                    <a className="dropdown-icon-item" href="#">
                      <img src="assets/images/brands/github.png" alt="Github" />
                      <span>GitHub</span>
                    </a>
                  </div>
                  <div className="col">
                    <a className="dropdown-icon-item" href="#">
                      <img
                        src="assets/images/brands/dribbble.png"
                        alt="dribbble"
                      />
                      <span>Dribbble</span>
                    </a>
                  </div>
                </div>
                <div className="row g-0">
                  <div className="col">
                    <a className="dropdown-icon-item" href="#">
                      <img
                        src="assets/images/brands/bitbucket.png"
                        alt="bitbucket"
                      />
                      <span>Bitbucket</span>
                    </a>
                  </div>
                  <div className="col">
                    <a className="dropdown-icon-item" href="#">
                      <img
                        src="assets/images/brands/dropbox.png"
                        alt="dropbox"
                      />
                      <span>Dropbox</span>
                    </a>
                  </div>
                  <div className="col">
                    <a className="dropdown-icon-item" href="#">
                      <img
                        src="assets/images/brands/g-suite.png"
                        alt="G Suite"
                      />
                      <span>G Suite</span>
                    </a>
                  </div>
                </div>{" "}
                {/* end row*/}
              </div>
            </div>
          </li>

          <li className="d-none d-sm-inline-block">
            <a
              className="nav-link"
              data-bs-toggle="offcanvas"
              href="#theme-settings-offcanvas"
            >
              <i className="ri-settings-3-line font-22"></i>
            </a>
          </li>

          <li className="d-none d-sm-inline-block">
            <div
              className="nav-link"
              id="light-dark-mode"
              data-bs-toggle="tooltip"
              data-bs-placement="left"
              aria-label="Theme Mode"
              data-bs-original-title="Theme Mode"
            >
              <i className="ri-moon-line font-22"></i>
            </div>
          </li>

          <li className="d-none d-md-inline-block">
            <a className="nav-link" href="" data-toggle="fullscreen">
              <i className="ri-fullscreen-line font-22"></i>
            </a>
          </li>

          <li className="dropdown">
            <a
              className="nav-link dropdown-toggle arrow-none nav-user px-2"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="false"
              aria-expanded="false"
            >
              <span className="account-user-avatar">
                <img
                  src="assets/images/users/avatar-1.jpg"
                  alt="user-image"
                  width="32"
                  className="rounded-circle"
                />
              </span>
              <span className="d-lg-flex flex-column gap-1 d-none">
                <h5 className="my-0">Dominic Keller</h5>
                <h6 className="my-0 fw-normal">Founder</h6>
              </span>
            </a>
            <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated profile-dropdown">
              {/* item*/}
              <div className=" dropdown-header noti-title">
                <h6 className="text-overflow m-0">Welcome !</h6>
              </div>

              {/* item*/}
              <a href="javascript:void(0);" className="dropdown-item">
                <i className="mdi mdi-account-circle me-1"></i>
                <span>My Account</span>
              </a>

              {/* item*/}
              <a href="javascript:void(0);" className="dropdown-item">
                <i className="mdi mdi-account-edit me-1"></i>
                <span>Settings</span>
              </a>

              {/* item*/}
              <a href="javascript:void(0);" className="dropdown-item">
                <i className="mdi mdi-lifebuoy me-1"></i>
                <span>Support</span>
              </a>

              {/* item*/}
              <a href="javascript:void(0);" className="dropdown-item">
                <i className="mdi mdi-lock-outline me-1"></i>
                <span>Lock Screen</span>
              </a>

              {/* item*/}
              <a href="javascript:void(0);" className="dropdown-item">
                <i className="mdi mdi-logout me-1"></i>
                <span>Logout</span>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;


<div class="card-body">
                                    <div class="row mb-2">
                                        <div class="col-xl-8">
                                            <form class="row gy-2 gx-2 align-items-center justify-content-xl-start justify-content-between">
                                                <div class="col-auto">
                                                    <label for="inputPassword2" class="visually-hidden">Search</label>
                                                    <input type="search" class="form-control" id="inputPassword2" placeholder="Search...">
                                                </div>
                                                <div class="col-auto">
                                                    <div class="d-flex align-items-center">
                                                        <label for="status-select" class="me-2">Status</label>
                                                        <select class="form-select" id="status-select">
                                                            <option selected="">Choose...</option>
                                                            <option value="1">Paid</option>
                                                            <option value="2">Awaiting Authorization</option>
                                                            <option value="3">Payment Failed</option>
                                                            <option value="4">Cash On Delivery</option>
                                                            <option value="5">Fulfilled</option>
                                                            <option value="6">Unfulfilled</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div class="col-xl-4">
                                            <div class="text-xl-end mt-xl-0 mt-2">
                                                <button type="button" class="btn btn-danger mb-2 me-2"><i class="mdi mdi-basket me-1"></i> Add New Order</button>
                                                <button type="button" class="btn btn-light mb-2">Export</button>
                                            </div>
                                        </div><!-- end col-->
                                    </div>

                                    <div class="table-responsive">
                                        <table class="table table-centered table-nowrap mb-0">
                                            <thead class="table-light">
                                                <tr>
                                                    <th style="width: 20px;">
                                                        <div class="form-check">
                                                            <input type="checkbox" class="form-check-input" id="customCheck1">
                                                            <label class="form-check-label" for="customCheck1">&nbsp;</label>
                                                        </div>
                                                    </th>
                                                    <th>Order ID</th>
                                                    <th>Customers</th>
                                                    <th>Project</th>
                                                    <th>Address</th>
                                                    <th>Date Order</th>
                                                    <th>Order Status</th>
                                                    <th style="width: 125px;">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div class="form-check">
                                                            <input type="checkbox" class="form-check-input" id="customCheck2">
                                                            <label class="form-check-label" for="customCheck2">&nbsp;</label>
                                                        </div>
                                                    </td>
                                                    <td><a href="apps-ecommerce-orders-details.html" class="text-body fw-bold">#CM9708</a> </td>
                                                    <td>
                                                        <div class="d-flex">
                                                            <div class="d-flex align-items-center">
                                                                <div class="flex-shrink-0">
                                                                    <img src="assets/images/users/avatar-1.jpg" class="rounded-circle avatar-xs" alt="friend">
                                                                </div>
                                                                <div class="flex-grow-1 ms-2">
                                                                    <h5 class="my-0">Jerry Geiger</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>Landing Page</td>
                                                    <td>
                                                        <h5 class="my-0">New York</h5>
                                                        <p class="mb-0 txt-muted">Meadow Lane Oakland</p>
                                                    </td>
                                                    <td>01 January 2022</td>
                                                    <td>
                                                        <h5 class="my-0"><span class="badge badge-info-lighten">In Progress</span></h5>
                                                    </td>
                                                    <td>
                                                        <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-square-edit-outline"></i></a>
                                                        <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-delete"></i></a>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <div class="form-check">
                                                            <input type="checkbox" class="form-check-input" id="customCheck3">
                                                            <label class="form-check-label" for="customCheck3">&nbsp;</label>
                                                        </div>
                                                    </td>
                                                    <td><a href="apps-ecommerce-orders-details.html" class="text-body fw-bold">#CM9707</a> </td>
                                                    <td>
                                                        <div class="d-flex">
                                                            <div class="d-flex align-items-center">
                                                                <div class="flex-shrink-0">
                                                                    <img src="assets/images/users/avatar-2.jpg" class="rounded-circle avatar-xs" alt="friend">
                                                                </div>
                                                                <div class="flex-grow-1 ms-2">
                                                                    <h5 class="my-0">Adam Thomas</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>Client Project (Sktech)</td>
                                                    <td>
                                                        <h5 class="my-0">Canada</h5>
                                                        <p class="mb-0 txt-muted">Bagwell Avenue Ocala</p>
                                                    </td>
                                                    <td>02 January 2022</td>
                                                    <td>
                                                        <h5 class="my-0"><span class="badge badge-success-lighten">Complete</span></h5>
                                                    </td>
                                                    <td>
                                                        <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-square-edit-outline"></i></a>
                                                        <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-delete"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="form-check">
                                                            <input type="checkbox" class="form-check-input" id="customCheck4">
                                                            <label class="form-check-label" for="customCheck4">&nbsp;</label>
                                                        </div>
                                                    </td>
                                                    <td><a href="apps-ecommerce-orders-details.html" class="text-body fw-bold">#CM9706</a> </td>
                                                    <td>
                                                        <div class="d-flex">
                                                            <div class="d-flex align-items-center">
                                                                <div class="flex-shrink-0">
                                                                    <img src="assets/images/users/avatar-3.jpg" class="rounded-circle avatar-xs" alt="friend">
                                                                </div>
                                                                <div class="flex-grow-1 ms-2">
                                                                    <h5 class="my-0">Sara Lewis</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>Admin Dashboard</td>
                                                    <td>
                                                        <h5 class="my-0">Denmark</h5>
                                                        <p class="mb-0 txt-muted">Washburn Baton Rouge</p>
                                                    </td>
                                                    <td>03 January 2022</td>
                                                    <td>
                                                        <h5 class="my-0"><span class="badge badge-warning-lighten">Pending</span></h5>
                                                    </td>
                                                    <td>
                                                        <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-square-edit-outline"></i></a>
                                                        <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-delete"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="form-check">
                                                            <input type="checkbox" class="form-check-input" id="customCheck5">
                                                            <label class="form-check-label" for="customCheck5">&nbsp;</label>
                                                        </div>
                                                    </td>
                                                    <td><a href="apps-ecommerce-orders-details.html" class="text-body fw-bold">#CM9705</a> </td>
                                                    <td>
                                                        <div class="d-flex">
                                                            <div class="d-flex align-items-center">
                                                                <div class="flex-shrink-0">
                                                                    <img src="assets/images/users/avatar-4.jpg" class="rounded-circle avatar-xs" alt="friend">
                                                                </div>
                                                                <div class="flex-grow-1 ms-2">
                                                                    <h5 class="my-0">Myrtle Johnson</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>Landing Page (Figma)</td>
                                                    <td>
                                                        <h5 class="my-0">Brazil</h5>
                                                        <p class="mb-0 txt-muted">Nest Lane Olivette</p>
                                                    </td>
                                                    <td>04 January 2022</td>
                                                    <td>
                                                        <h5 class="my-0"><span class="badge badge-primary-lighten">Delivered</span></h5>
                                                    </td>
                                                    <td>
                                                        <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-square-edit-outline"></i></a>
                                                        <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-delete"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="form-check">
                                                            <input type="checkbox" class="form-check-input" id="customCheck6">
                                                            <label class="form-check-label" for="customCheck6">&nbsp;</label>
                                                        </div>
                                                    </td>
                                                    <td><a href="apps-ecommerce-orders-details.html" class="text-body fw-bold">#CM9704</a> </td>
                                                    <td>
                                                        <div class="d-flex">
                                                            <div class="d-flex align-items-center">
                                                                <div class="flex-shrink-0">
                                                                    <img src="assets/images/users/avatar-5.jpg" class="rounded-circle avatar-xs" alt="friend">
                                                                </div>
                                                                <div class="flex-grow-1 ms-2">
                                                                    <h5 class="my-0">Bryan Collier</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>App Landing Page</td>
                                                    <td>
                                                        <h5 class="my-0">Mexico</h5>
                                                        <p class="mb-0 txt-muted">Larry San Francisco</p>
                                                    </td>
                                                    <td>05 January 2022</td>
                                                    <td>
                                                        <h5 class="my-0"><span class="badge badge-info-lighten">In Progress</span></h5>
                                                    </td>
                                                    <td>
                                                        <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-square-edit-outline"></i></a>
                                                        <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-delete"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="form-check">
                                                            <input type="checkbox" class="form-check-input" id="customCheck7">
                                                            <label class="form-check-label" for="customCheck7">&nbsp;</label>
                                                        </div>
                                                    </td>
                                                    <td><a href="apps-ecommerce-orders-details.html" class="text-body fw-bold">#CM9703</a> </td>
                                                    <td>
                                                        <div class="d-flex">
                                                            <div class="d-flex align-items-center">
                                                                <div class="flex-shrink-0">
                                                                    <img src="assets/images/users/avatar-6.jpg" class="rounded-circle avatar-xs" alt="friend">
                                                                </div>
                                                                <div class="flex-grow-1 ms-2">
                                                                    <h5 class="my-0">Joshua Moody</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>CRM Admin pages</td>
                                                    <td>
                                                        <h5 class="my-0">Russia</h5>
                                                        <p class="mb-0 txt-muted">Oak Drive Mobile</p>
                                                    </td>
                                                    <td>06 January 2022</td>
                                                    <td>
                                                        <h5 class="my-0"><span class="badge badge-success-lighten">Complete</span></h5>
                                                    </td>
                                                    <td>
                                                        <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-square-edit-outline"></i></a>
                                                        <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-delete"></i></a>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <div class="form-check">
                                                            <input type="checkbox" class="form-check-input" id="customCheck8">
                                                            <label class="form-check-label" for="customCheck8">&nbsp;</label>
                                                        </div>
                                                    </td>
                                                    <td><a href="apps-ecommerce-orders-details.html" class="text-body fw-bold">#CM9702</a> </td>
                                                    <td>
                                                        <div class="d-flex">
                                                            <div class="d-flex align-items-center">
                                                                <div class="flex-shrink-0">
                                                                    <img src="assets/images/users/avatar-7.jpg" class="rounded-circle avatar-xs" alt="friend">
                                                                </div>
                                                                <div class="flex-grow-1 ms-2">
                                                                    <h5 class="my-0">John Clune</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>Ecommerce Dashboard</td>
                                                    <td>
                                                        <h5 class="my-0">Manitoba</h5>
                                                        <p class="mb-0 txt-muted">Oxford Court Amory</p>
                                                    </td>
                                                    <td>07 January 2022</td>
                                                    <td>
                                                        <h5 class="my-0"><span class="badge badge-primary-lighten">Delivered</span></h5>
                                                    </td>
                                                    <td>
                                                        <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-square-edit-outline"></i></a>
                                                        <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-delete"></i></a>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <div class="form-check">
                                                            <input type="checkbox" class="form-check-input" id="customCheck9">
                                                            <label class="form-check-label" for="customCheck9">&nbsp;</label>
                                                        </div>
                                                    </td>
                                                    <td><a href="apps-ecommerce-orders-details.html" class="text-body fw-bold">#CM9701</a> </td>
                                                    <td>
                                                        <div class="d-flex">
                                                            <div class="d-flex align-items-center">
                                                                <div class="flex-shrink-0">
                                                                    <img src="assets/images/users/avatar-8.jpg" class="rounded-circle avatar-xs" alt="friend">
                                                                </div>
                                                                <div class="flex-grow-1 ms-2">
                                                                    <h5 class="my-0">Jamie Romero</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>Logo Design</td>
                                                    <td>
                                                        <h5 class="my-0">Nova Scotia</h5>
                                                        <p class="mb-0 txt-muted">Lane New Market</p>
                                                    </td>
                                                    <td>08 January 2022</td>
                                                    <td>
                                                        <h5 class="my-0"><span class="badge badge-warning-lighten">Pending</span></h5>
                                                    </td>
                                                    <td>
                                                        <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-square-edit-outline"></i></a>
                                                        <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-delete"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="form-check">
                                                            <input type="checkbox" class="form-check-input" id="customCheck10">
                                                            <label class="form-check-label" for="customCheck10">&nbsp;</label>
                                                        </div>
                                                    </td>
                                                    <td><a href="apps-ecommerce-orders-details.html" class="text-body fw-bold">#CM9700</a> </td>
                                                    <td>
                                                        <div class="d-flex">
                                                            <div class="d-flex align-items-center">
                                                                <div class="flex-shrink-0">
                                                                    <img src="assets/images/users/avatar-9.jpg" class="rounded-circle avatar-xs" alt="friend">
                                                                </div>
                                                                <div class="flex-grow-1 ms-2">
                                                                    <h5 class="my-0">Clint Percival</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>PHP Project</td>
                                                    <td>
                                                        <h5 class="my-0">Manitoba</h5>
                                                        <p class="mb-0 txt-muted">Wilson Avenue Dallas</p>
                                                    </td>
                                                    <td>09 January 2022</td>
                                                    <td>
                                                        <h5 class="my-0"><span class="badge badge-primary-lighten">Delivered</span></h5>
                                                    </td>
                                                    <td>
                                                        <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-square-edit-outline"></i></a>
                                                        <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-delete"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="form-check">
                                                            <input type="checkbox" class="form-check-input" id="customCheck11">
                                                            <label class="form-check-label" for="customCheck11">&nbsp;</label>
                                                        </div>
                                                    </td>
                                                    <td><a href="apps-ecommerce-orders-details.html" class="text-body fw-bold">#CM9699</a> </td>
                                                    <td>
                                                        <div class="d-flex">
                                                            <div class="d-flex align-items-center">
                                                                <div class="flex-shrink-0">
                                                                    <img src="assets/images/users/avatar-10.jpg" class="rounded-circle avatar-xs" alt="friend">
                                                                </div>
                                                                <div class="flex-grow-1 ms-2">
                                                                    <h5 class="my-0">Donna Lynch</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>Landing Section</td>
                                                    <td>
                                                        <h5 class="my-0">Yukon</h5>
                                                        <p class="mb-0 txt-muted">Avenue Johnson City</p>
                                                    </td>
                                                    <td>10 January 2022</td>
                                                    <td>
                                                        <h5 class="my-0"><span class="badge badge-success-lighten">Complete</span></h5>
                                                    </td>
                                                    <td>
                                                        <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-square-edit-outline"></i></a>
                                                        <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-delete"></i></a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>