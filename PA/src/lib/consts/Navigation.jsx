import { AiFillHome, AiFillLayout } from 'react-icons/ai'
import { BiLibrary } from 'react-icons/bi'
import { BsFillPersonFill, BsFillChatLeftDotsFill } from 'react-icons/bs'
import { HiMail } from 'react-icons/hi'

import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineGithub } from 'react-icons/ai'
import { BiLogoFacebook, BiLogoLinkedin } from 'react-icons/bi'

export const SIDEBAR_LINKS = [
    {
        key: 'home',
        label: 'Home',
        path: '/',
        icon: <AiFillHome/>
    },
    {
        key: 'about',
        label: 'About',
        path: '/About',
        icon: <BsFillPersonFill/>
    },
    {
        key: 'cv',
        label: 'CV',
        path: '/Cv',
        icon: <AiFillLayout/>
    },
    {
        key: 'work',
        label: 'Work',
        path: '/Work',
        icon: <BiLibrary/>
    },
    {
        key: 'customers',
        label: 'Customers',
        path: '/Customers',
        icon: <BsFillChatLeftDotsFill/>
    },
    {
        key: 'mail',
        label: 'Mail',
        path: '/Mail',
        icon: <HiMail/>
    },
]

export const NAVBAR_LINKS = [
    {
        key: 'instagram',
        path: '/',
        icon: <AiOutlineInstagram/>
    },
    {
        key: 'twitter',
        path: '/',
        icon: <AiOutlineTwitter/>
    },
    {
        key: 'github',
        path: '/',
        icon: <AiOutlineGithub/>
    },
    {
        key: 'facebook',
        path: '/',
        icon: <BiLogoFacebook/>
    },
    {
        key: 'linkedin',
        path: '/',
        icon: <BiLogoLinkedin/>
    },

]
