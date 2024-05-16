import React, { useEffect } from "react";
import { useState } from "react";
import "./Home.scss"
function Home() {
  const [data, setData] = useState([]);

  async function getAllData() {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => setData(data));
  }
  function handleDelete(id) {
    fetch("http://localhost:3000/products" + id, {
  method: 'DELETE',
})
    .then(response => response.json())

  }
  useEffect(() => {
    getAllData();
  });

  return (
    <>
    <section className="hero">
<img src="https://preview.colorlib.com/theme/pulse/img/slider/slider-1.jpg" alt="" className="img"/>
<div className="title-text">
<h1 className="title">
Food and more<span>.</span>
</h1>
<p>By Chef Francis Smith</p>
</div>


    </section>


    <section className="welcome">
      <h2 className="welcome-tite">Welcome</h2>
<div className="cards">
    <div className="card">
        <div className="date">2002</div>
        <div className="text">In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</div>
       
    </div>
    <div className="card">
        <div className="date">2002</div>
        <div className="text">In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</div>
    
    </div>
    <div className="card">
        <div className="date">2002</div>
        <div className="text">In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</div>
    </div>
</div>
    </section>
    <section className="testimonials">
    <img src="	https://preview.colorlib.com/theme/pulse/img/review-bg.jpg" alt="" className="img" />

<div className="testimonials-title-text">
  <h2 className="testimonials-title">Testimonials</h2>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis error voluptates blanditiis, quas beatae eum. Quae dolorum fugiat autem illo iusto accusamus maiores veritatis sint, enim voluptate sequi vitae labore?</p>
 </div>
    </section>
      {data.map((x) => (
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>age</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{x.name}</td>
              <td>{x.age}</td>
              <td onClick={()=>handleDelete(x._id)}>delete</td>
          
            </tr>
          </tbody>
        </table>
      ))}
    </>
  );
}

export default Home;
