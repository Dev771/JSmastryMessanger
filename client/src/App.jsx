import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookie from 'universal-cookie';

import './App.css';

import { ChannelContainer, ChannelListContainer } from './Components';

const apiKey = 'garj9ywskqgu';

const client = StreamChat.getInstance(apiKey);

const App = () => {
  return (
    <div className='app__wrapper'>
      <Chat client={client} theme='team light'>
        <ChannelListContainer
          
        />
        <ChannelContainer
        
        />
      </Chat>
    </div>
  )
}

export default App