'use client'
import ChatContextProvider from './ChatContextProvider'

import ChatHistory from './components/ChatHistory'
import MenuButton from './components/MenuButton'
import PromptBox from './components/PromptBox'

import { 
  Card,
  CardContent,
} from '@mui/material'

const ChatPage = () => {
  return (
    <ChatContextProvider>
      <Card sx={{
        margin: '16px',
        border: '1px solid white',
        backgroundColor:'rgba(255,255,255,0.55)',
        backdropFilter: 'blur(50px)',
        boxShadow: '4px 4px 4px rgba(30,30,30,0.1)',
        borderRadius: '10px'
      }}>
        <CardContent>
          <MenuButton/>
          <ChatHistory/>
          <PromptBox/>
        </CardContent>
      </Card>
    </ChatContextProvider>
  )
}

export default ChatPage