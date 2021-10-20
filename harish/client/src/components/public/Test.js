import React, { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { Link } from 'react-router-dom';

let Test=()=>{

    return(
        <React.Fragment>            
            <div className="container">
                <div className="row">
                    <div className="col-md-8 my-5 mx-auto">
                        <Tabs defaultActiveKey="dbms" id="uncontrolled-tab-example">
                            <Tab eventKey="dbms" title="DBMS">
                            <div className="row bg-light pt-2">
                                    <div className="col-md-10">
                                        <div className="mx-5 pt-2"><h5>DBMS Test 1</h5></div>
                                    </div>
                                    <div className="col-md-2 py-2 text-center ">
                                        <Link to={`/DBMS/Test/1`}>
                                            <button className="btn btn-info btn-sm" type="submit" >Attempt</button>
                                        </Link>
                                    </div>

                                    <div className="col-md-10">
                                        <div className="mx-5 pt-2"><h5>DBMS Test 2</h5></div>
                                    </div>
                                    <div className="col-md-2 py-2 text-center ">
                                        <Link to={`/DBMS/Test/2`}>
                                            <button className="btn btn-info btn-sm" type="submit" >Attempt</button>
                                        </Link>
                                    </div>

                                    <div className="col-md-10">
                                        <div className="mx-5 pt-2"><h5>DBMS Test 3</h5></div>
                                    </div>
                                    <div className="col-md-2 py-2 text-center ">
                                        <Link to={`/DBMS/Test/3`}>
                                            <button className="btn btn-info btn-sm" type="submit" >Attempt</button>
                                        </Link>
                                    </div>

                                    <div className="col-md-10">
                                        <div className="mx-5 pt-2"><h5>DBMS Test 4</h5></div>
                                    </div>
                                    <div className="col-md-2 py-2 text-center ">
                                        <Link to={`/DBMS/Test/4`}>
                                            <button className="btn btn-info btn-sm" type="submit" >Attempt</button>
                                        </Link>
                                    </div>

                                    <div className="col-md-10">
                                        <div className="mx-5 pt-2"><h5>DBMS Test 5</h5></div>
                                    </div>
                                    <div className="col-md-2 py-2 text-center ">
                                        <Link to={`/DBMS/Test/5`}>
                                            <button className="btn btn-info btn-sm" type="submit" >Attempt</button>
                                        </Link>
                                    </div>

                                    <div className="col-md-10">
                                        <div className="mx-5 pt-2"><h5>DBMS Test 6</h5></div>
                                    </div>
                                    <div className="col-md-2 py-2 text-center ">
                                        <Link to={`/DBMS/Test/6`}>
                                            <button className="btn btn-info btn-sm" type="submit" >Attempt</button>
                                        </Link>
                                    </div>

                                    <div className="col-md-10">
                                        <div className="mx-5 pt-2"><h5>DBMS Test 7</h5></div>
                                    </div>
                                    <div className="col-md-2 py-2 text-center ">
                                        <Link to={`/DBMS/Test/7`}>
                                            <button className="btn btn-info btn-sm" type="submit" >Attempt</button>
                                        </Link>
                                    </div>

                                    <div className="col-md-10">
                                        <div className="mx-5 pt-2"><h5>DBMS Test 8</h5></div>
                                    </div>
                                    <div className="col-md-2 py-2 text-center ">
                                        <Link to={`/DBMS/Test/8`}>
                                            <button className="btn btn-info btn-sm" type="submit" >Attempt</button>
                                        </Link>
                                    </div>

                                    <div className="col-md-10">
                                        <div className="mx-5 pt-2"><h5>DBMS Test 9</h5></div>
                                    </div>
                                    <div className="col-md-2 py-2 text-center ">
                                        <Link to={`/DBMS/Test/9`}>
                                            <button className="btn btn-info btn-sm" type="submit" >Attempt</button>
                                        </Link>
                                    </div>

                                    <div className="col-md-10">
                                        <div className="mx-5 pt-2"><h5>DBMS Test 10</h5></div>
                                    </div>
                                    <div className="col-md-2 py-2 text-center ">
                                        <Link to={`/DBMS/Test/10`}>
                                            <button className="btn btn-info btn-sm" type="submit" >Attempt</button>
                                        </Link>
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey="os" title="OS">
                            <div className="row bg-light pt-2">
                                    <div className="col-md-10">
                                        <div className="mx-5 pt-2"><h5>OS Test 1</h5></div>
                                    </div>
                                    <div className="col-md-2 py-2 text-center ">
                                        <Link to={`/OS/Test/1`}>
                                            <button className="btn btn-info btn-sm" type="submit" >Attempt</button>
                                        </Link>
                                    </div>

                                    <div className="col-md-10">
                                        <div className="mx-5 pt-2"><h5>OS Test 2</h5></div>
                                    </div>
                                    <div className="col-md-2 py-2 text-center ">
                                        <Link to={`/OS/Test/2`}>
                                            <button className="btn btn-info btn-sm" type="submit" >Attempt</button>
                                        </Link>
                                    </div>

                                    <div className="col-md-10">
                                        <div className="mx-5 pt-2"><h5>OS Test 3</h5></div>
                                    </div>
                                    <div className="col-md-2 py-2 text-center ">
                                        <Link to={`/OS/Test/3`}>
                                            <button className="btn btn-info btn-sm" type="submit" >Attempt</button>
                                        </Link>
                                    </div>

                                    <div className="col-md-10">
                                        <div className="mx-5 pt-2"><h5>OS Test 4</h5></div>
                                    </div>
                                    <div className="col-md-2 py-2 text-center ">
                                        <Link to={`/OS/Test/4`}>
                                            <button className="btn btn-info btn-sm" type="submit" >Attempt</button>
                                        </Link>
                                    </div>

                                    <div className="col-md-10">
                                        <div className="mx-5 pt-2"><h5>OS Test 5</h5></div>
                                    </div>
                                    <div className="col-md-2 py-2 text-center ">
                                        <Link to={`/OS/Test/5`}>
                                            <button className="btn btn-info btn-sm" type="submit" >Attempt</button>
                                        </Link>
                                    </div>

                                    <div className="col-md-10">
                                        <div className="mx-5 pt-2"><h5>OS Test 6</h5></div>
                                    </div>
                                    <div className="col-md-2 py-2 text-center ">
                                        <Link to={`/OS/Test/6`}>
                                            <button className="btn btn-info btn-sm" type="submit" >Attempt</button>
                                        </Link>
                                    </div>

                                    <div className="col-md-10">
                                        <div className="mx-5 pt-2"><h5>OS Test 7</h5></div>
                                    </div>
                                    <div className="col-md-2 py-2 text-center ">
                                        <Link to={`/OS/Test/7`}>
                                            <button className="btn btn-info btn-sm" type="submit" >Attempt</button>
                                        </Link>
                                    </div>

                                    <div className="col-md-10">
                                        <div className="mx-5 pt-2"><h5>OS Test 8</h5></div>
                                    </div>
                                    <div className="col-md-2 py-2 text-center ">
                                        <Link to={`/OS/Test/8`}>
                                            <button className="btn btn-info btn-sm" type="submit" >Attempt</button>
                                        </Link>
                                    </div>

                                    <div className="col-md-10">
                                        <div className="mx-5 pt-2"><h5>OS Test 9</h5></div>
                                    </div>
                                    <div className="col-md-2 py-2 text-center ">
                                        <Link to={`/OS/Test/9`}>
                                            <button className="btn btn-info btn-sm" type="submit" >Attempt</button>
                                        </Link>
                                    </div>

                                    <div className="col-md-10">
                                        <div className="mx-5 pt-2"><h5>OS Test 10</h5></div>
                                    </div>
                                    <div className="col-md-2 py-2 text-center ">
                                        <Link to={`/OS/Test/10`}>
                                            <button className="btn btn-info btn-sm" type="submit" >Attempt</button>
                                        </Link>
                                    </div>
                                </div>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Test;            