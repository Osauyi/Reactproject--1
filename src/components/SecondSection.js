import React from "react"
import Hoodie1 from "../images/narutoH.jpg"
import Hoodie2 from "../images/onePieceH.jpg"
import Hoodie3 from "../images/hoodie3.jpg"
import Hoodie4 from "../images/hoodie4.jpg"
import PhoneCase1 from "../images/phonecase_low.png" 
import PhoneCase2 from "../images/phonecase1.jpg" 
import PhoneCase3 from "../images/phonecase2_low.png" 
import PhoneCase4 from "../images/phonecase3_low.png" 


function SecondSection () {
  return (
    <div className="secondSection">
       <h3>selected for you</h3>
    <div className="case-box">
       <Case 
        img={Hoodie1}
        name="Green AOT Hoodie"
        price="$59.00"
        newPrice="$44.00"
         isNewPrice = {true}
       />
       <Case 
        img={Hoodie2}
        name="Purple JJK Hoodie"
        price="$49.00"
        newPrice="$44.00"
        isNewPrice = {true}
       />
       <Case 
        img={Hoodie3}
        name="3d-printed Goku hoodie"
        price="$45.00"
        newPrice="$44.00"
         isNewPrice = {true}
       />
       <Case 
        img={Hoodie4}
        name="Red Bakugo hoodie"
        price="$44.00"
         isNewPrice = {false}
       />
    </div>
    <div className="Phonecase-box">
       <Case 
        img={PhoneCase1}
        name="Itachi's phone case"
        price="$19.00"
        isNewPrice = {false}
       />
       <Case 
        img={PhoneCase2}
        name="Sukuna Jjk phone case"
        price="$19.00"
        isNewPrice = {false}
       />
       <Case 
        img={PhoneCase3}
        name="Luffy's phone case"
        price="$19.00"
        isNewPrice = {false}
       />
       <Case 
        img={PhoneCase4}
        name="Samurai phone case"
        price="$19.00"
        isNewPrice = {false}
       />
    </div>
    </div>
  )
}

function Case (props) {

  const styles = {  textDecoration: props.isNewPrice ? "line-through" : "none" }

  return (
    <div className="case">
    <img src={props.img} alt="hoodie-img" />
    <h4>{props.name} </h4>
    <div className="pricesbox" >
      <p className="prices" style={styles}>{props.price}</p>
      <p className="newPrice">{props.newPrice}</p>
    </div>
    
    </div>
    
  )
}




export default SecondSection 