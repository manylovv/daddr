import React, { useState, useRef, useEffect } from 'react';
import Fireworks from './components/Fireworks';
import './App.css';

const photos = [
  <div style={{ height: '100%', overflow: 'hidden' }}>
    <img
      className="photo"
      src="https://res.cloudinary.com/dyvx6jeqt/image/upload/v1667533751/photo_2022-11-04_10-46-44_q98we8.jpg"
    />
    <img
      className="photo photo-1"
      src="https://res.cloudinary.com/dyvx6jeqt/image/upload/v1667536588/photo1.1_z8xkfq.jpg"
    />
    <h1 className="description">самый милый</h1>
  </div>,

  <div style={{ height: '100%', overflow: 'hidden' }}>
    <img
      className="photo"
      src="https://res.cloudinary.com/dyvx6jeqt/image/upload/v1667539151/photo2.1_pqvlsu.jpg"
    />
    <h1 className="description">самый крутой</h1>
  </div>,

  <div style={{ height: '100%', overflow: 'hidden' }}>
    <img
      style={{ width: 500, height: 'auto' }}
      className="photo"
      src="https://res.cloudinary.com/dyvx6jeqt/image/upload/v1667539171/photo3.1_scpwqp.jpg"
    />
    <img
      className="photo photo-2"
      src="https://res.cloudinary.com/dyvx6jeqt/image/upload/v1667533752/photo_2022-11-04_10-47-09_oqwubu.jpg"
    />
    <h1 className="description">самый умный</h1>
  </div>,

  <div style={{ height: '100%', overflow: 'hidden' }}>
    <img
      className="photo"
      src="https://res.cloudinary.com/dyvx6jeqt/image/upload/v1667539172/photo4.1_isyuap.jpg"
    />
    <h1 className="description">босс</h1>
  </div>,

  <div style={{ height: '100%', overflow: 'hidden' }}>
    <img
      className="photo"
      src="https://res.cloudinary.com/dyvx6jeqt/image/upload/v1667539173/photo6_p0xrmt.jpg"
    />
    <h1 className="description">интеллегентный</h1>
  </div>,

  <div style={{ height: '100%', overflow: 'hidden' }}>
    <img
      className="photo"
      src="https://res.cloudinary.com/dyvx6jeqt/image/upload/v1667539173/photo5_gcly3e.jpg"
    />
    <h1 className="description">самый хозяйственный</h1>
  </div>,

  <div style={{ height: '100%', overflow: 'hidden' }}>
    <img
      style={{ transform: `translate(700px, 0)` }}
      className="photo"
      src="https://res.cloudinary.com/dyvx6jeqt/image/upload/v1667539173/photo7_yfu5ik.jpg"
    />
    <h1 className="description"></h1>
  </div>,

  <div style={{ height: '100%', overflow: 'hidden' }}>
    <h1>слайды для мамы (без приколов)</h1>
  </div>,

  <div style={{ height: '100%', overflow: 'hidden' }}>
    <img
      className="photo"
      style={{ transform: `translate(1000px, 0)`, width: 500 }}
      src="https://res.cloudinary.com/dyvx6jeqt/image/upload/v1667539316/photo_2022-11-04_10-47-20_gche8s.jpg"
    />

    <img
      className="photo"
      style={{ transform: `translate(500px, 0)`, width: 500 }}
      src="https://res.cloudinary.com/dyvx6jeqt/image/upload/v1667539315/photo_2022-11-04_10-47-22_oy358z.jpg"
    />
    <img
      className="photo"
      style={{ transform: `translate(0, 0)`, width: 500 }}
      src="https://res.cloudinary.com/dyvx6jeqt/image/upload/v1667539282/photo_2022-11-04_10-46-51_t5zwou.jpg"
    />
    <h1 className="description">заботливый отец</h1>
  </div>,
  <div style={{ height: '100%', overflow: 'hidden' }}>
    <img
      className="photo"
      style={{ transform: `translate(1000px, 0)`, width: 500 }}
      src="https://res.cloudinary.com/dyvx6jeqt/image/upload/v1667539298/photo_2022-11-04_10-47-35_jqukxt.jpg"
    />
    <img
      className="photo"
      style={{ transform: `translate(500px, 0)`, width: 500 }}
      src="https://res.cloudinary.com/dyvx6jeqt/image/upload/v1667533754/photo_2022-11-04_10-47-38_ftnd59.jpg"
    />
    <img
      className="photo"
      style={{ transform: `translate(0, 0)`, width: 500 }}
      src="https://res.cloudinary.com/dyvx6jeqt/image/upload/v1667539283/photo_2022-11-04_10-46-55_iv0gmc.jpg"
    />
    <h1 className="description">любящий муж</h1>
  </div>,

  <div style={{ height: '100%', overflow: 'hidden' }}>
    <h1>дальше открытки из вотсапа (с приколами)</h1>
  </div>,

  <div style={{ height: '100%', overflow: 'hidden' }}>
    <img
      style={{ transform: `translate(700px, 0)` }}
      className="photo"
      src="https://res.cloudinary.com/dyvx6jeqt/image/upload/v1667541257/muzykalnaya-otkrytka-s-dnem-rozhdeniya-maksim-57149_rydzhx.gif"
    />
  </div>,
  <div style={{ height: '100%', overflow: 'hidden' }}>
    <img
      style={{ transform: `translate(100px, 0)` }}
      className="photo"
      src="https://res.cloudinary.com/dyvx6jeqt/image/upload/v1667544247/12_maksim_hlniev.gif"
    />
  </div>,

  <div style={{ height: '100%', overflow: 'hidden' }}>
    <img
      style={{ transform: `translate(300px, 0)` }}
      className="photo"
      src="https://res.cloudinary.com/dyvx6jeqt/image/upload/v1667544334/animatsionnaya-otkrytka-s-dnem-rozhdeniya-maksimu-2001_vyvo2m.gif"
    />
  </div>,
  <div style={{ height: '100%', overflow: 'hidden' }}>
    <img
      style={{ transform: `translate(300px, 0)` }}
      className="photo"
      src="https://res.cloudinary.com/dyvx6jeqt/image/upload/v1667544334/animatsionnaya-otkrytka-s-dnem-rozhdeniya-maksimu-2001_vyvo2m.gif"
    />
  </div>,
  null,
  null,
];

