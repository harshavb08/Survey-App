import React from 'react';

function Thankyou() {

  // after 5 seconds redirect to welcome page
    setTimeout(() => {
        window.location.href = "/";
    }, 5000);
  return (
    <div
        className='App'
    >
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
                Thank you for your time!
            </h1>
            <p>
                Your responses have been recorded.
            </p>
            <p>
                Please visit our store again!
            </p>
        </div>
    </div>
  )
}

export default Thankyou
