
import "./../css/Footer.css"; // Create and import CSS later

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer style={{ padding: '20px 0', textAlign: 'center', borderTop: '1px solid #eee', marginTop: '50px' }}>
      {/* Minimalist links placeholder */}
      <div style={{ marginBottom: '10px' }}>
        <a href="#about" style={{ margin: '0 10px' }}>About</a>
        <a href="#projects" style={{ margin: '0 10px' }}>Projects</a>
        <a href="#contact" style={{ margin: '0 10px' }}>Contact</a>
      </div>
      {/* Small quote placeholder */}
      <p style={{ fontStyle: 'italic', fontSize: '0.9em', color: '#777' }}>"Stay curious."</p>
      <p style={{ fontSize: '0.8em', color: '#aaa' }}>
        © {currentYear} Likith Reddy. All rights reserved.
      </p>
      {/* Optional GitHub/Wakatime stats placeholder */}
      {/* <div>[GitHub Activity / Wakatime Stats Placeholder]</div> */}
    </footer>
  );
};

export default Footer;
