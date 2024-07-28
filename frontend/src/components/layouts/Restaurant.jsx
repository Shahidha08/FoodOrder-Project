import React from 'react'

export default function Restaurant() {
  return (
    <div className="col-sm-12 col-md-6 col-lg-3 my-3">
        <div className="card p-3 rounded">
            <img src='https://b.zmtcdn.com/data/pictures/chains/1/3000091/1adb116d088669540c89150836d668f9.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*' alt="Domino's"/>

            <div className="card-body d-flex flex-column">
            <h5 className="card-title">Dominos Pizza</h5>
            <p className="rest_address">
                123,street,place,city,6200000,State
            </p>
            <div className="rating-outer">
                <div className="rating-inner"></div>
                    <span id="no_of_reviews">
                        (140 reviews)
                    </span>
                
            </div>
            </div>
        </div>
      
    </div>
  )
}
