import React, { useState } from "react";
import "../styles/num.css";
import { numadd, numsub, numdiv, nummul } from "../actions/numAction";
import { connect, useDispatch } from "react-redux";
import bgimg from "../assets/cover-img.png";
import { useNavigate } from "react-router-dom";

function NumPage({ final }) {
  const navigate = useNavigate();
  const [numVal, setNumVal] = useState(0);
  const dispatch = useDispatch();
  const clearInput = () => {
    document.getElementById("inputArea").value = "";
  };

  return (
    <>
      <div className="Landing-Section">
        <div className="container">
          <div className="row reverse ">
            <div className="col-md-6 flex-column  d-flex ">
              <div className="row mb-5">
                <h1 className="mt-5 head-text">Number Page</h1>
              </div>
              <div className="Num-Container">
                <div className="row">
                  <input
                    type="number"
                    onChange={(e) => setNumVal(parseInt(e.target.value))}
                    id="inputArea"
                    placeholder="Enter the input"
                    className="form-control mb-2"
                  ></input>
                  <span id="ResultText">{final?.final || 0}</span>
                  <button
                    onClick={() => {
                      dispatch(numadd(numVal));
                      clearInput();
                    }}
                    type="button"
                    class="btn btn-info mb-2"
                    data-toggle="button"
                    aria-pressed="false"
                  >
                    +
                  </button>
                  <button
                    onClick={() => {
                      dispatch(numsub(numVal));
                      clearInput();
                    }}
                    type="button"
                    class="btn btn-info mb-2"
                    data-toggle="button"
                    aria-pressed="false"
                  >
                    -
                  </button>
                  <button
                    onClick={() => {
                      dispatch(nummul(numVal));
                      clearInput();
                    }}
                    type="button"
                    class="btn btn-info mb-2"
                    data-toggle="button"
                    aria-pressed="false"
                  >
                    *
                  </button>
                  <button
                    onClick={() => {
                      dispatch(numdiv(numVal));
                      clearInput();
                    }}
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
    final: state.final,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    // calcadd: () => {
    //   dispatch(calcadd());
    // },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(NumPage);
