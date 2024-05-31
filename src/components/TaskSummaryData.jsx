import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { Form, useNavigate } from "react-router-dom";

const TaskSummaryData = ({task}) => {
  const navigate = useNavigate();

  const handleAddTask = () => {
    console.log("add task clicked.");
    navigate("/addTask");
  };

  return (
    <div className="card-body">
      <div className="row mb-2">
        <div className="table-responsive">
          <table className="table table-centered table-nowrap mb-0">
            <tbody>
              <tr>
                <td style={{ width: "20px" }}>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="customCheck2"
                    />
                    <label className="form-check-label" htmlFor="customCheck2">
                      &nbsp;
                    </label>
                  </div>
                </td>
                <td>
                  <a
                    href="apps-ecommerce-orders-details.html"
                    className="text-body fw-bold"
                  >
                    {task.taskName}
                  </a>{" "}
                </td>
                <td>
                  <div className="d-flex">
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0">
                        <img
                          src="assets/images/users/avatar-1.jpg"
                          className="rounded-circle avatar-xs"
                          alt="friend"
                        />
                      </div>
                      <div className="flex-grow-1 ms-2">
                        <h5 className="my-0">{task.customerName}</h5>
                      </div>
                    </div>
                  </div>
                </td>
                <td>{task.project}</td>
                <td>{task.date}</td>
                <td>
                  <h5 className="my-0">
                    <span className="badge-info-lighten">{task.taskStatus}</span>
                  </h5>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-secondary button-edit"
                  >
                    <FaEdit />
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger button-delete"
                  >
                    <AiFillDelete />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TaskSummaryData;