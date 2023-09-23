import React from 'react'

function Footer() {
  return (
    <div>
      <section className="footer">
      <div className="footer-container container">
        <div className="footer-box">
          <a href="#" className="logo">
           
          </a>
          <img src='/images/tarun.png' alt="" />
          <p>Phone:+9172848 52000</p>
          <p>Email:ibfo@upsilonofficial.com</p>
          <div className="social">
            <a href="#">
              <i className="bx bxl-facebook"></i>
            </a>

            <a href="#">
            <i class='bx bxl-instagram'></i>
            </a>
            <a href="#">
              <i className="bx bxl-youtube"></i>
            </a>
            {/* <a href="#"><i className='bx bxl-facebook'></i></a> */}
          </div>
        </div>
        <div className="footer-box">
          <h3>Other Links</h3>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Refunnd & Cancellation</a>
          <a href="#">Terms of Services</a>
          <a href="#">Refund Policy</a>

        </div>
        <div className="footer-box">
          <h3>Information</h3>
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
        </div>

        <div className="footer-box">
          <h3>Newsletter</h3>
          
                    <input type="text" class="input-search" placeholder="Search"/><br />
                    <button type="submit" class="btn-search">Subscribe</button>
             
        </div>
      </div>
      <div className="copyright"></div>
      <p>Copyright&#169;2022, upsilonofficial.com</p>
    </section>

    </div>
  )
}

export default Footer
