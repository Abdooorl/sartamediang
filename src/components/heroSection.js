
function HeroSection(props) {


    const links = [{
        id : 1, 
        text: "Portfolio",
        href: "#Portfolio"
    },
    {
        id : 2, 
        text: "Services",
        href: "#Services"
    },
    {
        id : 3, 
        text: "Get Started",
        href: "#Get-Started"
    },
    {
        id : 4, 
        text: "Contact Us",
        href: "#Contact-Us"
    }

]
    const whatsappLink = () => {
        window.open("https://wa.link/rsajad", "_blank")
    }
    const instagramLink = () => {
        window.open("https://www.instagram.com/sartamedia?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", "_blank")
    }
    
   return (
    <div className="heroSection">
        
        <div className="navBar">
            <img className="logo" src= {require('../media/sartaLogo.png')} alt="Sartamedia Logo"/>
            <ul className="navigationLinks">
                {
                    links.map(navigation => {
                        return (
                            <li key={navigation.id}> <a href="#" className="DM-san-16">{navigation.text}</a></li>
                            )
                        })
                }

            </ul> 
            <button className="chatButton DM-san-16-medium">Chat with us</button>
        </div>

        <div className='header'>
            <img className="backgroundImage" src= {require('../media/maskGroup.png')} alt="bg-image"/>
            <div className='headerContent'>
                <h1 className='headerText bricolage-h1'>You need an event to remember for a lifetime</h1>
                <p className='subText DM-san-20'>We provide the best, cost-saving and memorable services. You are guaranteed of the best service to take your events to another level.</p>
                <div className='buttonDiv'>
                    <button className="Button primaryButton DM-san-18" onClick={whatsappLink}>Start booking with us now <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ffffff" viewBox="0 0 256 256"><path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"></path></svg></button>
                </div>
            </div>
            
        </div>



    </div>
   )
}

export default HeroSection