import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import SGSP from '../SGSP/SGSP';
import UnidadesDeSaude from '../UnidadesDeSaide/UnidadesDeSaude';
import Procedimentos from '../Procedimentos/Procedimentos';

export default function Header() {
    return (
        <Router>
            <header>
                <nav className="navbar navbar-expand-md navbar-light fixed-top bg-first-color">
                    <div className="container-fluid">
                        <Link to="/">
                            <img src="logo.png" width="35" height="35" className="d-inline-block align-top mr-2" alt="" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                            aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">SGSP</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/us">Unidades de Saúde</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/procedimentos">Procedimentos</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>


            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
                <Route path="/us">
                    <UnidadesDeSaude />
                </Route>
                <Route path="/procedimentos">
                    <Procedimentos />
                </Route>
                <Route path="/">
                    <SGSP />
                </Route>
            </Switch>

        </Router >
    );
}
