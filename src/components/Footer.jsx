const Footer = () => {

const socials = [{links : "Facebook", href : "#"}, {links : "LinkedIn", href : "#"}, {links : "Instagram", href : "#"}, {links : "Twitter", href : "#"} ]

const pages = [
    {
    text: "Portfolio",
    href : "#"
    },
    {
    text: "Services",
    href : "#"
    },
    {
    text: "Get Started",
    href : "#"
    },
    {
    text: "Contact Us",
    href : "#"
    }
]

const contactUs = [
    {
    action: "Call Us",
    href : "#"
    },
    {
    action: "Chat with Us",
    href : "#"
    },
    {
    action: "Book Us",
    href : "#"
    }
]

    return (
        <div className="footer">

            <div className="footer-flex one">
                <img className="logo" src= {require('../media/sartaLogo.png')} alt="Sartamedia Logo"/>
                <div className="flex-right">
                    <div className="links-container">
                        <p className="link-tag DM-san-20">Link</p>
                        {pages.map((item, idx) => {
                            return (
                                <li className='links-list' key={idx}><a className="DM-san-16 link" href={item.href}>{item.text}</a></li>
                            )
                        })}
                    </div>
                    <div className="links-container">
                        <p className="link-tag DM-san-20">Contact Us</p>
                        {contactUs.map((item, idx) => {
                            return (
                                <li className='links-list' key={idx}><a className="DM-san-16 link" href={item.href}>{item.action}</a></li>
                            )
                        })}
                    </div>
                </div>
            </div>
            
            <div className="footer-flex two">
                <div className="copyright">
                    <p className="DM-san-16 white">&#169; 2024</p>
                    <a href="#" className="sartaLink DM-san-16">www.sartamedia.com</a>
                </div>
                <div className="socials">
                    {socials.map((item, idx) => {
                        return (
                            <li className='social-links' key={idx}><a className="DM-san-16 link" href={item.href}>{item.links}</a></li>
                        )
                    })}
                </div>
            </div>

        </div>
    )

}

export default Footer;