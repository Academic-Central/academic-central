import React from "react";
import { Link } from "gatsby";
import aclogo from "../img/AcademicCentral_logo_0930_b.svg";
// import logo from "../img/ac-logo.svg";

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
              {/* <img src={logo} alt="Academic Central" style={{ width: "88px" }} /> */}
              <img src={aclogo} alt="Academic Central" style={{ height: "88px" }} />
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
              <div className="navbar-link">
                <Link to="/division/">
                  <div className="navbar-item">??????</div>
                </Link>
              </div>
              <div className="navbar-dropdown">
                <Link to="/division/Promotion-Planning-Office/">
                  <div className="navbar-item">???????????????</div>
                </Link>
                <Link to="/division/Instructional-Design-Team/">
                  <div className="navbar-item">ID?????????</div>
                </Link>

                <hr className="navbar-divider" />
                <Link to="/division/High-School-University-Articulation/">
                  <div className="navbar-item">??????????????????</div>
                </Link>
                <Link to="/division/Liberal-Arts/">
                  <div className="navbar-item">??????LA??????</div>
                </Link>
                <Link to="/division/Data-Science/">
                  <div className="navbar-item">?????????DS ??????</div>
                </Link>
                <Link to="/division/Doctoral-Education/">
                  <div className="navbar-item">??????????????????</div>
                </Link>

                <Link to="/division/QTA/">
                  <div className="navbar-item">QTA????????????</div>
                </Link>
                <Link to="/division/Life-Concept/">
                  <div className="navbar-item">?????????????????????</div>
                </Link>
              </div>
            </div>

            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/awards/">
                ??????
              </Link>
              <Link className="navbar-item" to="/news/">
                ????????????
              </Link>
              <Link className="navbar-item" to="/contact/">
                ??????????????????
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
