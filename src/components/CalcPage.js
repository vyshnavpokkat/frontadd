import React, { useState } from "react";
import "../styles/calc.css";
import { calcadd, calcdiv, calcmul, calcsub } from "../actions/index";
import { connect, useDispatch } from "react-redux";
import bgimg from "../assets/cover-img.png";
import { useNavigate } from "react-router-dom";

function CalcPage({ result }) {
  // const result = useSelector((state) => state.result)

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [inputState, setInputState] = useState({
    input1: "",
    input2: "",
  });

  return (
    <>
      <div className="Landing-Section">
        <div className="container">
          <div className="row reverse">
            <div className="col-md-6 d-flex flex-column  align-content-center">
              <div className="mb-5">
                <h1 className="text-justify mt-5 head-text">Calculator Page</h1>
              </div>
              <div className="calcContainer">
                <div className="row">
                  <input
                    type="number"
                    onChange={(e) =>
                      setInputState({
                        ...inputState,
                        input1: parseInt(e.target.value),
                      })
                    }
                    placeholder="input1"
                    className="form-control mb-2"
                  />
                  <input
                    type="number"
                    onChange={(e) =>
                      setInputState({
                        ...inputState,
                        input2: parseInt(e.target.value),
                      })
                    }
                    placeholder="input2"
                    className="form-control "
                  />
                  <span id="ResultText">{result?.result || 0}</span>
                </div>
                <div className="row">
                  <button
                    onClick={() =>
                      dispatch(calcadd(inputState.input1, inputState.input2))
                    }
                    type="button"
                    class="btn btn-info mb-2"
                    data-toggle="button"
                    aria-pressed="false"
                  >
                    +
                  </button>
                  <button
                    onClick={() =>
                      dispatch(calcsub(inputState.input1, inputState.input2))
                    }
                    type="button"
                    class="btn btn-info mb-2"
                    data-toggle="button"
                    aria-pressed="false"
                  >
                    -
                  </button>
                  <button
                    onClick={() =>
                      dispatch(calcmul(inputState.input1, inputState.input2))
                    }
                    type="button"
                    class="btn btn-info mb-2"
                    data-toggle="button"
                    aria-pressed="false"
                  >
                    *
                  </button>
                  <button
                    onClick={() =>
                      dispatch(calcdiv(inputState.input1, inputState.input2))
                    }
                    type="button"
                    class="btn btn-info mb-2"
                    data-toggle="button"
                    aria-pressed="false"
                  >
                    %
                  </button>
                </div>
              </div>
              <div
                class="btn-group"
                role="group"
                aria-label="Basic mixed styles example"
              >
                <button
                  type="button"
                  className="btn btn-warning m-1"
                  onClick={() => navigate("/calcpage")}
                >
                  CALC PAGE
                </button>

                <button
                  type="button"
                  className="btn btn-warning m-1"
                  onClick={() => navigate("/numpage")}
                >
                  NUM PAGE
                </button>
              </div>
            </div>
            <div className="col-md-6  pt-5">
              <img src={bgimg} class="img-fluid" alt="..." />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function mapStateToProps(state) {
  return {
    result: state.result,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    // calcadd: () => {
    //   dispatch(calcadd());
    // },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CalcPage);
