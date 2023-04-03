import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { v4 as uuid } from 'uuid';

function Survey() {
  const submission_id = uuid().slice(0,8);
  //console.log(submission_id);
  const questions=[
    {
        "question": "How satisfied are you with our products?",
        "type": "rating",
        "limit": 5,
    },
    {
        "question": "How fair are the prices compared to similar retailers?",
        "type": "rating",
        "limit": 5,
    },
    {
        "question": "How satisfied are you with the value for money of your purchase?",
        "type": "rating",
        "limit": 5,
    },
    {
        "question": "On a scale of 1-10 how would you recommend us to your friends and family?",
        "type": "rating",
        "limit": 10,
    },
    {
        "question": "What could we do to improve our service?",
        "type": "text",
    },
  ]


    const [index, setIndex] = React.useState(0);
    const [responses, setResponses] = React.useState([]);
    const [message, setMessage] = React.useState('');

    const resetButtonColor = () => {
        const buttons = document.getElementsByClassName('option-btn');
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].style.backgroundColor = 'white';
        }
    }

    const changeButtonColor = (e) => {
        const buttons = document.getElementsByClassName('option-btn');
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].style.backgroundColor = 'white';
        }
        e.target.style.backgroundColor = 'red';
    }
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleConfirm = () => {
        //console.log(responses);
        localStorage.setItem(submission_id, JSON.stringify(responses));
        setShow(false);
        setResponses([]);
        setIndex(0);
        setMessage('');
        window.location.href = "/thankyou";
    }


  return (
    <div className=''
        style={{
            paddingTop: '10vh',
            height: '100vh',
            backgroundColor: 'lightblue',
        }}
    >
        <h3>
            Customer Survey
        </h3>
        {
            <div className='container mt-4'>
                <div className='row'>
                        <h4
                             style={{
                                display: 'flex', justifyContent:'flex-end'
                            }}
                        >
                            {index+1}/{questions.length}
                        </h4>
                </div>
                <div className='row mt-5'>
                    <div className='col-12'>
                        <h5>
                            {index+1}. {questions[index]["question"]}
                        </h5>
                    </div>
                </div>
                {
                    questions[index].type === "rating" ?
                    <div className='row mt-5'>
                        <div className='col-12'>
                                {
                                    [...Array(questions[index].limit)].map((e, i) => {
                                        return (
                                            <button type="button" className="btn btn-light option-btn"
                                                onClick={(e) => {
                                                    setResponses([...responses, {
                                                        question: questions[index].question,
                                                        response: i+1,
                                                    }]);
                                                    changeButtonColor(e);
                                                  }
                                                }
                                            >
                                                {i+1}
                                            </button>
                                        )
                                    })
                                }
                        </div>
                    </div>
                    :
                    <div className='row mt-5'>
                        <div className='col-12'>
                            <textarea className='form-control' rows='5' placeholder='Enter your response here'
                                onChange={(e) => {
                                    const newResponses = responses.filter((response) => {
                                        return response.question !== questions[index].question;
                                    });
                                    newResponses.push({
                                        question: questions[index].question,
                                        response: e.target.value,
                                    });
                                    setResponses(newResponses);
                                }
                            }
                            ></textarea>
                        </div>
                    </div>
                }   
                {
                    index>0 ?
                    <>
                        <button type="button" className="btn btn-primary mt-5"
                            style={{
                                marginRight: '10px',
                            }}
                            onClick={() => {
                                setIndex(index-1);
                            }}
                        >
                            Previous
                        </button>
                    </>
                    : null
                }
                {
                    index === questions.length-1 ?
                    <>
                        <button type="button" className="btn btn-danger mt-5"
                            onClick={() => {
                                setShow(true);
                              }
                            }
                        >
                            Submit
                        </button>
                    </>
                    :
                    <>
                        <button type="button" className="btn btn-light mt-5"
                            style={{
                                border: "none",
                                marginLeft: '10px',
                                backgroundColor:'#de07f4',
                            }}

                            onClick={() => {
                                setIndex(index+1);
                                resetButtonColor();
                                if (questions[index].type === "text") {
                                    setResponses([...responses, {
                                        question: questions[index].question,
                                        response: message,
                                    }]);
                                    setMessage('');
                                }
                                }
                            }
                        >
                            Next
                        </button>
                    </>
                }
          </div>
        }
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirm</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to submit the survey?
          Please click on the Confirm button to submit.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger"
            onClick={() => {
                handleConfirm();
            }}
          >Confirm</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Survey
