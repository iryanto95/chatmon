import { useContext, useEffect, useRef, useState } from 'react'

import { 
  Box,
  Button,
  Card,
  CardContent,
  Typography
} from '@mui/material'
import { ArrowDownward } from '@mui/icons-material'
import { MuiMarkdown } from 'mui-markdown'

import { ChatContext } from '../ChatContextProvider'

const ChatHistory = () => {
  const { chatHistory } = useContext(ChatContext)
  const [ isAtBottom, setIsAtBottom ] = useState(true)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current && isAtBottom)
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
  }, [chatHistory, isAtBottom])

  return (
    <Box 
      ref={scrollRef}
      sx={{
        width:     '100%', 
        overflowY: 'auto', 
        border:    '1px solid #aaa', 
        height:    'calc(100vh - 148px)',
        padding:   '16px',
        borderRadius: '10px'
      }}
      onScroll={() => {
        if (scrollRef.current) {
          const { scrollTop, scrollHeight, clientHeight } = scrollRef.current
          setIsAtBottom(scrollTop + clientHeight === scrollHeight)
        }
      }}
    >
      {
        chatHistory.map((c: {prompt: string, response: string}, i: number) => { return (
          <Box key={i}>
            <Card sx={{
              maxWidth: '75%', 
              right: '0px', 
              marginLeft: 'auto', 
              marginBottom: '16px',
              backgroundColor:'rgba(100,150,255,0.55)',
              boxShadow: '4px 4px 4px rgba(30,30,30,0.1)',
              borderRadius: '10px'
            }}>
              <CardContent>
                <Typography>{c.prompt}</Typography>
              </CardContent>
            </Card>
            <Card sx={{
              maxWidth: '75%',
              left: '0px', 
              marginBottom: '16px',
              backgroundColor:'rgba(255,255,255,0.25)',
              boxShadow: '4px 4px 4px rgba(30,30,30,.1)',
              borderRadius: '10px'
            }}>
              <CardContent>
                <MuiMarkdown>{c.response}</MuiMarkdown>
              </CardContent>
            </Card>
          </Box>
        )})
      }
      { !isAtBottom && 
        <Button 
          variant='contained'
          sx={{
            position: 'absolute',
            bottom: '128px',
            left: '50%',
            transform: 'translate(0,50%)',
            borderRadius: '15px',
            backgroundColor: 'rgb(100,150,255)'
          }}
          onClick={() => {
            if (scrollRef.current)
              scrollRef.current.scrollTop = scrollRef.current.scrollHeight
            setIsAtBottom(true)
          }}
        >
          <ArrowDownward/>
        </Button>
      }
    </Box>
  )
}

export default ChatHistory