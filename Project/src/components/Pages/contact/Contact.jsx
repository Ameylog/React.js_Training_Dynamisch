import React from 'react'

function Contact() {
  return (

    <div className='container '>

      <div className='d-flex justify-content-center align-content-center mt-3'>
        <div className='cart col-sm-6 col-md-7 col-lg-7'>
          <div className='cart-body shadow px-5 pb-4'>

            <h3 className='mt-5 text-center'>Contact Details</h3>

            <div className='mx-2'>
              <h5>Order-Related Issue</h5>
              <p>For any issues related to your order, please contact:</p>
              <ul>
                <li>Email: ordersupport@yourstore.in</li>
                <li>Phone: +91 1234567890</li>
              </ul>
            </div>

            <div>
              <h5>Service-Related Issue</h5>
              <p>For service-related queries or assistance, please reach out to:</p>
              <ul>
                <li>Email: servicesupport@yourstore.in</li>
                <li>Phone: +91 9876543210</li>
              </ul>
            </div>

            <div>
              <h5>Delivery Related Issue</h5>
              <p>If you have any questions regarding your delivery, please contact:</p>
              <ul>
                <li>Email: deliverysupport@yourstore.in</li>

                <li>Phone: +91 9988776655</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Contact;
