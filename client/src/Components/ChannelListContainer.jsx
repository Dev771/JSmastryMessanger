import React from 'react';
import { ChannelList, useChatContext } from 'stream-chat-react';
import Cookie from 'universal-cookie';

import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './';
import HospitalIcon from '../assets/hospital.png';
import LogoutIcon from '../assets/logout.png';

const SideBar = () => {
    return (
        <div className='channel-list__sidebar'>
            <div className='channel-list__sidebar__icon1'>
                <div className='icon1__inner'>
                    <img src={HospitalIcon} alt='Hospital' width='30' />
                </div>
            </div>
            <div className='channel-list__sidebar__icon1'>
                <div className='icon1__inner'>
                    <img src={LogoutIcon} alt='Hospital' width='30' />
                </div>
            </div>
        </div>
    )
}

const CompanyHeader = () => {
    return (
        <div className='channel-list__header'>
            <p className='channel-list__header__text'>Medical pager</p>
        </div>
    )
}

const ChannelListContainer = () => {
    return (
        <>
            <SideBar />
            <div className='channel-list__list__wrapper'>
                <CompanyHeader />
                <ChannelSearch />
            </div>
        </>
    )
}

export default ChannelListContainer;