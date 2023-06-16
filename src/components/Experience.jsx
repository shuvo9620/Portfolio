import expimg1 from '../assets/experience/html.png'
import expimg2 from '../assets/experience/css.png'
import expimg3 from '../assets/experience/javascript.png'
import expimg4 from '../assets/experience/react.png'
import expimg5 from '../assets/experience/nextjs.png'
import expimg6 from '../assets/experience/node.png'
import expimg7 from '../assets/experience/tailwind.png'
import expimg8 from '../assets/experience/bootstrap.png'
import expimg9 from '../assets/experience/mongoDb.svg'
import expimg10 from '../assets/experience/crud.jpg'


const Experience = () => {
    const experiences = [
        {
            id: 1,
            src: expimg1,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: expimg2,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: expimg3,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: expimg4,
            title: 'React',
            style: 'shadow-blue-600'
        },
        {
            id: 5,
            src: expimg5,
            title: 'Next JS',
            style: 'shadow-white'
        },
        {
            id: 6,
            src: expimg6,
            title: 'Node',
            style: 'shadow-blue-500'
        },
        {
            id: 7,
            src: expimg7,
            title: 'Tailwind',
            style: 'shadow-sky-400'
        },
        {
            id: 8,
            src: expimg8,
            title: 'Bootstrap',
            style: 'shadow-purple-500'
        },
        {
            id: 9,
            src: expimg9,
            title: 'mongoDB',
            style: 'shadow-blue-300'
        },
        {
            id: 1,
            src: expimg10,
            title: 'Crud',
            style: 'shadow-white'
        },
    ]
    return (
        <div>
            <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full h-fit'>
                <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                    <div className='mt-36'>
                        <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experiences</p>
                        <p className='py-6'>These are the technologies I've worked with</p>
                    </div>

                    <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

                        {
                            experiences.map(({ id, src, title, style }) => (
                                <div key={id}
                                    className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                                    <img className='w-20 mx-auto' src={src} alt="" />
                                    <p className='mt-4'>{title}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;