

const Banner = () => {
    return (
        <div className=" md:flex items-center justify-around py-10 bg-slate-100 rounded-3xl text-black">
            <div className="pl-20">
                <h1 className="text-4xl md:text-6xl mb-6 font-bold">Books to freshen up your bookshelf</h1>
                <button className='bg-green-500 px-4 py-2  text-white text-xl rounded-md'>View The List</button>
            </div>
            <div className="md:w-2/4 w-1/3 ml-28 mt-5">
                <img src="https://i.ibb.co/J5gC2TM/pngwing-1.png" alt="banner book" />
            </div>
        </div>
    );
};

export default Banner;