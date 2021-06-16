import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="logo">Logo</div>
        <div className="links">
          <div>
            <Link className="link" to="/login">
              Login
            </Link>
          </div>
          <div>
            <Link className="link" to="/account">
              Account
            </Link>
          </div>
          <div>
            <Link className="link" to="/popular">
              Popular Page
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
export default NavBar
