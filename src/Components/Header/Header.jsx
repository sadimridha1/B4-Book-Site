import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import MoodChange from './MoodChange';

const Header = () => {

    const bookli = <>
     <li><NavLink className={({isActive}) => isActive ? 'border border-lime-600 rounded-md px-2 py-1 text-green-600' : ''} to='/'>Home</NavLink> </li>
     <li><NavLink className={({isActive}) => isActive ? 'border border-lime-600 rounded-md px-2 py-1 text-green-600' : ''} to='/listbooks'>Listed Books</NavLink> </li>
     <li><NavLink className={({isActive}) => isActive ? 'border border-lime-600 rounded-md px-2 py-1 text-green-600' : ''} to='/pagetoRead'>Pages to Read</NavLink> </li>
    </>
    return (
        <div className='ml-10 md:ml-0 md:flex justify-between items-center mt-4 '>
            <h1 className='text-3xl md:text-2xl font-bold text-center'>Book Vibe</h1>
            <ul className='flex gap-5 md:gap-10 text-xl my-5 md:my-0'>
                {bookli}
            </ul>
            <div className='flex items-center gap-4 ml-32 md:ml-0'>
                <MoodChange />
                <Link to='/login' className='bg-green-500 px-4 py-2 text-white text-xl rounded-md'>Sing In</Link>
            </div>
        </div>
    );
};

export default Header;