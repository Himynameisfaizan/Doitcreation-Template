const BannerForm = () => {
  return (
    <>
      <section id="BannerForm">
        <div className="banner-form-main-container">
          <div className="banner-form-container ">
            {/* <h4>Get a personalized quote from Do it creation</h4> */}
            <form action="">
              <div className="fullName">
                <input
                  type="text"
                  name="fullName"
                  id=""
                  required
                  placeholder="Full name"
                />
              </div>
              <div className="mobileNo">
                <input
                  type="text"
                  name="mobile"
                  id=""
                  required
                  placeholder="Phone number"
                />
              </div>
              <div className="message">
                <input
                  type="text"
                  name="message"
                  id=""
                  required
                  placeholder="Describe your requirement"
                />
              </div>
              <button>submit</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default BannerForm;
