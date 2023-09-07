import React from 'react';
import WaveBackground from './WaveBackground';
import PurpleWave from './PurpleWave'
import Images from './images/Tender.png';
import Image from 'next/image';

function NavigationBar() {
  const navStyle = {
    position: 'relative',
    background: 'transparent',
    color: '#fff',
    padding: '20px',
    display: 'flex',
    justifyContent: 'flex-end',
    zIndex: '1',
  };

  const linkStyle = {
    marginRight: '10px',
    color: '#fff',
    textDecoration: 'none',
    marginLeft: '20px',
    fontSize: '20px',
  };

  return (
    <nav style={navStyle}>
      <a href="/" style={linkStyle}>
        Home
      </a>
      <a href="C:\Users\priya\OneDrive\Desktop\MPR2023\MPR2023\app\components\Calender.js" style={linkStyle}>
        Calendar
      </a>
      <a href="/diet-plan" style={linkStyle}>
        Diet Plan
      </a>
    </nav>
  );
}

function Page() {
  const containerStyle = {
    marginLeft: '40px',
    marginTop: '200px',
    justifyContent: 'space-between', 
    alignItems: 'center',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: '40px',
  };

  const containerStyleBottom = {
    marginLeft: '40px',
    marginTop: '120px',
    justifyContent: 'space-between', 
    alignItems: 'center',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: '40px',
  };

  const textContainerStyle = {
    marginleft: '90px',
    marginBottom: '20px',
  };

  const imageStyle = {
    marginTop: '10px',
    marginLeft: '40px',
    marginRight: '40px',
    width: '900px',
    height: '600px',
    borderRadius: '200px',
  };

  const imageStyleLeft = {
    marginLeft: '20px',
    marginRight: '40px',
    width: '600px',
    height: '400px',
    borderRadius: '200px',
    marginBottom: '60px',
  };

  const descriptionStyle = {
    marginTop: '20px', 
    fontSize: '16px', 
    color: 'black',
  };

  const imageOnTopLeftStyle = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '80px',
    height: '80px',
  };

  return (
    <div>
      <PurpleWave/>
       <NavigationBar />
       {/* <div style={imageOnTopLeftStyle}>
        <Image
          src={Image}
          alt="Your Image"
          style={{ width: '80px', height: 'auto' }}
          onError={(e) => {
            console.error('Image load error:', e);
          }}
          onLoad={() => {
            console.log('Image loaded successfully.');
          }}
        />
      </div> */}
    <div style={containerStyle}>
      <div style={textContainerStyle}>
        <div>
          <span style={{ color: 'black' }}>Your</span>
          <span style={{ color: '#5b21b6' }}> lifestyle partner</span>
        </div>
        <div style={descriptionStyle}>
        Discover Your Best Life with Us - Welcome to our lifestyle 
        consultancy, where we help you unlock the secrets to a happier, healthier,
        and more fulfilled life. Our expert guidance and personalized solutions empower
         you to make positive changes in various aspects of your life, from wellness and relationships to
          personal growth and career success. Let us be your trusted partner on your journey to a better, more balanced lifestyle.
        </div>
      </div>
      <img
        src="https://img.freepik.com/premium-photo/little-girl-practicing-fitness-nature_446232-455.jpg?w=1060"
        style={imageStyle}
      />
    </div>


    <div style={{marginTop: '80px' , textAlign: 'center', fontWeight: 'bold', fontSize: '40px' }}>
   <p>Discover Harmony with</p>
   </div>

    <div style={containerStyleBottom}>
        <img
          src="https://img.freepik.com/premium-photo/creative-compostion-modern-kitchen-with-copy-space-healthy-food-eating-selection-fruits-vegetables-super-food-seeds-marble-background_431307-6245.jpg?size=626&ext=jpg&uid=R111949587&semt=ais"
          style={imageStyleLeft}
        />

       <div style={textContainerStyle}>
          <div>
            <span style={{ color: 'black' }}>Healthy</span>
            <span style={{ color: 'black' }}> Diet</span>
          </div>
          <div style={descriptionStyle}>
            Discover the Benefits of a Healthy Diet - Our nutrition experts are here to guide you on the path to a healthier lifestyle through balanced and nutritious eating habits. Whether you're looking to lose weight, improve your overall health, or simply make better food choices, we have the knowledge and tools to help you achieve your goals.
          </div>
        </div>
      </div>

      <div style={{ position: 'absolute', width: '100%' }}>
        <WaveBackground />
      </div>
    </div>
  );
}

export default Page;

