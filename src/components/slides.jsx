import React, { Component } from 'react';
class Slides extends React.Component {
    render() { 
        return (<div>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="b.jpg" alt="image"/>
    </div>
    <div className="carousel-item">
      <img src="https://images.pexels.com/photos/10005504/pexels-photo-10005504.jpeg?cs=srgb&dl=pexels-henry-%26-co-10005504.jpg&fm=jpg" className="d-block w-100" alt="image"/>
    </div>
    <div className="carousel-item">
      <img src="b.jpg" className="d-block w-100" alt="image"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


        </div>
        );
    }
}
 
export default Slides;