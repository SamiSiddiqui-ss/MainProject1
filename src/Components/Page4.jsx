import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Page4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      firstName: '',
      lastName: '',
      address: '',
      apartment: '',
      city:'',
      postalCode: '',
      Phone: '',
      subscribe: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('Form submitted:', this.state);
  }

  render() {
    const { email, firstName, lastName, address, apartment, city, postalCode , Phone , subscribe } = this.state;

    return (
      <>
       
        <div className="flex justify-center bg-white">
          <img
            className="pt-4 w-48"
            src="https://baroque.pk/cdn/shop/files/LOGO_PNG_V01.png?v=1689675712&width=280"
            alt="logo-img"
          />
        </div>
        <hr />

        <Container>
          <Row className=" h-auto mx-auto border-black flex">
          
            <Col>
              <form onSubmit={this.handleSubmit}>
              <div className='flex justify-between'>
                <h2>Contact</h2>
                <h2>Log In</h2>
                </div>
                <div>
                  <input 
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={this.handleChange}
                    required
                    style={{
                      width: '620px',
                      padding: '10px',
                      marginBottom: '10px',
                      borderRadius: '4px',
                      border: '1px solid #ccc',
                    }}
                  />
                </div>
                <div>
                  <label>
                    <input
                      type="checkbox"
                      name="subscribe"
                      checked={subscribe}
                      onChange={this.handleChange}
                    />
                    Email me with news and offers
                  </label>
                </div>
                <div className='bg-zinc-500 opacity-4 p-3'>
                  <p>
                    <strong>International Website</strong>
                    <br />
                    To deliver products outside of Pakistan visit our International Website:{' '}
                    <a className='underline'
                      href="https://baroque.com.pk"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://baroque.com.pk
                    </a>
                  </p>
                </div>

                <h2 className='text-2xl font-bold p-1'>Delivery</h2>
                <div>
                  <label>Country/Region</label>
                  <select disabled>
                    <option value="Pakistan">Pakistan</option>
                  </select>
                </div>
                <div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    value={firstName}
                    onChange={this.handleChange}
                    required
                    style={{
                      width: '48%',
                      padding: '10px',
                      marginRight: '4%',
                      marginBottom: '10px',
                      borderRadius: '4px',
                      border: '1px solid #ccc',
                    }}
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    value={lastName}
                    onChange={this.handleChange}
                    required
                    style={{
                      width: '48%',
                      padding: '10px',
                      marginBottom: '10px',
                      borderRadius: '4px',
                      border: '1px solid #ccc',
                    }}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={address}
                    onChange={this.handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '10px',
                      marginBottom: '10px',
                      borderRadius: '4px',
                      border: '1px solid #ccc',
                    }}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="City"
                    value={city}
                    onChange={this.handleChange}
                    required
                    style={{
                      width: '48%',
                      padding: '10px',
                      marginRight: '4%',
                      marginBottom: '10px',
                      borderRadius: '4px',
                      border: '1px solid #ccc',
                    }}
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Postal Code"
                    value={postalCode}
                    onChange={this.handleChange}
                    required
                    style={{
                      width: '48%',
                      padding: '10px',
                      marginBottom: '10px',
                      borderRadius: '4px',
                      border: '1px solid #ccc',
                    }}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="apartment"
                    placeholder="Phone"
                    value={Phone}
                    onChange={this.handleChange}
                    style={{
                      width: '100%',
                      padding: '10px',
                      marginBottom: '10px',
                      borderRadius: '4px',
                      border: '1px solid #ccc',
                    }}
                  />
                </div>
                <div>
                  <label>
                    <input
                      type="checkbox"
                      name="subscribe"
                      checked={subscribe}
                      onChange={this.handleChange}
                    />
                    Save this information for next time
                  </label>
                </div>
                <button
                  type="submit"
                  style={{
                    padding: '10px 20px',
                    backgroundColor: '#000',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                  }}
                >
                  Submit
                </button>
              </form>
            </Col>

            <Col>
              <img className="" width={1100} src="/public/images/lastimg.png" alt="form-img" />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Page4;


{/* <Link to="/">
<div> Sami </div>
</Link> */}