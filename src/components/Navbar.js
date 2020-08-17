import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

function NavBar() {
    return (
        <div>
            <Navbar expand="lg">
           
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto" style={{padding: "15px" }}>
                        <Nav.Item>
                            <Nav.Link href="/">UserList</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/image">Image</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/copy">Copy Clip</Nav.Link>
                        </Nav.Item>
                        
                    
                    </Nav>
    
                </Navbar.Collapse>
            </Navbar>


        </div>
    )
}

export default NavBar
