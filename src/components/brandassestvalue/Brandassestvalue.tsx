'use client'

const Brandassestvalue = () => {

  const assets = [
    {
      title: "Brand Design Bundle",
      desc: `This premium branding bundle offers everything you need to build, grow, and manage your brand. All of the included assets 
      have been designed to be suitable for modern digital brands and businesses.`,
      img: "/assets/img/brandAssest/1.jpeg",
      batch: "All in one"
    },
    {
      title: "Visiting Cards",
      desc: "A premium set of 50 fully editable visiting card designs, crafted for modern businesses to create a strong and professional brand impression.",
      img: "/assets/img/brandAssest/2.jpeg",
      batch: "50 visiting cards"
    },
    {
      title: "Letterhead Design",
      desc: "Premium letterhead templates with fully editable files, designed for professional and consistent brand communication.",
      img: "/assets/img/brandAssest/3.jpeg",
      batch: "50 Letter Head"
    },
    {
      title: "Brochure Design",
      desc: "Premium social branding templates",
      img: "/assets/img/brandAssest/4.jpeg",
      batch: "50 Brochure design"
    },
    {
      title: "Social Media Posts",
      desc: "High-quality product design assets",
      img: "/assets/img/brandAssest/1.jpeg",
      batch: "50 Posts"
    },
    {
      title: "Logo Intro",
      desc: "Complete digital branding ecosystem",
      img: "/assets/img/brandAssest/1.jpeg",
      batch: "Logo with Animation"
    }
  ]

  return (
    <section className="brand-section default-padding">
      <div className="brand-header">
        <h1>Brand Assets Collection</h1>
        <p>Premium branding resources designed to build powerful brand identity</p>
      </div>

      <div className="brand-grid">
        {assets.map((item, index) => (
          <div className="brand-card" key={index}>
            <div className="brand-img">
              <img src={item.img} alt={item.title}/>
              <div className="brand-overlay"></div>
            </div>

            <div className="brand-content">
              <div className="name-batch">
                <h3>{item.title}</h3>
                <span><i className="dot"></i> {item.batch}</span>
              </div>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Brandassestvalue
