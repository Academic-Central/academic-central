import React from "react";
import { Link } from "gatsby";
import aclogo from "../img/AcademicCentral_logo_0930_b.svg";
// import logo from "../img/ac-logo.svg";
import { FaHome } from "@react-icons/all-files/fa/FaHome";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
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
                  <img src={aclogo} alt="Academic Central" style={{ width: '88px' }} />
                </Link>
                {/* Hamburger menu */}
                <button
                  className={`navbar-burger burger ${this.state.navBarActiveClass}`}
                  aria-label="Nav button"
                  data-target="navMenu"
                  onClick={() => this.toggleHamburger()}
                  tabIndex={0}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
            </div>


          <div id="navMenu" className={`navbar-menu ${this.state.navBarActiveClass}`}>
            <div className="navbar-item has-dropdown is-hoverable">
              <div className="navbar-link">
                <Link to="/division/">
                  <div className="navbar-item">部門</div>
                </Link>
              </div>
              <div className="navbar-dropdown">
                <Link to="/division/Promotion-Planning-Office/">
                  <div className="navbar-item">推進企画室</div>
                </Link>
                <Link to="/division/Instructional-Design-Team/">
                  <div className="navbar-item">IDチーム</div>
                </Link>
                <Link to="/division/Regional-Centre-For-Higher-Education/">
                  <div className="navbar-item">地域高等教育基盤センター</div>
                </Link>

                <hr className="navbar-divider" />
                <Link to="/division/High-School-University-Articulation/">
                  <div className="navbar-item">⾼⼤接続部⾨</div>
                </Link>
                <Link to="/division/Liberal-Arts/">
                  <div className="navbar-item">⾼度LA部⾨</div>
                </Link>
                <Link to="/division/Data-Science/">
                  <div className="navbar-item">数理・DS 部⾨</div>
                </Link>
                <Link to="/division/Doctoral-Education/">
                  <div className="navbar-item">博⼠課程部⾨</div>
                </Link>

                <Link to="/division/QTA/">
                  <div className="navbar-item">QTAセンター</div>
                </Link>
                <a href="https://ac.thers.ac.jp/qgc/" target="_blank" rel="noopener noreferrer">
                  <div className="navbar-item">
                    &nbsp;&nbsp;
                    <FaHome />
                    ホームページ
                  </div>
                </a>
                <Link to="/division/Life-Concept/">
                  <div className="navbar-item">⼈⽣構想⼒部⾨</div>
                </Link>
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
