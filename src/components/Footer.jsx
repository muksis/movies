import tmdb from '../assets/tmdb.svg';

const Footer = () => {
  return (
    <div className='flex flex-col items-center pt-4 pb-2 z-[100] w-full absolute'>
      <div>
        <img src={tmdb} alt='logo' className='h-5' />
      </div>
      <div>
        <p className='text-white p-2'>
          This product uses the TMDB API but is not endorsed or certified by
          TMDB
        </p>
      </div>
    </div>
  );
};

export default Footer;
