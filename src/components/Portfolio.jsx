
import img1 from '../assets/portfolio/master-chef.png';
import img2 from '../assets/portfolio/dragon.png';
import img3 from '../assets/portfolio/sports-academy.png';
import img4 from '../assets/portfolio/toy-emporium.png';
import img5 from '../assets/portfolio/bistro.png';
import img6 from '../assets/portfolio/reactParallax.jpg';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: img1,
      demo: 'https://chef-recipe-client-63c1f.web.app/',
      code: 'https://github.com/shuvo9620/chef-recipe-client'
    },
    {
      id: 2,
      src: img2,
      demo: 'https://the-news-dragon.web.app/',
      code: 'https://github.com/shuvo9620/the-news-dragon-server'
    },
    {
      id: 3,
      src: img3,
      demo: 'https://sports-academy-school.web.app/',
      code: 'https://github.com/shuvo9620/sports-academy-school-client'
    },
    {
      id: 4,
      src: img4,
      demo: 'https://toy-emporium-3dc92.web.app/',
      code: 'https://github.com/shuvo9620/toy-emporium-client'
    },
    {
      id: 5,
      src: img5,
      demo: 'https://bistro-boss-e98d1.web.app/',
      code: 'https://github.com/shuvo9620/bistro-boss-client'
    },
    {
      id: 6,
      src: img6,
      demo: 'https://chef-recipe-client-63c1f.web.app/',
      code: 'https://github.com/shuvo9620/chef-recipe-client'
    },
  ];

  const handleDemoClick = (demoLink) => {
    window.open(demoLink, '_blank');
  };

  const handleCodeClick = (codeLink) => {
    window.open(codeLink, '_blank');
  };

  return (
    <div>
      <div
        name='portfolio'
        className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'
      >
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
          <div className='pb-8 mt-40 '>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
            <p className='py-6'>Check out some of my recent projects here</p>
          </div>

          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {portfolios.map(({ id, src, demo, code }) => (
              <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img className='rounded-md duration-200 hover:scale-105' src={src} alt='projects' />
                <div className='flex justify-center items-center'>
                  <button
                    className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'
                    onClick={() => handleDemoClick(demo)}
                  >
                    Demo
                  </button>
                  <button
                    className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'
                    onClick={() => handleCodeClick(code)}
                  >
                    Code
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
