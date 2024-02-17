import {
    MDBNavbar,
    MDBContainer,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBCollapse,
    MDBBadge,
} from 'mdb-react-ui-kit';
import { Link, Route, Routes } from "react-router-dom";
import Home from '../../pages/home/home';
import Movie from '../../pages/movie/movie';
import Favorites from '../../pages/favorites/favorites';
import Login from '../../pages/login/loginPage';
import Register from '../../pages/register_page/registerPage';
import { useSelector } from 'react-redux';
function Navbar() {

    const favoriteMovies = useSelector(state => state.addToFavorites);


    return (
        <MDBNavbar expand='lg' light style={{ backgroundColor: '#e3f2fd', marginBottom: '0', paddingRight: '16px' }}>
            <MDBContainer fluid style={{ paddingRight: '0', paddingLeft: '0' }}>
                <MDBNavbarBrand>Mocha Movies</MDBNavbarBrand>
                <MDBNavbarToggler
                    type='button'
                    data-target='#navbarColor02'
                    aria-controls='navbarColor02'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>
                <MDBCollapse navbar>
                    <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
                        <MDBNavbarItem className='active'>
                            <Link to='/' className='nav-link'>Movies</Link>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <Link to='/favorites' className='nav-link'>Favorites</Link>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <Link to='/login' className='nav-link'>Login</Link>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <Link to='/register' className='nav-link'>Register</Link>
                        </MDBNavbarItem >



                    </MDBNavbarNav>
                    <Link to='/favorites' >
                        <MDBIcon fas icon="heart" size='lg' />
                        {(favoriteMovies.length > 0) ?
                            <MDBBadge color='danger' notification pill>
                                {favoriteMovies.length}
                            </MDBBadge> : null}
                    </Link>

                </MDBCollapse>

            </MDBContainer>


            {/* Move this MDBNavbarItem outside of the MDBCollapse */}

        </MDBNavbar>



    )
}

export default Navbar