import { useContext, useState } from 'react'

import { 
  Button,
  CircularProgress,
  Grid2 as Grid,
  TextField
} from '@mui/material'
import { Send } from '@mui/icons-material'

import { ChatContext } from '../ChatContextProvider'

const PromptBox = () => {
  const [ prompt, setPrompt ] = useState('')
  const { isLoadingResponse, submitPrompt } = useContext(ChatContext)

  return (
    <Grid container sx={{marginTop: '16px'}}>
      <Grid size={11}>
        <TextField
          fullWidth
          disabled={isLoadingResponse}
          value={prompt}
          onChange={e => setPrompt(e.target.value)}/>
      </Grid>
      <Grid size={1}>
        <Button 
          fullWidth
          variant='contained'
          sx={{height: '56px', backgroundColor: 'rgb(100,150,255)'}}
          disabled={isLoadingResponse}
          onClick={() => {
            submitPrompt(prompt)
            setPrompt('')
          }}>
          { isLoadingResponse ? <CircularProgress/> : <><Send sx={{marginLeft: '8px'}}/></> }
        </Button>
      </Grid>
    </Grid>
  )
}

export default PromptBox