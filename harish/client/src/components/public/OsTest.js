import React, { useEffect, useState } from 'react';
import Axios from 'axios';
let OsTest=(props)=>{

    const [test,setTest]=useState({})
    const [flag,setFlag]=useState(0)
    let count=0
    const [temp,setTemp]=useState([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1])

    useEffect(()=>fun(),[])    
    const fun=async()=>{        
        const response = await Axios.get(`http://localhost:5000/os/${props.match.params.id}`);
        setTest({...response.data.os})
        if(response.data.os)
            setFlag(1)
        else 
            setFlag(0)
    }
    if(flag==0)
        return(<React.Fragment>
            <h1 className="text-center my-5">Data is not available for this test</h1>
        </React.Fragment>)
    else if(flag==2)   
        return(<React.Fragment>
            <h2 className="text-center mt-3 text-info">Compilation OS Test {test.testno}</h2>
            {test.questions.map((question,index)=>{
                if(question.answer!=temp[index])
                return(
                    <React.Fragment>
                        <div className="container">                
                            <div className="row">
                                <div className="col-md-9 mx-auto">
                                    <h4>Q{index+1}. {question.question}</h4>
                                    <p className="my-1 ml-3">(1) {question.option1}</p>
                                    <p className="my-1 ml-3">(2) {question.option2}</p>
                                    <p className="my-1 ml-3">(3) {question.option3}</p>
                                    <p className="my-1 ml-3">(4) {question.option4}</p>
                                    <h5 className="text-success">Correct Answer : {question.answer}</h5>
                                    <p className="lead">Explanation : {question.description}</p>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                )
                else 
                {
                    count=count+1
                }
            })}
            <h2 className="text-center mt-3 text-secondary">Your score is {count}/10 i.e. {count*10}%</h2>
        </React.Fragment>)
    else 
    return(
        <React.Fragment>
            {/* {JSON.stringify(temp)} */}
            <div className="container">
                <div className="row">
                    <div className="col-md-9 mx-auto">
                    <h2 className="text-center mt-3 text-danger">OS Test {test.testno}</h2>
                        {/* question 1 */}
                        <h4 className="mt-4">Q1. {test.questions[0].question}</h4>
                        <div className="form-check ml-3">
                            <input className="form-check-input" type="radio" name="q1" id="q1label1" onChange={()=>{
                                temp[0]=1
                            }}/>
                            <label className="form-check-label" for="q1label1">{test.questions[0].option1}</label>
                        </div>
                        <div className="form-check ml-3">
                            <input className="form-check-input" type="radio" name="q1" id="q1label2" onChange={()=>{
                                temp[0]=2
                            }}/>
                            <label className="form-check-label" for="q1label2">{test.questions[0].option2}</label>
                        </div>
                        <div className="form-check ml-3">
                            <input className="form-check-input" type="radio" name="q1" id="q1label3" onChange={()=>{
                                temp[0]=3
                            }}/>
                            <label className="form-check-label" for="q1label3">{test.questions[0].option3}</label>
                        </div>
                        <div className="form-check ml-3">
                            <input className="form-check-input" type="radio" name="q1" id="q1label4" onChange={()=>{
                                temp[0]=4
                            }}/>
                            <label className="form-check-label" for="q1label4">{test.questions[0].option4}</label>
                        </div>

                        {/* question 2 */}
                        <h4 className="mt-3">Q2. {test.questions[1].question}</h4>
                        <div className="form-check ml-3">
                            <input className="form-check-input" type="radio" name="q2" id="q2label1" onChange={()=>{
                                temp[1]=1
                            }}/>
                            <label className="form-check-label" for="q2label1">{test.questions[1].option1}</label>
                        </div>
                        <div className="form-check ml-3">
                            <input className="form-check-input" type="radio" name="q2" id="q2label2" onChange={()=>{
                                temp[1]=2
                            }}/>
                            <label className="form-check-label" for="q2label2">{test.questions[1].option2}</label>
                        </div>
                        <div className="form-check ml-3">
                            <input className="form-check-input" type="radio" name="q2" id="q2label3" onChange={()=>{
                                temp[1]=3
                            }}/>
                            <label className="form-check-label" for="q2label3">{test.questions[1].option3}</label>
                        </div>
                        <div className="form-check ml-3">
                            <input className="form-check-input" type="radio" name="q2" id="q2label4" onChange={()=>{
                                temp[1]=4
                            }}/>
                            <label className="form-check-label" for="q2label4">{test.questions[1].option4}</label>
                        </div>

                        {/* question 3 */}
                        <h4 className="mt-3">Q3. {test.questions[2].question}</h4>
                        <div className="form-check ml-3">
                            <input className="form-check-input" type="radio" name="q3" id="q3label1" onChange={()=>{
                                temp[2]=1
                            }}/>
                            <label className="form-check-label" for="q3label1">{test.questions[2].option1}</label>
                        </div>
                        <div className="form-check ml-3">
                            <input className="form-check-input" type="radio" name="q3" id="q3label2" onChange={()=>{
                                temp[2]=2
                            }}/>
                            <label className="form-check-label" for="q3label2">{test.questions[2].option2}</label>
                        </div>
                        <div className="form-check ml-3">
                            <input className="form-check-input" type="radio" name="q3" id="q3label3" onChange={()=>{
                                temp[2]=3
                            }}/>
                            <label className="form-check-label" for="q3label3">{test.questions[2].option3}</label>
                        </div>
                        <div className="form-check ml-3">
                            <input className="form-check-input" type="radio" name="q3" id="q3label4" onChange={()=>{
                                temp[2]=4
                            }}/>
                            <label className="form-check-label" for="q3label4">{test.questions[2].option4}</label>
                        </div>
                        

                        {/* question 4 */}
                        <h4 className="mt-3">Q4. {test.questions[3].question}</h4>
                        <div className="form-check ml-3">
                            <input className="form-check-input" type="radio" name="q4" id="q4label1" onChange={()=>{
                                temp[3]=1
                            }}/>
                            <label className="form-check-label" for="q4label1">{test.questions[3].option1}</label>
                        </div>
                        <div className="form-check ml-3">
                            <input className="form-check-input" type="radio" name="q4" id="q4label2" onChange={()=>{
                                temp[3]=2
                            }}/>
                            <label className="form-check-label" for="q4label2">{test.questions[3].option2}</label>
                        </div>
                        <div className="form-check ml-3">
                            <input className="form-check-input" type="radio" name="q4" id="q4label3" onChange={()=>{
                                temp[3]=3
                            }}/>
                            <label className="form-check-label" for="q4label3">{test.questions[3].option3}</label>
                        </div>
                        <div className="form-check ml-3">
                            <input className="form-check-input" type="radio" name="q4" id="q4label4" onChange={()=>{
                                temp[3]=4
                            }}/>
                            <label className="form-check-label" for="q4label4">{test.questions[3].option4}</label>
                        </div>
                        
                        {/* question 5 */}
                        <h4 className="mt-3">Q5. {test.questions[4].question}</h4>
                        <div className="form-check ml-3">
                            <input className="form-check-input" type="radio" name="q5" id="q5label1" onChange={()=>{
                                temp[4]=1
                            }}/>
                            <label className="form-check-label" for="q5label1">{test.questions[4].option1}</label>
                        </div>
                        <div className="form-check ml-3">
                            <input className="form-check-input" type="radio" name="q5" id="q5label2" onChange={()=>{
                                temp[4]=2
                            }}/>
                            <label className="form-check-label" for="q5label2">{test.questions[4].option2}</label>
                        </div>
                        <div className="form-check ml-3">
                            <input className="form-check-input" type="radio" name="q5" id="q5label3" onChange={()=>{
                                temp[4]=3
                            }}/>
                            <label className="form-check-label" for="q5label3">{test.questions[4].option3}</label>
                        </div>
                        <div className="form-check ml-3">
                            <input className="form-check-input" type="radio" name="q5" id="q5label4" onChange={()=>{
                                temp[4]=4
                            }}/>
                            <label className="form-check-label" for="q5label4">{test.questions[4].option4}</label>
                        </div>
                        
                        {/* question 6 */}
                        <h4 className="mt-3">Q6. {test.questions[5].question}</h4>
                        <div className="form-check ml-3">
                            <input className="form-check-input" type="radio" name="q6" id="q6label1" onChange={()=>{
                                temp[5]=1
                            }}/>
                            <label className="form-check-label" for="q6label1">{test.questions[5].option1}</label>
                        </div>
                        <div className="form-check ml-3">
                            <input className="form-check-input" type="radio" name="q6" id="q6label2" onChange={()=>{
                                temp[5]=2
                            }}/>
                            <label className="form-check-label" for="q6label2">{test.questions[5].option2}</label>
                        </div>
                        <div className="form-check ml-3">
                            <input className="form-check-input" type="radio" name="q6" id="q6label3" onChange={()=>{
                                temp[5]=3
                            }}/>
                            <label className="form-check-label" for="q6label3">{test.questions[5].option3}</label>
                        </div>
                        <div className="form-check ml-3">
                            <input className="form-check-input" type="radio" name="q6" id="q6label4" onChange={()=>{
                                temp[5]=4
                            }}/>
                            <label className="form-check-label" for="q6label4">{test.questions[3].option4}</label>
                        </div>

                        
                        {/* question 7 */}
                        <h4 className="mt-3">Q7. {test.questions[6].question}</h4>
                        <div className="form-check ml-3">
                            <input className="form-check-input" type="radio" name="q7" id="q7label1" onChange={()=>{
                                temp[6]=1
                            }}/>
                            <label className="form-check-label" for="q7label1">{test.questions[6].option1}</label>
                        </div>
                        <div className="form-check ml-3">
                            <input className="form-check-input" type="radio" name="q7" id="q7label2" onChange={()=>{
                                temp[6]=2
                            }}/>
                            <label className="form-check-label" for="q7label2">{test.questions[6].option2}</label>
                        </div>
                        <div className="form-check ml-3">
                            <input className="form-check-input" type="radio" name="q7" id="q7label3" onChange={()=>{
                                temp[6]=3
                            }}/>
                            <label className="form-check-label" for="q7label3">{test.questions[6].option3}</label>
                        </div>
                        <div className="form-check ml-3">
                            <input className="form-check-input" type="radio" name="q7" id="q7label4" onChange={()=>{
                                temp[6]=4
                            }}/>
                            <label className="form-check-label" for="q7label4">{test.questions[6].option4}</label>
                        </div>
                        
                        {/* question 8 */}
                        <h4 className="mt-3">Q8. {test.questions[7].question}</h4>
                        <div className="form-check ml-3">
                            <input className="form-check-input" type="radio" name="q8" id="q8label1" onChange={()=>{
                                temp[7]=1
                            }}/>
                            <label className="form-check-label" for="q8label1">{test.questions[7].option1}</label>
                        </div>
                        <div className="form-check ml-3">
                            <input className="form-check-input" type="radio" name="q8" id="q8label2" onChange={()=>{
                                temp[7]=2
                            }}/>
                            <label className="form-check-label" for="q8label2">{test.questions[7].option2}</label>
                        </div>
                        <div className="form-check ml-3">
                            <input className="form-check-input" type="radio" name="q8" id="q8label3" onChange={()=>{
                                temp[7]=3
                            }}/>
                            <label className="form-check-label" for="q8label3">{test.questions[7].option3}</label>
                        </div>
                        <div className="form-check ml-3">
                            <input className="form-check-input" type="radio" name="q8" id="q8label4" onChange={()=>{
                                temp[7]=4
                            }}/>
                            <label className="form-check-label" for="q8label4">{test.questions[7].option4}</label>
                        </div>
                        
                        {/* question 9 */}
                        <h4 className="mt-3">Q9. {test.questions[8].question}</h4>
                        <div className="form-check ml-3">
                            <input className="form-check-input" type="radio" name="q9" id="q9label1" onChange={()=>{
                                temp[8]=1
                            }}/>
                            <label className="form-check-label" for="q9label1">{test.questions[8].option1}</label>
                        </div>
                        <div className="form-check ml-3">
                            <input className="form-check-input" type="radio" name="q9" id="q9label2" onChange={()=>{
                                temp[8]=2
                            }}/>
                            <label className="form-check-label" for="q9label2">{test.questions[8].option2}</label>
                        </div>
                        <div className="form-check ml-3">
                            <input className="form-check-input" type="radio" name="q9" id="q9label3" onChange={()=>{
                                temp[8]=3
                            }}/>
                            <label className="form-check-label" for="q9label3">{test.questions[8].option3}</label>
                        </div>
                        <div className="form-check ml-3">
                            <input className="form-check-input" type="radio" name="q9" id="q9label4" onChange={()=>{
                                temp[8]=4
                            }}/>
                            <label className="form-check-label" for="q9label4">{test.questions[8].option4}</label>
                        </div>
                        
                        {/* question 10 */}
                        <h4 className="mt-3">Q10. {test.questions[9].question}</h4>
                        <div className="form-check ml-3">
                            <input className="form-check-input" type="radio" name="q10" id="q10label1" onChange={()=>{
                                temp[9]=1
                            }}/>
                            <label className="form-check-label" for="q10label1">{test.questions[9].option1}</label>
                        </div>
                        <div className="form-check ml-3">
                            <input className="form-check-input" type="radio" name="q10" id="q10label2" onChange={()=>{
                                temp[9]=2
                            }}/>
                            <label className="form-check-label" for="q10label2">{test.questions[9].option2}</label>
                        </div>
                        <div className="form-check ml-3">
                            <input className="form-check-input" type="radio" name="q10" id="q10label3" onChange={()=>{
                                temp[9]=3
                            }}/>
                            <label className="form-check-label" for="q10label3">{test.questions[9].option3}</label>
                        </div>
                        <div className="form-check ml-3 mb-5">
                            <input className="form-check-input" type="radio" name="q10" id="q10label4" onChange={()=>{
                                temp[9]=4
                            }}/>
                            <label className="form-check-label" for="q10label4">{test.questions[9].option4}</label>
                        </div>
                        <button type="button" className="btn btn-success mb-5" onClick={()=>{
                            setFlag(2)
                        }}>Submit Test</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default OsTest;            