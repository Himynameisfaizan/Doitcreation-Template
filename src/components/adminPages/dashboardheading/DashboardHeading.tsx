import Image from "next/image";
import product2 from "../../../../public/assets/img/thumb/Swati Ray.png";

const DashboardHeading = () => {
    return(
        <>
            <div className="dashboard-heading">
                <div className="">
                  <h2>Dashboard</h2>
                  <p>Check your website overview and manage it.</p>
                </div>
                <div className="admin-image">
                  <Image
                    src={product2}
                    alt="admin-image"
                    className="do-it-image"
                  />
                  <div className="">
                    <p>Do it creation</p>
                    <a href="/">Signout</a>
                  </div>
                </div>
              </div>
        </>
    )
}

export default DashboardHeading;