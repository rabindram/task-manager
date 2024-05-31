import { Form, useNavigate } from "react-router-dom";

const TaskSummaryHeader = () => {

  const navigate = useNavigate();

  const handleAddTask = () => {
    console.log("add task clicked.")
    navigate("/addTask");
  };

  return (
    <div className="card-body">
        <div className="row mb-2">
          <div className="col-xl-8">
            <Form className="row gy-2 gx-2 align-items-center justify-content-between">
              <div className="col-auto">
                <label htmlFor="inputPassword2" className="visually-hidden">
                  Search
                </label>
                <input
                  type="search"
                  className="form-control"
                  id="inputPassword2"
                  placeholder="Search"
                />
              </div>
              <div className="col-auto">
                <div className="d-flex align-items-center">
                  <label htmlFor="status" className="me-2">
                    Status
                  </label>
                  <select className="form-select" id="status-select">
                    <option defaultValue>Choose...</option>
                    <option value="1">Open</option>
                    <option value="1">Pending</option>
                    <option value="1">Done</option>
                  </select>
                </div>
              </div>
            </Form>
          </div>
          <div className="col-xl-4">
            <div className="text-xl-end mt-xl-0 mt-2">
              <button type="button" className="btn btn-danger mb-2 me-2" onClick={handleAddTask}>
                <i className="mdi mdi-basket me-1"></i> Add New Task
              </button>
              <button type="button" className="btn btn-light mb-2">
                Export
              </button>
            </div>
          </div>
          <div className="table-responsive">
            <table className="table table-centered table-nowrap mb-0">
              <thead className="table-light">
                <tr>
                  <th style={{ width: "20px" }}>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customCheck1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="customCheck1"
                      >
                        &nbsp;
                      </label>
                    </div>
                  </th>
                  <th>Task ID</th>
                  <th>Customers</th>
                  <th>Project</th>
                  <th>Date Order</th>
                  <th>Order Status</th>
                  <th style={{ width: "125px" }}>Action</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
  )
}

export default TaskSummaryHeader;