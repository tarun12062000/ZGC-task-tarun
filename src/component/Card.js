import React from 'react'

function Card() {
  return (
    <>
    <h2 className='Card_head'>Our Best Selling Parfume</h2>
    <div className='card'>
        
      <div className='card_main'>
        <div className='card_img'>
            <img src="images/card-1.jpg" className='img2' alt="" />
        </div>
        <div className='card_txt'>
            <h3>Upsilon Wild Blue Sport Perfume</h3>
            <h3>Rs. 1,369.00 <span>Rs. 1,599.00</span></h3>
            <img src="images/star.png" alt="" />
        <div>
            <button className='btn'>ADD TO CART</button>
            </div>
        </div>
      </div>

      <div className='card_main'>
        <div className='card_img'>
            <img src="images/card-2.jpg" className='img2' alt="" />
        </div>
        <div className='card_txt'>
        <h3>Upsilon Golden Sand Sport Perfume</h3>
            <h3>Rs. 1,369.00 <span>Rs. 1,599.00</span></h3>
            <img src="images/star.png" alt="" />
            <div>
            <button className='btn'>ADD TO CART</button>
            </div>
        </div>
      </div>

      <div className='card_main'>
        <div className='card_img'>
            <img src="images/card-3.jpg" className='img2' alt="reload" />
        </div>
        <div className='card_txt'>
        <h3>Upsilon Shooting Star Sport Perfume</h3>
            <h3>Rs. 1,369.00 <span>Rs. 1,599.00</span></h3>
            <img src="images/star.png" alt="" />
            <div>
            <button className='btn'>ADD TO CART</button>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Card
