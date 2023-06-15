
const NavBar = () => {

    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'portfolio'
        },
        {
            id: 4,
            link: 'experience'
        },
        {
            id: 5,
            link: 'contact'
        },
    ]

    return (
        <div className="flex justify-between items-center w-full h-20 px-4 bg-black text-white">
            <div>
                <h2 className="text-5xl font-signature ml-2">Shuvo</h2>
            </div>

            <ul className="hidden md:flex">

                {
                    links.map(({id, link}) => (
                        <li key={id} className="px-4 cursor-pointer font-medium text-gray-500 hover:scale-105 duration-200 uppercase">{link}</li>
                    ))
                }

            </ul>

            <div>
                <FaBars
            </div>
        </div>
    );
};

export default NavBar;