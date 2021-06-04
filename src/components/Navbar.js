import React from "react";
import { Link } from "gatsby";
// import cslogo from "../img/ac-logo.svg";
import logo from "../img/ac-logo2.svg";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ""
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active"
            })
          : this.setState({
              navBarActiveClass: ""
            });
      }
    );
  };

  render() {
    return (
      <nav className="navbar is-transparent" role="navigation" aria-label="main-navigation">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              {/* <img src={logo} alt="CS-Edit" style={{ width: '88px' }} /> */}
              <img src={logo} alt="CS-Edit" style={{ height: "80px" }} />
            </Link>
            {/* Hamburger menu */}
            <button
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
              // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md#how-do-i-resolve-this-error
              role="menuitem"
              tabIndex={0}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
          <div id="navMenu" className={`navbar-menu ${this.state.navBarActiveClass}`}>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">部門</a>

              <div className="navbar-dropdown">
                <Link className="navbar-item" to="/division/推進企画室/">
                  推進企画室
                </Link>
                <hr className="navbar-divider" />
                <a className="navbar-item">ID チーム</a>
                <a className="navbar-item">⾼⼤接続部⾨</a>
                <div className="navbar-item">Version 0.9.2</div>
              </div>
            </div>

            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/awards/">
                表彰
              </Link>
              <Link className="navbar-item" to="/news/">
                ニュース
              </Link>
              <Link className="navbar-item" to="/contact/">
                お問い合わせ
              </Link>
              {/* <Link className="navbar-item" to="/contact/examples">
                Form Examples
              </Link> */}
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
