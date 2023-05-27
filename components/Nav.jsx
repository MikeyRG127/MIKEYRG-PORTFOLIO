import Image from 'next/image'

const Nav = () => {
    return (
        <nav className="navbar">
            <Image
                src="/assets/icons/mikey-logo.png"
                alt="Picture of the author"
                width={40}
                height={50}
            />

            <div className="navbar-menu">
                <p className="page-location" data-text="HOME">HOME</p>
                <div className="home-menu-icon-line"></div>
                <div className="menu-icon">
                    <div className="menu-icon-line-1"></div>
                    <div className="menu-icon-line-2"></div>
                    <div className="menu-icon-line-3"></div>
                </div>
            </div>

        </nav>
    )
}

export default Nav
