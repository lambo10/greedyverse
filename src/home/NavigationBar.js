import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavigationBar.css";
import logo from "../img/greedyverseLogo.png";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<h3> <div className="d-inline-block logo-container" data-v-2a374f33=""><a href="#"
                                                                                         data-v-2a374f33=""><img
                        src={logo} alt="logo" className="img-fluid meta-apes-logo"
                        data-v-2a374f33="" /></a></div></h3>
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">Airdrop</a>
				<a href="/#">Presale</a>
				<a href="/#">WhitePaper</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>

            {/* <div class="w-nav-overlay navBarMob navBarMob" data-wf-ignore="" id="w-nav-overlay-0">
                <nav role="navigation" class="nav_menu-mobile w-nav-menu navBarMob2" data-nav-menu-open="">
                    <a href="#Creators" class="nav_link-mobile w-nav-link w--nav-link-open">Creators</a><a href="#features" class="nav_link-mobile w-nav-link w--nav-link-open">Features</a>
                    <a href="#roadmap" class="nav_link-mobile w-nav-link w--nav-link-open">Roadmap</a><a href="#partners" class="nav_link-mobile first w-nav-link w--nav-link-open">Partners</a>
                    <a href="#team" class="nav_link-mobile w-nav-link w--nav-link-open">Team</a><a href="#advisors" class="nav_link-mobile w-nav-link w--nav-link-open">Advisors</a>
                    <a href="#contact" class="nav_link-mobile w-nav-link w--nav-link-open">Contact</a></nav><nav role="navigation" class="nav_menu-right w-nav-menu navBarMob3" data-nav-menu-open="">
                    <a href="#Creators" class="nav_link-top w-nav-link w--nav-link-open">creators</a><a href="https://whitepaper.gummys.io/" class="nav_link-top w-nav-link w--nav-link-open">WHITEPAPER</a>
                    <a href="#roadmap" class="nav_link-top w-nav-link w--nav-link-open">Roadmap</a><a href="#partners" class="nav_link-top w-nav-link w--nav-link-open">Partners</a>
                    <a href="#team" class="nav_link-top w-nav-link w--nav-link-open">Team</a>
                    <a href="#advisors" class="nav_link-top w-nav-link w--nav-link-open">advisors</a>
                    <a href="#contact" class="nav_link-top w-nav-link w--nav-link-open">Contact</a>
                    </nav>
            </div> */}
		</header>
	);
}

export default Navbar;