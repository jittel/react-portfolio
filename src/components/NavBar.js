import React from 'react';

export default function NavBar(props) {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#about" onClick={() => props.handlePageChange("About")}>About <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#gallery"  onClick={() => props.handlePageChange("Gallery")}>Gallery</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

