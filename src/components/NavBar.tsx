import React from 'react'

interface NavBarProps {
  onSearch?: (searchTerm: string) => void;
}

const NavBar: React.FC<NavBarProps> = () => {
  return (
    <nav style={navBarStyle}>
      <div style={containerStyle}>
        
        <div style={brandSectionStyle}>
          <div style={logoStyle}>
            <h1 style={brandTextStyle}>WeatherApp</h1>
          </div>
        </div>
        
        <div style={navLinksStyle}>
          <a href="current" style={navLinkStyle}>Current</a>
          <a href="forecast" style={navLinkStyle}>Forecast</a>
          <a href="maps" style={navLinkStyle}>Maps</a>
        </div>
      </div>
    </nav>
  )
}


const navBarStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
  backgroundColor: '#4a5568',
  borderBottom: '2px solid #4a5568',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  backdropFilter: 'blur(10px)',
};

const containerStyle: React.CSSProperties = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '70px',
  gap: '20px',
};

const brandSectionStyle: React.CSSProperties = {
  flex: '0 0 auto',
  minWidth: '200px',
};

const logoStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  cursor: 'pointer',
};


const brandTextStyle: React.CSSProperties = {
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#0068b3ff',
  margin: 0,
  background: 'linear-gradient(135deg, #63b3ed, #90cdf4)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
};



const navLinksStyle: React.CSSProperties = {
  flex: '0 0 auto',
  display: 'flex',
  gap: '25px',
  alignItems: 'center',
  minWidth: '200px',
  justifyContent: 'flex-end',
};

const navLinkStyle: React.CSSProperties = {
  color: '#ffffff',
  textDecoration: 'none',
  fontSize: '16px',
  fontWeight: '500',
  padding: '8px 16px',
  borderRadius: '8px',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
};

export default NavBar;