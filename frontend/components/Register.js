import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Register = (props) => {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  })

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: ''
  })

  function handleChange(event) {
    const name = event.target.name
    const value = event.target.value

    const data = {
      ...formData,
      [name]: value
    }
    const newErrors = {
      ...errors,
      [name]: ''
    }
    setFormData(data)
    setErrors(newErrors)
  }

  function handleSubmit(event) {
    event.preventDefault()

    axios.post('api/register', formData)
      .then(resp => {
        console.log(resp.data)
        if (resp.data.errors) {
          setErrors(resp.data.errors)
        } else {
          props.history.push('/login')
        }
      })
  }
  console.log(formData)

  return <div className="background-image-register">
    <div className="container container-custom">

      <h1 className="text-warning reg" >Join Rainforest for your shopping this Christmas</h1>
      <form
        onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            value={formData.username}
            placeholder="Username"
            name="username"
            required
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            className="form-control"
            onChange={handleChange}
            value={formData.email}
            placeholder="Email"
            name="email"
            required
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            className="form-control"
            onChange={handleChange}
            value={formData.password}
            placeholder="Password"
            name="password"
            required
          />
          {/* 
          {errors.password && <p id="error" style={{ color: 'red' }}>
            {`There was a problem with your ${errors.password.path}`}
          </p>} */}

        </div>
        <button className="btn btn-success wide">Submit</button>
      </form>

    </div>
  </div>
}

export default Register