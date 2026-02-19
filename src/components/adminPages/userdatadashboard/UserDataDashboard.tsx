import AsideLinks from "../asidelinks/AsideLinks";
import DashboardHeading from "../dashboardheading/DashboardHeading";

const dummyUsers = [
  {
    name: "Joe Martin",
    email: "joe@mail.com",
    phone: "821 456 269",
    message: "Interested in branding",
  },
  {
    name: "Angeline",
    email: "angeline@mail.com",
    phone: "821 456 266",
    message: "UI/UX design",
  },
  {
    name: "Angeline",
    email: "angeline@mail.com",
    phone: "821 456 266",
    message: "UI/UX design",
  },
  {
    name: "Angeline",
    email: "angeline@mail.com",
    phone: "821 456 266",
    message: "UI/UX design",
  },
  {
    name: "Angeline",
    email: "angeline@mail.com",
    phone: "821 456 266",
    message: "UI/UX design",
  },
  {
    name: "Peterson",
    email: "peterson@mail.com",
    phone: "821 456 264",
    message: "Website enquiry",
  },
  {
    name: "Angeline",
    email: "angeline@mail.com",
    phone: "821 456 266",
    message: "UI/UX design",
  },
  {
    name: "Peterson",
    email: "peterson@mail.com",
    phone: "821 456 264",
    message: "Website enquiry",
  },
];

const UserDataDashboard = () => {
  return (
    <>
      <section id="dashboard">
        <div className="dashboard-main-container">
          <div className="dashboard-container">
            <AsideLinks />
            <div className="right-side">
              <DashboardHeading />

              <UsersSection />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const UsersSection = () => {
  return (
    <div className="dashboard-user-data">
      <h3 className="user-heading">Registered Users</h3>

      <div className="user-table">
        <div className="user-table-header">
          <span>S.No</span>
          <span>Name</span>
          <span>Email</span>
          <span>Phone</span>
          <span>Message</span>
          <span>Action</span>
        </div>

        {dummyUsers.map((user, index) => (
          <div className="user-table-row">
            <span>{index + 1}</span>
            <span className="user-name">{user.name}</span>
            <span>
              <a href="">{user.email}</a>
            </span>
            <span>
              <a href="">{user.phone}</a>
            </span>
            <span className="user-message">{user.message}</span>
            <span className="action-icon">
              <i className="ri-delete-bin-line delete"></i>
              <i className="ri-edit-2-fill edit"></i>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDataDashboard;
