/* eslint-disable react/no-unknown-property */
import logo from '../../../../assets/55102_1477681363.jpg'


const Footer = () => {
    return (
        <div className="mt-2">
            <footer className="footer p-10 20  bg-slate-900 text-white ">
                <div>
                    <img src={logo} alt="" />
                    <p>Photography School<br />Providing reliable tech since 1992</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>

            </footer>
            <footer className="footer footer-center p-4 bg-slate-900 text-white ">
                <div>
                    <p>Copyright © 2023 - All right reserved by Photography School</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;