import React from "react"

function ThirdSection() {
    return(
      <div>
      <div className="thirdsection-firstBlock">
        <div className="thirdSection-text">
          <h3>At Nine store</h3>
          <p>we are dedicated to providing our customers with the latest and greatest in fashion. We believe in the power of self-expression through fashion and strive to offer a diverse range of clothing.</p>
        </div>
      </div>
        <div className="invite-form">
        <h3>JOIN OUR EXCLUSIVE PRIVATE CLUB</h3>
        <p>And enjoy many benefits and discounts</p>
        <form >
          <label htmlFor="email"></label>
            <input className="input-form"  type="email" name="email" placeholder="E-mail address"/>
          <button className="register">register</button>
        </form>
        </div>
        <div className="thridsection-error">
          <p>Error validating access token: The session has been invalidated because the user changed their password or Facebook has changed the session for security reasons.</p>
        </div>
      </div>
    )
}

export default ThirdSection