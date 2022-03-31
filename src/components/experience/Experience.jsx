import "./experience.scss";

export default function Experience() {
  const data = [
    {
      id: 1,
      companyName: "Eastern Africa Statistical Training Center",
      jobTitle: "System Developer",
      description: "Designing and developing systems.",
      date: "January 2022 – Present",
    },
    {
      id: 2,
      companyName: "Graduates Associate Company",
      jobTitle: "IT Officer",
      description: "Designing, Implementing, Hosting and maintenance of the company’s E-commerce website.",
      date: "June 2021 – December 2021",
    },
    {
      id: 3,
      companyName: "Tanzania Education Research Network (TERNET)",
      jobTitle: "Software Developer",
      description: "Customizing Open Source Software (mainly DSPACE) according to the need of a certain organization.",
      date: "July 2018 – September 2018",
    },
  ]
  return (
    <div className="experience" id="experience">
      <h1>Experience</h1>
      <div className="container">
        {data.map((d) => (
          <div className="card">
          <div className="top">
            <h3>{d.companyName}</h3>
            <h4>{d.jobTitle}</h4>
          </div>
          <div className="center">
          {d.description}
          </div>
          <div className="bottom">
            <h4>{d.date}</h4>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}
