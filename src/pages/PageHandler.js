import React, {Component} from 'react';
import About from './About';
import Gallery from './Gallery';
import NavBar from '../components/NavBar'

class PageHandler extends Component {
    state = {
        currentPage: "About"
    };

    handlePageChange = page => {
        this.setState({ currentPage: page });
    };

    renderPage = () => {
        if (this.state.currentPage === "About") {
            return <About />;
        } else if (this.state.currentPage === "Gallery") {
            return <Gallery />;
        }
    };

    render() {
        return (
            <div>
                <div className="container-fluid">
                    <NavBar
                        currentPage={this.state.currentPage}
                        handlePageChange={this.handlePageChange}
                    />
                    {this.renderPage()}
                </div>
            </div>
        );
    }
}

export default PageHandler;