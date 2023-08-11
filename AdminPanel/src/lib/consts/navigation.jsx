import { AiFillHome, AiFillSetting, AiFillQuestionCircle, AiFillMessage } from 'react-icons/ai'

export const SIDEBAR_LINKS = [
    {
        key: 'home',
        label: 'Home',
        path: '/',
        icon: <AiFillHome/>
    },
    {
        key: 'message',
        label: 'Message',
        path: '/message',
        icon: <AiFillMessage/>
    },
]

export const SIDEBAR_BOTTOM_LINKS = [
    {
        key: 'settings',
        label: 'Settings',
        path: '/settings',
        icon: <AiFillSetting/>
    },
    {
        key: 'support',
        label: 'Help & Support',
        path: '/support',
        icon: <AiFillQuestionCircle/>
    },
]