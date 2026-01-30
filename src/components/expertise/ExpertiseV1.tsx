import ProcessV1 from "../process/ProcessV1";

const ExpertiseV1 = () => {
  return (
    <>
      <div className="container">
        <div className="expertise-area text-center">
          <div className="row">
            <div className="col-lg-12">
              <div className="site-heading">
                <h4 className="sub-title">Our Process </h4>
                <h2 className="title pb-4">Future Design Process!</h2>
                <div className="d-flex align-items-center justify-content-center gap-2">
                  <div
                    style={{ height: "1px", width: "1px", padding: "2px" }}
                    className="bg-white rounded-pill"
                  ></div>
                  <div
                    style={{ height: "1px", width: "1px", padding: "2px" }}
                    className="bg-white rounded-pill"
                  ></div>
                  <div
                    style={{ height: "1px", width: "1px", padding: "2px" }}
                    className="bg-white rounded-pill"
                  ></div>
                  <div
                    style={{ height: "1px", width: "120px", padding: "2px" }}
                    className="bg-white rounded-pill"
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <ProcessV1 />
        </div>
      </div>
    </>
  );
};

export default ExpertiseV1;
