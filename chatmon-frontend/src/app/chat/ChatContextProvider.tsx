import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

interface IChatContext {
  chatHistory: Array<{time: number, prompt: string, response: string}>,
  isLoadingResponse: boolean,
  submitPrompt: (prompt: string) => void
}

export const ChatContext = createContext<IChatContext>({
  chatHistory: [{time: -1, prompt: '', response: ''}],
  isLoadingResponse: false,
  submitPrompt: () => {}
})

export default function ChatContextProvider({ children }: { children: React.ReactNode }) {
  const [ chatHistory, setChatHistory ] = useState<Array<{time: number, prompt: string, response: string}>>([])
  const [ isLoadingResponse, setIsLoadingResponse ] = useState(false)
  const [ isMounted, setIsMounted ] = useState(false) // To prevent hydration error
  

  useEffect(() => {
    axios.post(`${process.env.NEXT_PUBLIC_BACKEND_API}/chat/retrieve`, {}, {withCredentials: true})
      .then(res => {
        if (res.status === 200) {
          return setChatHistory(res?.data?.chatHistory || [])
        }
        else
          return console.log(res.data)
      })
      .catch(err => {
        if (err.status === 403 || err.status === 401) {
          alert('You are not logged in')
          window.location.href = '/login'
        }
        else
          return console.log(err)
      })
  }, [])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted)
    return null

  const submitPrompt = async (prompt: string) => {
    try {
      setIsLoadingResponse(true)
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_API}/chat`,
        { prompt },
        { withCredentials: true }
      )
      
      const chat = {
        time:     res.data.time,
        prompt:   res.data.prompt,
        response: res.data.response
      }

      setChatHistory( prev => [ ...prev, chat ])
      setIsLoadingResponse(false)               
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.error(err.response?.data?.error || 'Error connecting to Gemini')
        setIsLoadingResponse(false)
      }
      else
        console.error('Uncaught error:', err)
    }
  }

  return (
    <ChatContext.Provider value={{
      chatHistory, 
      isLoadingResponse,
      submitPrompt,
    }}>
      {children}
    </ChatContext.Provider>
  )
}