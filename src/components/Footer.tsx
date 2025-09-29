import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={footerStyle}>

      <div style={bottomBarStyle}>
        <div style={containerStyle}>
          <div style={bottomContentStyle}>
            <p style={copyrightStyle}>
              © {currentYear} Weather App. All rights reserved.
            </p>
            <div style={socialLinksStyle}>
              <a href="#privacy" style={bottomLinkStyle}>Privacy Policy</a>
              <a href="#terms" style={bottomLinkStyle}>Terms of Service</a>
              <a href="#contact" style={bottomLinkStyle}>Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}


const footerStyle: React.CSSProperties = {
  backgroundColor: '#373ad3ff',
  color: '#edeff3ff',
  width: '100%',
  position: "absolute",
  bottom: 1
};

const containerStyle: React.CSSProperties = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 20px',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  gap: '30px',
  paddingTop: '40px',
  paddingBottom: '20px',
};


const bottomBarStyle: React.CSSProperties = {
  backgroundColor: '#373ad3ff',
  borderTop: '1px solid #4a5568',
  paddingTop: '5px',
  paddingBottom: '20px',
};

const bottomContentStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '15px',
};

const copyrightStyle: React.CSSProperties = {
  fontSize: '14px',
  color: '#f7f8faff',
  margin: 0,
};

const socialLinksStyle: React.CSSProperties = {
  display: 'flex',
  gap: '20px',
};

const bottomLinkStyle: React.CSSProperties = {
  color: '#eff2f7ff',
  textDecoration: 'none',
  fontSize: '14px',
  transition: 'color 0.3s ease',
  cursor: 'pointer',
};

export default Footer;