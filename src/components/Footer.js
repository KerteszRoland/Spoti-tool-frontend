function Footer({logo, url}) {
  return (
    <footer>
      <img src={logo} width="88px" height="88px" alt="" />
      <span>{url}</span>
    </footer>
  );
}

export default Footer;
