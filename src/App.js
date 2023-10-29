import { useEffect, useState } from 'react';
import './App.scss';
import Section1 from './components/section1/Section1';
import Section2 from './components/section2/Section2';
import thankyou from './assests/messageshow.avif';
import group from './assests/Group 75.png';

function App() {

  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollPositiontrue, setScrollPositiontrue] = useState(false);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  useEffect(() => {
    if (scrollPosition === 606.4000244140625) {
      setScrollPositiontrue(true);
    }
    else {
      setScrollPositiontrue(false);

    }
  }, [scrollPosition, scrollPositiontrue])


  return (
    <div className="main-card">
      

      <div className='back-image'>
        <img src={group} alt="no image" className='back-image-app' />
      </div>
      <div className='back-image'>
        <img src={group} alt="no image" className='back-image-app-bottom' />
      </div>
      <div className='back-image'>
        <img src={group} alt="no image" className='back-image-app-bottom1' />
      </div>
      <div className='first'>

      </div>
      <div className='second'>

      </div>
      <div className='third'>

      </div>

      <div className='fourth'>

      </div>
      <div className='inside-card'>
        <div className='left-card'>
          <Section1 />
        </div>
        <div className='right-card'>
          <Section2 />
        </div>
      </div>
    </div>
  );
}

export default App;
