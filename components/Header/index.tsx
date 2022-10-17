import React, { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Header.module.scss";
import Logo from "public/logo/defutura-logo.svg";
import Menu from "public/icons/menu.svg";
import Sidebar from "./Sidebar";
import ActiveLink from "components/ActiveLink";
import Button from "components/Button";

const Header: React.FC = () => {
  const [sidebar, setSidebar] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setSidebar(false);
  }, [router.pathname]);

  const renderLinks = (
    <div className={styles.links}>
      <ActiveLink href="/services/blockchain">Services</ActiveLink>
      <ActiveLink href="/insights">Industries</ActiveLink>
      <ActiveLink href="/portfolio">Portfolio</ActiveLink>
      <ActiveLink href="/about-us">About Us</ActiveLink>
    </div>
  );

  return (
    <Fragment>
      <header className={styles.header}>
        <div className="mx pad">
          <div className={styles.headerContainer}>
            <div className={styles.logo}>
              <Link href="/">
                <Logo />
              </Link>
            </div>
            {renderLinks}
            <div className={styles.headerContainer_controls}>
              <Button>
                <Link href="/contact-us" style={{ color: "#fff" }}>
                  Contact Us
                </Link>
              </Button>
            </div>
            <div className={styles.menu} onClick={() => setSidebar(true)}>
              <Menu />
            </div>
          </div>
        </div>
      </header>
      <Sidebar
        sidebar={sidebar}
        handleClose={() => setSidebar(false)}
        navLinks={renderLinks}
      />
    </Fragment>
  );
};

export default Header;
