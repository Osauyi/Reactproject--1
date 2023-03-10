/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import Logo from "../images/result.png"
import Bars from "../icons/bars-solid.svg"
import Search from "../icons/magnifying-glass-solid.svg"
import Bag from "../icons/shopping-bag-svgrepo-com.svg"
import ArrowRight from "../icons/arrow-point-to-right.png"
import ArrowLeft from "../icons/left-arrow.png"
import Close from "../icons/close.png"
import ArrowDown from "../icons/arrow-down.png"
import { calculateNewValue } from "@testing-library/user-event/dist/utils"


function openNav () {
   document.querySelector(".myLinks").style.height = "48%";
   document.querySelector(".barIcon").style.opacity = "0";
   document.querySelector(".barIcon").style.visibility = "hidden";
   document.querySelector(".close-icon").style.display = "block";
  document.querySelector(".sublinks").style.height = "30%";
}

function closeNav () {
   document.querySelector(".myLinks").style.height = "0";
  document.querySelector(".barIcon").style.opacity = "3";
  document.querySelector(".barIcon").style.visibility = "visible";
   document.querySelector(".close-icon").style.display = "none";
  document.querySelector(".sublinks").style.height = "0";
}

function closeSecondLevel () {
  document.querySelector(".myLinks").style.width = "100%";
  document.querySelector(".sublinks").style.width = "0";
  console.log("aint no way bruh")
}

function closeSearchBar () {
   document.querySelector(".searchBar").style.height = "0%";
}

function openbigSearchd() {
  document.querySelector(".searchinputContainer").style.width = "18%";
  document.querySelector(".mainSearchBar").style.display = "none";
  document.querySelector(".mainSearchBar").style.visibility = "hidden";
} 

function OpenSmallSearch () {
  document.querySelector(".searchBar").style.height = "15%";
  document.querySelector(".Research").focus()
}


    function conditionOpenSearchBar() {
       const mediaQuery = window.matchMedia('(min-width: 1400px)')
// Check if the media query is true
if (mediaQuery.matches) {
  // Then trigger an alert
  openbigSearchd()
} else{
  OpenSmallSearch()
}
    }


function secondLevelSmallW() {
   document.querySelector(".myLinks").style.width = "0";
  document.querySelector(".sublinks").style.width = "100%";
  console.log("yeet boi")
}

function secondLevelBIgW() {

  document.querySelector(".goal").style.display = "block"
}

function conditionOPenSecondLevel() {
 const mediaQuery = window.matchMedia('(min-width: 750px)')
if (mediaQuery.matches) {
  secondLevelBIgW()
} else{
  secondLevelSmallW()
}
}





function Navbar () {

  

  return (
    <div className="header">
        <div className="delivery">
          <p>Free delivery from 65 dollars of purchase</p>
        </div> 
        <div className="navbar">
        <img alt="logo" className="navbar--logo" src={Logo}/>
            <div className="navbar--iconbox">

            <li>
                <a className="navbar--linksIN mainSearchBar" onClick={conditionOpenSearchBar}><img alt="magnifying-glass" className="navbar--icon" src={Search} /></a>
                  <div className="searchBar">
                    <ul className="searching">
                        <div className="searchinputContainer">
                          <label htmlFor="text"></label>
                          <input autoFocus  className="Research"  type="text" name="search" placeholder="To research"  />
                          
                          <li><a href="#" className="close-Search" > <img alt="magnifying-glass" className="navbar--icon" src={Search} /></a></li>
                        </div>
                        <li><a href="#" className="close-icon-searchbar" onClick={closeSearchBar}><img alt="close" className="navbar--icon" src={Close} /></a></li>
                    </ul>
                  </div>
            </li>
            <li className="topIcon"><a  className="navbar--linksIN"> <img alt="shopping-bag" className="navbar--icon" src={Bag} /></a></li>
            <li><a href="#" className="close-icon" onClick={closeNav}><img alt="close" className="navbar--icon" src={Close} /></a></li>
            <li className="Barbox"><a className="navbar--linksIN barIcon" onClick={openNav}><img alt="bar-icon" className="navbar--icon " src={Bars} />
            </a>
            
              <div className="myLinks">
                <ul className="link">

                <li className="welcome-text borderStyle"><a className="navbar--links" href="#Welcome">Welcome</a></li>

                <li className="borderStyle"><a className="navbar--links" href="#Sweatshirt">Sweatshirts</a></li>

                <li className="subnav borderStyle"><a  onClick={conditionOPenSecondLevel} className="navbar--links" href="#Accessories" >Accessories <img alt="right-arrow" className="arrow--Icon" src={ArrowRight} /><img src={ArrowDown} alt="down-arrow" className="downarrow"/></a>
                      <div className="sublinks">

                      <ul className="goal">

                        <li className="accessories-arrow borderStyle" onClick={closeSecondLevel} ><img alt="right-arrow" className="arrow--Icon arrowLeft" src={ArrowLeft} /><a  className="navbar--linkeg" href="#lof">Accessories</a></li>

                        <li className="borderStyle"><a className="navbar--linkerd" href="#lof" >decals</a></li>

                        <li className="borderStyle"><a className="navbar--linkerd" href="#lof">Phone cases</a></li>

                      </ul>  
                      </div>
                </li>

                <li className="borderStyle"><a className="navbar--links" href="#The brand">The brand</a></li>

                <li className="borderStyle"><a className="navbar--links" href="#Blog">Blog</a></li>

              </ul>
                </div>
            </li>
          </div>
      </div>
    </div>
  )
}


export default Navbar