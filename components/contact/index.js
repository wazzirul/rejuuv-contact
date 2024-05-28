import React, { useEffect, useState } from "react";
import Link from 'next/link'
import Image from 'next/image'

function Contact() {
    return(
      <>
        <Navbar />
        <section className="hero">
          <div className="hero__background">
            <img src={'/assets/images/contact-hero-icon-star.svg'} alt='Hero Star Left' className="hero__star-left" width={35} height={38} />
            <img src={'/assets/images/contact-hero-icon-star.svg'} alt='Hero Star Right' className="hero__star-right" width={20} height={21} />
            <img src={'/assets/images/hero-question-mark.png'} alt='Hero Question Mark' className="hero__question-mark-right" width={170} height={177} />
            <img src={'/assets/images/contact-hero-pattern-left.png'} alt='Hero Background Left' className="hero__background-left" width={644} height={698} />
            <img src={'/assets/images/contact-hero-pattern-right.png'} alt='Hero Background Right' className="hero__background-right" width={696} height={673} />
          </div>
          <div className="container">
            <div className="hero__wrapper">
              <h1 className="hero__title">Have a question?</h1>
              <p className="hero__subtitle">Search our library of support articles or live chat with us to get immediate help.</p>
              <form className="hero__form" action="#">
                <img src={'/assets/images/contact-hero-form-icon-right.svg'} alt='' className="hero__form-icon" width={46} height={50} />
                <input className="hero__form-input" type="text" name="search" id="search" placeholder="Search support articles and more" required />
                <button type="submit" className="hero__form-button">
                  <img src={'/assets/images/magnifying-glass.svg'} alt='Find' width={24} height={24} className="hero__form-button-icon" />
                </button>
              </form>
            </div>
          </div>
        </section>
        <section className="cta">
          <div className="container container-cta">
            <div className="cta-groups">
              <div className="cta-card">
                <img src={'/assets/images/cta-client.png'} alt='Find' width={212 * 2} height={212 * 2} className="cta-card__icon" />
                <div className="cta-card__content">
                  <h4 className="cta-card__title">Clients</h4>
                  <p className="cta-card__description">Need help booking a massage? We&apos;re here for you! Live Chat with our support team or check out our FAQ articles to get the answers you need.</p>
                </div>
                <div className="cta-card__button">
                  <button type="button" className="btn btn-primary">Live Chat</button>
                  <a href="#" className="btn btn-outline-primary">FAQ Articles</a>
                </div>
              </div>
              <div className="cta-card">
                <img src={'/assets/images/cta-provider.png'} alt='Find' width={212 * 2} height={212 * 2} className="cta-card__icon" />
                <div className="cta-card__content">
                  <h4 className="cta-card__title">Providers</h4>
                  <p className="cta-card__description">We&apos;re dedicated to helping your massage business thrive. Live Chat with us for guidance on everything from setting up your profile to attracting new clients.</p>
                </div>
                <div className="cta-card__button">
                  <button type="button" className="btn btn-primary">Live Chat</button>
                  <a href="#" className="btn btn-outline-primary">FAQ Articles</a>
                </div>
              </div>
              <div className="cta-card">
                <img src={'/assets/images/cta-professional.png'} alt='Find' width={212 * 2} height={212 * 2} className="cta-card__icon" />
                <div className="cta-card__content">
                  <h4 className="cta-card__title">Professionals</h4>
                  <p className="cta-card__description">Don&apos;t go it alone in your job search. Live Chat with our team or explore our support articles to get the guidance you need to succeed.</p>
                </div>
                <div className="cta-card__button">
                  <button type="button" className="btn btn-primary">Live Chat</button>
                  <a href="#" className="btn btn-outline-primary">FAQ Articles</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="footer">
          <div className="container">
            <div className="footer-main"> 
              <div className="footer-top-left"> 
                <img src={'/assets/images/rejuuv-logo.svg'} alt='Find' width={214} height={60} className="footer-logo" />
                <p className="footer-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className="footer-socmed__title">Follow Us :</p>
                <div className="footer-socmed">
                  <a href="#" className="footer-socmed__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                      <path d="M15.1199 5.32003H16.9999V2.14003C16.0896 2.04538 15.175 1.99865 14.2599 2.00003C11.5399 2.00003 9.67986 3.66003 9.67986 6.70003V9.32003H6.60986V12.88H9.67986V22H13.3599V12.88H16.4199L16.8799 9.32003H13.3599V7.05003C13.3599 6.00003 13.6399 5.32003 15.1199 5.32003Z" fill="currentColor" />
                    </svg>
                  </a>
                  <a href="#" className="footer-socmed__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                      <path d="M17.34 5.46C17.1027 5.46 16.8707 5.53038 16.6733 5.66224C16.476 5.79409 16.3222 5.98151 16.2313 6.20078C16.1405 6.42005 16.1168 6.66133 16.1631 6.89411C16.2094 7.12689 16.3236 7.34071 16.4915 7.50853C16.6593 7.67635 16.8731 7.79064 17.1059 7.83694C17.3387 7.88324 17.5799 7.85948 17.7992 7.76866C18.0185 7.67783 18.2059 7.52402 18.3378 7.32668C18.4696 7.12935 18.54 6.89734 18.54 6.66C18.54 6.34174 18.4136 6.03652 18.1885 5.81147C17.9635 5.58643 17.6583 5.46 17.34 5.46ZM21.94 7.88C21.9206 7.0503 21.7652 6.2294 21.48 5.45C21.2257 4.78313 20.83 4.17928 20.32 3.68C19.8248 3.16743 19.2196 2.77418 18.55 2.53C17.7727 2.23616 16.9508 2.07721 16.12 2.06C15.06 2 14.72 2 12 2C9.28 2 8.94 2 7.88 2.06C7.04915 2.07721 6.22734 2.23616 5.45 2.53C4.78168 2.77665 4.17693 3.16956 3.68 3.68C3.16743 4.17518 2.77418 4.78044 2.53 5.45C2.23616 6.22734 2.07721 7.04915 2.06 7.88C2 8.94 2 9.28 2 12C2 14.72 2 15.06 2.06 16.12C2.07721 16.9508 2.23616 17.7727 2.53 18.55C2.77418 19.2196 3.16743 19.8248 3.68 20.32C4.17693 20.8304 4.78168 21.2234 5.45 21.47C6.22734 21.7638 7.04915 21.9228 7.88 21.94C8.94 22 9.28 22 12 22C14.72 22 15.06 22 16.12 21.94C16.9508 21.9228 17.7727 21.7638 18.55 21.47C19.2196 21.2258 19.8248 20.8326 20.32 20.32C20.8322 19.8226 21.2283 19.2182 21.48 18.55C21.7652 17.7706 21.9206 16.9497 21.94 16.12C21.94 15.06 22 14.72 22 12C22 9.28 22 8.94 21.94 7.88ZM20.14 16C20.1327 16.6348 20.0178 17.2637 19.8 17.86C19.6403 18.2952 19.3839 18.6884 19.05 19.01C18.7256 19.3405 18.3332 19.5964 17.9 19.76C17.3037 19.9778 16.6748 20.0927 16.04 20.1C15.04 20.15 14.67 20.16 12.04 20.16C9.41 20.16 9.04 20.16 8.04 20.1C7.38089 20.1123 6.72459 20.0109 6.1 19.8C5.68578 19.6281 5.31136 19.3728 5 19.05C4.66809 18.7287 4.41484 18.3352 4.26 17.9C4.01586 17.2952 3.88044 16.6519 3.86 16C3.86 15 3.8 14.63 3.8 12C3.8 9.37 3.8 9 3.86 8C3.86448 7.35106 3.98295 6.70795 4.21 6.1C4.38605 5.67791 4.65627 5.30166 5 5C5.30381 4.65617 5.67929 4.3831 6.1 4.2C6.70955 3.98004 7.352 3.86508 8 3.86C9 3.86 9.37 3.8 12 3.8C14.63 3.8 15 3.8 16 3.86C16.6348 3.86728 17.2637 3.98225 17.86 4.2C18.3144 4.36865 18.7223 4.64285 19.05 5C19.3777 5.30718 19.6338 5.68273 19.8 6.1C20.0223 6.70893 20.1373 7.35178 20.14 8C20.19 9 20.2 9.37 20.2 12C20.2 14.63 20.19 15 20.14 16ZM12 6.87C10.9858 6.87198 9.99496 7.17453 9.15265 7.73942C8.31035 8.30431 7.65438 9.1062 7.26763 10.0438C6.88089 10.9813 6.78072 12.0125 6.97979 13.0069C7.17886 14.0014 7.66824 14.9145 8.38608 15.631C9.10392 16.3474 10.018 16.835 11.0129 17.0321C12.0077 17.2293 13.0387 17.1271 13.9755 16.7385C14.9123 16.35 15.7129 15.6924 16.2761 14.849C16.8394 14.0056 17.14 13.0142 17.14 12C17.1413 11.3251 17.0092 10.6566 16.7512 10.033C16.4933 9.40931 16.1146 8.84281 15.6369 8.36605C15.1592 7.88929 14.5919 7.51168 13.9678 7.25493C13.3436 6.99818 12.6749 6.86736 12 6.87ZM12 15.33C11.3414 15.33 10.6976 15.1347 10.15 14.7688C9.60234 14.4029 9.17552 13.8828 8.92348 13.2743C8.67144 12.6659 8.6055 11.9963 8.73398 11.3503C8.86247 10.7044 9.17963 10.111 9.64533 9.64533C10.111 9.17963 10.7044 8.86247 11.3503 8.73398C11.9963 8.6055 12.6659 8.67144 13.2743 8.92348C13.8828 9.17552 14.4029 9.60234 14.7688 10.15C15.1347 10.6976 15.33 11.3414 15.33 12C15.33 12.4373 15.2439 12.8703 15.0765 13.2743C14.9092 13.6784 14.6639 14.0454 14.3547 14.3547C14.0454 14.6639 13.6784 14.9092 13.2743 15.0765C12.8703 15.2439 12.4373 15.33 12 15.33Z" fill="currentColor" />
                    </svg>               
                  </a>
                  <a href="#" className="footer-socmed__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                      <path d="M22 5.80021C21.2483 6.1263 20.4534 6.34187 19.64 6.44021C20.4982 5.92753 21.1413 5.12099 21.45 4.17021C20.6436 4.65027 19.7608 4.98851 18.84 5.17021C18.2245 4.50278 17.405 4.05851 16.5098 3.90706C15.6147 3.75562 14.6945 3.90557 13.8938 4.3334C13.093 4.76123 12.4569 5.44274 12.0852 6.27105C11.7135 7.09935 11.6273 8.0276 11.84 8.91021C10.2094 8.82774 8.61444 8.40316 7.15865 7.66407C5.70287 6.92498 4.41885 5.8879 3.39 4.62021C3.02914 5.25038 2.83952 5.96403 2.84 6.69021C2.83872 7.36459 3.00422 8.02883 3.32176 8.62377C3.63929 9.21872 4.09902 9.72592 4.66 10.1002C4.00798 10.0825 3.36989 9.90751 2.8 9.59021V9.64021C2.80489 10.5851 3.13599 11.4993 3.73731 12.2282C4.33864 12.957 5.17326 13.4559 6.1 13.6402C5.74326 13.7488 5.37287 13.806 5 13.8102C4.74189 13.8072 4.48442 13.7838 4.23 13.7402C4.49391 14.553 5.00462 15.2634 5.69107 15.7724C6.37753 16.2814 7.20558 16.5638 8.06 16.5802C6.6172 17.7155 4.83588 18.3351 3 18.3402C2.66574 18.3413 2.33174 18.3213 2 18.2802C3.87443 19.4905 6.05881 20.1329 8.29 20.1302C9.82969 20.1462 11.3571 19.8552 12.7831 19.2743C14.2091 18.6934 15.505 17.8341 16.5952 16.7467C17.6854 15.6593 18.548 14.3656 19.1326 12.9411C19.7172 11.5166 20.012 9.98994 20 8.45021C20 8.28021 20 8.10021 20 7.92021C20.7847 7.33502 21.4615 6.61763 22 5.80021Z" fill="currentColor" />
                    </svg>
                  </a>
                  <a href="#" className="footer-socmed__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                      <g clipPath="url(#clip0_22348_31962)">
                        <path d="M0 12C0 17.123 3.211 21.497 7.73 23.218C7.62 22.281 7.503 20.736 7.755 19.652C7.972 18.72 9.156 13.714 9.156 13.714C9.156 13.714 8.799 12.999 8.799 11.94C8.799 10.28 9.761 9.04 10.96 9.04C11.98 9.04 12.472 9.805 12.472 10.722C12.472 11.747 11.819 13.279 11.482 14.7C11.201 15.889 12.079 16.859 13.251 16.859C15.374 16.859 17.007 14.62 17.007 11.388C17.007 8.527 14.951 6.528 12.016 6.528C8.618 6.528 6.623 9.077 6.623 11.712C6.623 12.739 7.018 13.839 7.512 14.438C7.55412 14.4832 7.58387 14.5386 7.59841 14.5986C7.61295 14.6587 7.61177 14.7215 7.595 14.781C7.504 15.159 7.302 15.97 7.263 16.136C7.21 16.354 7.09 16.401 6.863 16.295C5.371 15.601 4.439 13.42 4.439 11.668C4.439 7.899 7.176 4.439 12.331 4.439C16.475 4.439 19.696 7.392 19.696 11.338C19.696 15.455 17.101 18.769 13.497 18.769C12.286 18.769 11.149 18.139 10.759 17.396C10.759 17.396 10.16 19.678 10.015 20.236C9.733 21.32 8.951 22.692 8.466 23.471C9.584 23.815 10.77 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0C5.373 0 0 5.373 0 12Z" fill="currentColor" />
                      </g>
                    </svg>                
                  </a>
                </div>
              </div>
              <div className="footer-links">
                <div className="footer-link">
                  <p className="footer-link__title">Company</p>
                  <div className="footer-link__list">
                    <a href="#" className="footer-link__item">About Us</a>
                    <a href="#" className="footer-link__item">Career</a>
                    <a href="#" className="footer-link__item">Blogs</a>
                  </div>
                </div>
                <div className="footer-link">
                  <p className="footer-link__title">Providers</p>
                  <div className="footer-link__list">
                    <a href="#" className="footer-link__item">Became a Provider</a>
                    <a href="#" className="footer-link__item">Product Overview</a>
                    <a href="#" className="footer-link__item">List your Business</a>
                    <a href="#" className="footer-link__item">Provider Login</a>
                  </div>
                </div>
                <div className="footer-link">
                  <p className="footer-link__title">Career Builders</p>
                  <div className="footer-link__list">
                    <a href="#" className="footer-link__item">Yoga Provider</a>
                    <a href="#" className="footer-link__item">Massage Provider</a>
                    <a href="#" className="footer-link__item">Wellness Provider</a>
                  </div>
                </div>
                <div className="footer-link">
                  <p className="footer-link__title">Support</p>
                  <div className="footer-link__list">
                    <a href="#" className="footer-link__item">FAQ</a>
                    <a href="#" className="footer-link__item">Contact Us</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-foot"> 
              <div className="footer-foot__links">
                <div className="footer-foot__privacy-tos"> 
                  <a href="#" className="footer-foot__link">Privacy Policy</a>
                  <span className="divider"></span>
                  <a href="#" className="footer-foot__link">Terms of Service</a>
                </div>
                <span className="divider divider--dekstop"></span>
                  <a href="#" className="footer-foot__link">Copyright Policy & Claims</a>
                <span className="divider divider--dekstop"></span>
                  <a href="#" className="footer-foot__link">Cookie Preferences</a>
              </div>
              <p className="footer-foot__copyright">
                © 2023 Rejuuv. All Rights Reserved.
              </p>
            </div>
          </div>
        </footer>
      </>
    )
}

const Navbar = () => {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
            });
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return(
        <div className='navbar'>
            <div className="container">
                <div className='navbar-wrapper'>
                    <div className='left-menu'>
                        <button type='button' className='navbar-hamburger-button'>
                            <Image src={'/assets/images/icon-hamburger.svg'} alt='Hamburger Icon' width={24} height={24} />
                        </button>
                        <Link href='/'>
                            <Image src={'/assets/images/rejuuv-logo.svg'} alt='Main Logo' className='navbar-logo' width={windowSize.width > 576 ? 120 : 92} height={34} />
                        </Link>
                        <div className='navbar-menu'>
                            <button type='button' className='navbar-dropdown-toggle'>
                                About Us
                                <Image src={'/assets/images/icon-caret-down.svg'} alt='Caret Down Icon' width={14} height={14} />
                            </button>
                            <button type='button' className='navbar-dropdown-toggle'>
                                Deals
                                <Image src={'/assets/images/icon-caret-down.svg'} alt='Caret Down Icon' width={14} height={14} />
                            </button>
                            <button type='button' className='navbar-dropdown-toggle'>
                                Activity
                                <Image src={'/assets/images/icon-caret-down.svg'} alt='Caret Down Icon' width={14} height={14} />
                            </button>
                        </div>
                    </div>
                    <div className='right-menu'>
                        <button type='button' className='cta-button'>Rejuuv Your Business</button>
                        <button type='button' className='icon-button'>
                            <Image src={'/assets/images/icon-heart.svg'} alt='Heart Icon' width={24} height={24} />
                        </button>
                        <button type='button' className='icon-button'>
                            <Image src={'/assets/images/icon-globe.svg'} alt='Globe Icon' width={24} height={24} />
                        </button>
                        <button type='button' className='profile-button'>
                            <div className='icon-wrap'>
                                <Image src={'/assets/images/icon-sort-ascending.svg'} alt='Sort Icon' width={24} height={24} />
                            </div>
                            <div className='icon-wrap-avatar'>
                                <Image src={'/assets/images/icon-user.svg'} alt='User Icon' width={24} height={24} />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact