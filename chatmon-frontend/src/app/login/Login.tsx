'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'

import { 
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Stack,
  TextField,
  Typography
} from '@mui/material'

const Login = () => {
  const [ isLogin,  setIsLogin  ] = useState(true)
  const [ formData, setFormData ] = useState({ email: '', password: '' })
  const router = useRouter()

  const isValidEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return regex.test(email)
  }
  
  const handleAuth = async () => {
    if (!isValidEmail(formData?.email))
      return alert('Invalid email')
    if (formData?.password?.length === 0)
      return alert('Password cannot be empty')

    const endpoint = isLogin ? '/login' : '/signup';
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_API}/user${endpoint}`, formData, { withCredentials: true } )
      if (response?.data?.token)
        router.push('/chat')
      else if (response?.data?.error)
        alert(response?.data?.error)
      else
        alert('Sucessfully signed up') // Errors are already caught
    } 
    catch (error) {
      if (axios.isAxiosError(error))
        console.error('Authentication failed:', error.message)
      else
        console.error('Unexpected error:', error)
    }
  }

  return (
    <Box>
      <Card sx={{
        maxWidth:  '500px', 
        margin:    '0 auto',
        marginTop: '64px',
        border:    '1px solid white',
        backgroundColor:'rgba(255,255,255,0.55)',
        backdropFilter: 'blur(50px)',
        boxShadow:      '4px 4px 4px rgba(30,30,30,0.1)',
        borderRadius:   '10px'
      }}>
        <CardContent sx={{color: '#777'}}>
          <Typography variant='h4'>{isLogin ? 'Login' : 'Signup'}</Typography>
          <Stack spacing={1} sx={{margin: '16px 0 16px 0'}}>
            <TextField
              fullWidth
              label='Email'
              value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
            />
            <TextField
              fullWidth
              label='Password'
              type='password'
              value={formData.password}
              onChange={e => setFormData({ ...formData, password: e.target.value })}
            />
          </Stack>
          <CardActions>
            <Button 
              fullWidth
              variant='contained'
              sx={{
                backgroundColor: 'rgb(100,150,255)',
                boxShadow: '4px 4px 4px rgba(30,30,30,0.1)'
              }}
              onClick={handleAuth}>
                {isLogin ? 'Login' : 'Create an account'}
            </Button>
          </CardActions>
            <Typography sx={{display: 'inline-block', marginRight: '2px'}}>
              { isLogin ? 'Don\'t have an account?' : 'Already have an account?' }
            </Typography>
            <Typography sx={{display: 'inline-block', color: 'rgb(100,150,255)', cursor: 'pointer'}} onClick={() => setIsLogin(!isLogin)}>
              { isLogin ? 'Sign up' : 'Login' }
            </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}

export default Login
