/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import ApplePay from "../icons/apple-pay.png"
import MasterCard from "../icons/Mastercard-Logo.wine.png"
import Paypal from "../icons/paypal.png"
import visa from "../icons/visa.png"
import FacebookIcon from "../icons/square-facebook.svg"
import PinterestIcon from "../icons/pinterest.svg"
import InstagramIcon from "../icons/instagram.svg"
import YoutubeIcon from "../icons/youtube.svg"


function Footer () {
  return (
    <div className="footer" >
    <div className="footer-box">

    <div className="footer-header">
    <h5 className="footer-title">Nine</h5>
    <p>We believe in a world where you have total freedom to be you, without judgement. To experiment. To express yourself. To be brave and grab life as the extraordinary adventure it is. </p>
    </div>
    <div className="footer-links">
    <h5>Useful links</h5>
    <ul className="otherlinks">
    <li className="findoutMore"><a  href="#">GTC</a></li>
    <li className="findoutMore"><a  href="#">Retruns</a></li>
    <li className="findoutMore"><a  href="#">FAQs</a></li>
    <li className="findoutMore"><a  href="#">BLOG</a></li>
    <li className="findoutMore"><a  href="#">Contact us</a></li>
    
    </ul>
    </div>
    </div>
    <hr />
    <div className="footer-socialBox">
      <div className="socials">
      <img alt="facebook icon" src={FacebookIcon}/>
      <img alt="pinterest icon" src={PinterestIcon}/>
      <img alt="instagram icon" src={InstagramIcon}/>
      <img alt="youtube icon" src={YoutubeIcon}/>
      </div>
      <div className="payment">
      <img alt="visa icon"  src={visa}/>
      <img alt="mastercard icon" src={MasterCard}/>
      <img alt="applePay icon" src={ApplePay}/>
      <img alt="Paypal icon" src={Paypal}/>
      </div>
      <p className="copyright">© 2023, Nine - Japan</p>
    </div>
    </div>
  )
}


export default Footer