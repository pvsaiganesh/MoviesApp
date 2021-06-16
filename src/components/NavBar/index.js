import {Component} from 'react'
import {Link, Redirect} from 'react-router-dom'
import './index.css'

class NavBar extends Component {
  state = {searchInput: ''}

  getText = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    return (
      <div className="navbar">
        <img
          className="logo"
          src="https://res.cloudinary.com/pvsaiganesh/image/upload/v1623875529/Group_7399_xeljqs.png"
          alt="logo"
        />
        <div className="links">
          <div>
            <Link className="link" to="/">
              Home
            </Link>
          </div>
          <div>
            <Link className="link" to="/popular">
              Popular
            </Link>
          </div>
          <input
            onChange={this.getText}
            className="search-input"
            type="search"
          />
          <img
            src="https://res.cloudinary.com/pvsaiganesh/image/upload/v1623876745/search_swuugl.png"
            alt="search"
          />
          <div>
            <Link className="link" to="/account">
              <img
                className="search-logo"
                src="https://res.cloudinary.com/pvsaiganesh/image/upload/v1623875573/Avatar_ymvfjg.png"
                alt="avatar"
              />
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
export default NavBar
