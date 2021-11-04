// import React, {useState} from "react";
// import {Button, Container, Nav, Navbar} from "react-bootstrap";
// import {Link} from "react-router-dom";
// import './Navbar.css'
// // import Logo from '../../../static/images/BrainiacSolo-11.png';
//
// import Web3 from 'web3';
//
// const Header = (props) => {
//
//     const [account, setAccount] = useState('');
//     const [connectButton, setConnectButton] = useState('Connect Wallet');
//
//     async function connectMetamask() {
//         // Modern Browsers like Chrome and Brave
//         if (window.ethereum) {
//             try {
//                 // Request account access
//                 await window.ethereum.enable();
//             } catch (error) {
//                 // User denied account access...
//                 alert('You must connect your wallet !')
//                 return;
//             }
//         }else {
//             // you cant connect
//             console.error("Unable to connect to metamask");
//             alert("You have to use Trustwallet app or install Metamask extension in your browser to use this app, you can install it from :  https://metamask.io/download.html");
//             return;
//         }
//         let web3 = new Web3(window.ethereum);
//         let accounts = await web3.eth.getAccounts();
//         setAccount(accounts[0]);
//         // setConnectButton(accounts[0])
//         setConnectButton('Wallet Connected')
//
//         localStorage.setItem('address', accounts[0]);
//     }
//
//
//     return (
//         <React.Fragment>
//             <header>
//                 <Navbar bg="transparent" expand="lg" sticky="top">
//                     <Navbar.Brand href="#home" className="navbar-brand">
//                         <img
//                             alt="Brainiac Logo"
//                             // src={Logo}
//                             width="50"
//                             height="50"
//                             className="d-inline-block align-top mr-2"
//                         />{' '}
//                         Brainaic
//                     </Navbar.Brand>
//                     <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                     <Navbar.Collapse id="basic-navbar-nav">
//                         <Nav className="m-auto">
//                             <Link className="ml-auto brainaic-nav" to="/" href="#home">Buy</Link>
//                             <Link className="brainaic-nav" to="/" href="#home">Add Liquidity</Link>
//                             <Link className="brainaic-nav" to="/" href="#home">Links & Docs</Link>
//                             <Link className="brainaic-nav mr-auto" to="/">Community</Link>
//                         </Nav>
//
//                         <Button onClick={connectMetamask} className="ml-auto connect-btn">{connectButton}</Button>
//                     </Navbar.Collapse>
//                 </Navbar>
//             </header>
//         </React.Fragment>
//     )
// }
//
// export default Header;