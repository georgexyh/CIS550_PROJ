import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const emoji = require("emoji-dictionary");

export default class PageNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navDivs: [],
    };
  }

  componentDidMount() {
    const pageList = ["home", "singers", "spotify_exclusive", "billboard_exclusive", "underrated_songs", "byGenres", "byStream"];

    let navbarDivs = pageList.map((page, i) => {
      if (this.props.active === page) {
        return (
          <a className="nav-item nav-link active" key={i} href={"/" + page}>
            {page.charAt(0).toUpperCase() + page.substring(1, page.length)}
          </a>
        );
      } else {
        return (
          <a className="nav-item nav-link" key={i} href={"/" + page}>
            {page.charAt(0).toUpperCase() + page.substring(1, page.length)}
          </a>
        );
      }
    });

    this.setState({
      navDivs: navbarDivs,
    });
  }

  render() {
    return (
      <div className="PageNavbar" >
        <nav className="navbar navbar-expand-lg navbar-light" style={{background: 'grey'}}>
          <span className="navbar-brand center">
            {emoji.getUnicode("headphones")} mUsic
          </span>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">{this.state.navDivs}</div>
          </div>
        </nav>
      </div>
    );
  }
}