function App() {
  const videoRef = useRef(null);
  const [partyState, setPartyState] = useState('notStarted'); // notStarted | preparing | started | finished
  const [videoTime, setVideoTime] = useState(0);
  const [currentPhoto, setCurrentPhoto] = useState(photos[0]);

  // update video time

  useEffect(() => {
    if (partyState === 'started') {
      const video = videoRef.current;
      video.play();
      video.addEventListener('ended', () => {
        setPartyState('finished');
      });

      const interval = setInterval(() => {
        const currentPhotoIndex = photos.indexOf(currentPhoto);
        console.log('hi');

        if (currentPhotoIndex === photos.length - 1) {
          return clearInterval(interval);
        }

        const nextPhotoIndex = currentPhotoIndex + 1;
        const nextPhoto = photos[nextPhotoIndex];

        setCurrentPhoto(nextPhoto);
        setVideoTime(videoRef.current.currentTime);
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [partyState, currentPhoto]);

  if (partyState === 'notStarted') {
    return (
      <button
        className="center btn glow"
        onClick={() => setPartyState('started')}
      >
        Start party
      </button>
    );
  }

  function renderPostCard() {
    return (
      <div className="postcard">
        <h1>отец, поздравляю с днем рождения 🎉🎈🎊</h1>
        <p>
          желаю тебе взломать всю криптовалюту в мире 💎
          <br />
          и стать самым богатым человеком на планете 🪙
          <br />
          скоро мы бахнем стартапчик 💡
          <br />
          и поедем жить в сша 🇺🇸
          <br />
          ты лучший, продолжай в том же духе 🤠
          <br />
          я тебе тоже дарю купон на маккомбо 🍔
          <br />
          люблю, сын ❤️
        </p>
      </div>
    );
  }

  // if (partyState === 'preparing') {
  //   return (
  //     // add two options and question are you sure?
  //     <div className="center">
  //       <h1>Are you sure???</h1>
  //       <button className="btn" onClick={() => setPartyState('started')}>
  //         Start Party
  //       </button>
  //       <button className="btn" onClick={() => setPartyState('notStarted')}>
  //         Cancel
  //       </button>
  //     </div>
  //   );
  // }

  return (
    <div className="App">
      <div className="center">
        <div className="video-wrapper">
          <video
            controls
            hidden={videoTime > 55}
            ref={videoRef}
            style={{ width: 640, height: 'auto', zIndex: -10 }}
          >
            <source
              src="https://res.cloudinary.com/dyvx6jeqt/video/upload/v1667498224/vid_av347m.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>

      {videoTime < 55 ? currentPhoto : renderPostCard()}

      <Fireworks />
    </div>
  );
}

export default App;
