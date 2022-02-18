import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'

import { faEnvelope, faHome, faPhone, faPrint } from '@fortawesome/free-solid-svg-icons';
const Footer1 = () => {
    return (
        <div>
       
    
            <MDBFooter bgColor='dark' className='text-center text-lg-start text-white'>
             
        
              <section className=''>
                <div className='container text-center text-md-start mt-5'>
                  <div className='row mt-3'>
                    <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
                      <h6 className='text-uppercase fw-bold mb-4'>
                        <i className='fas fa-gem me-3 '></i>BATA
                      </h6>
                      <p>
                      Bata India is the largest retailer and leading manufacturer of footwear in India and is a part of the Bata Shoe Organization.
                      </p>
                    </div>
        
                    <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
                      <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                      <p>
                        <a href='#!' className='text-reset'>
                          Mens shoes
                        </a>
                      </p>
                      <p>
                        <a href='#!' className='text-reset'>
                          Womens shoes
                        </a>
                      </p>
                      <p>
                        <a href='#!' className='text-reset'>
                          kids shoes
                        </a>
                      </p>
                      <p>
                        <a href='#!' className='text-reset'>
                        Mens cashual shoes
                        </a>
                      </p>
                    </div>
        
                    <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
                      <h6 className='text-uppercase fw-bold mb-4'></h6>
                      <p>
                        <a href='#!' className='text-reset'>
                          Pricing
                        </a>
                      </p>
                      <p>
                        <a href='#!' className='text-reset'>
                          Settings
                        </a>
                      </p>
                      <p>
                        <a href='#!' className='text-reset'>
                          Orders
                        </a>
                      </p>
                      <p>
                        <a href='#!' className='text-reset'>
                          Help
                        </a>
                      </p>
                    </div>
        
                    <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
                      <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                      <p>
                        <i className='fas fa-home me-3'></i> New York, NY 10012, US
                      </p>
                      <p>
                        <i className='fas fa-envelope me-3'></i>
                        info@example.com
                      </p>
                      <p>
                        <i className='fas fa-phone me-3'></i> + 01 234 567 88
                      </p>
                      <p>
                        <i className='fas fa-print me-3'></i> + 01 234 567 89
                      </p>
                    </div>
                  </div>
                </div>
              </section>
        
              <h6 className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2021 Copyright:
                <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
                  Visit Again
                </a>
              </h6>
            </MDBFooter>
        
        </div>
    );
}

export default Footer1;