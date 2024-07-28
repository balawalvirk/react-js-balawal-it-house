import FooterLogo from '../assets/BITH-footer-logo.png';
import FacebookLogo from '../assets/facebook-logo.svg';
import InstagramLogo from '../assets/instagram.svg';
import LinkedinLogo from '../assets/linkedin.svg';
import XLogo from '../assets/x-logo.svg';

function Footer() {
  return (
    <footer className="bg-[#F5F5F5] flex justify-center items-center md:justify-around py-[60px] md:items-baseline mt-16 gap-10 flex-col-reverse md:flex-row">
      <p className="text-[14px]">Copyright © 2024. All rights reserved.</p>
      <img src={FooterLogo} alt="" />
      <div className="flex items-center gap-4">
        <a href="#">
          <img src={FacebookLogo} alt="" />
        </a>
        <a href="#">
          <img src={LinkedinLogo} alt="" />
        </a>
        <a href="#">
          <img src={XLogo} alt="" />
        </a>
        <a href="#">
          <img src={InstagramLogo} alt="" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
