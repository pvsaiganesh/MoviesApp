import {Component} from 'react'
import './index.css'

class Home extends Component {
  state = {user: '', pass: '', err: ''}

  username = event => {
    this.setState({user: event.target.value})
  }

  password = event => {
    this.setState({pass: event.target.value})
  }

  validateUser = async () => {
    const {user, pass} = this.state
    if (user === '' || pass === '') {
      this.setState({err: 'Please Enter Valid Email and Password'})
    } else {
      const url1 =
        'https://api.themoviedb.org/3/authentication/token/new?api_key=e866bccfd1d14a1e02e79d7b35669566'
      const response1 = await fetch(url1)
      const data1 = await response1.json()
      const userDetails = {
        username: user,
        password: pass,
        request_token: data1.request_token,
      }
      console.log(userDetails)
      const url =
        'https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=e866bccfd1d14a1e02e79d7b35669566'
      const options = {method: 'POST', body: JSON.stringify(userDetails)}
      const response = await fetch(url, options)
      const data = await response.json()
      console.log(data)
    }
  }

  render() {
    const {err} = this.state
    return (
      <div className="bg">
        <div className="sign-in-box">
          <h1 className="heading">Sign in</h1>
          <div className="inputs">
            <div className="input-box">
              <label className="username-label" htmlFor="user">
                USERNAME
              </label>
              <input
                placeholder="Rahul"
                id="user"
                type="text"
                className="input"
                onChange={this.password}
              />
            </div>
            <div className="input-box">
              <label className="password-label" htmlFor="pass">
                PASSWORD
              </label>
              <input
                onChange={this.username}
                id="pass"
                type="password"
                className="input"
              />
            </div>
            <button
              className="button"
              type="button"
              onClick={this.validateUser}
            >
              Sign in
            </button>
          </div>
          <p>{err}</p>
        </div>
      </div>
    )
  }
}
export default Home
