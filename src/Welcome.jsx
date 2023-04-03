import React from 'react'

function Welcome() {

  return (
    <div>
        <div       
          style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "lightblue"
        }}
    >
      <h1>
        Welcome to our store!
      </h1>
      <p>
        Please fill out our survey to help us improve our store.
      </p>
      <br/>
      <button type="button" className="btn btn-light"
      style={{
        border: "none",
        fontSize: "20px",
        fontWeight: "bold",
        color: "black"
      }}
        onClick={() => {
            window.location.href = "/survey";
        }}
      >Start Survey</button>
    </div>      
    </div>
  )
}

export default Welcome;
