import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';

const Home=()=>{
    return(
        <React.Fragment>
            <div className="bg-info py-5">
                <div className="d-flex flex-column justify-content-center align-items-center text-white py-5 my-5">
                    <h1>WELCOME</h1>                    
                    <h5 className="mx-5 text-center">Experience Now A Brand New Shopping Mall On Your Fingertips</h5>
                </div>
            </div>            
            <Jumbotron fluid className="mb-0">
                <Container>
                    <h1>Hi.</h1>
                    <p className="lead"> I am Aman, a Final Year Student, pursuing Master of Computer
                        Applications from National Institute of Technology, Trichy.
                        I have created this website with the help of ReactJS and Redux for front-end,
                        ExpressJS for server, NodeJS for back-end, and MongoDB Atlas
                        for database.
                    </p>
                    
                    <p className="text-danger"> 
                        Please help me to test my project.<span className="text-success"> kindly register 
                        yourself and buy some products with fake money and let me know if there are any bugs.
                        </span>
                    </p>
                    
                </Container>
            </Jumbotron>            
        </React.Fragment>
    )
}

export default Home;