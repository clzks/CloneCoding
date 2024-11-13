import { Container } from "react-bootstrap";
import styled from "styled-components";

const Footer = () => {

    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-item">이용 약관</div>
                <div className="footer-item">Operated by Emanruoy Inc.</div>
                <div className="footer-item">Current timezone Asia/Seoul</div>
            </div>
            <div className="footer-container">
                <div className="footer-item">Location Seoul, South Korea</div>
                <div className="footer-item">Copyright © 2024 YourName Inc. All rights reserved</div>
            </div>
            <div className="footer-container">
                <div className="footer-item">Security Notice This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply</div>
            </div>
        </div>
    )
}

export default Footer;