import { useState } from 'react'
import { FiArrowLeft,FiUser,FiMail,FiLock,FiCamera  } from 'react-icons/fi'
import { Input } from '../../components/Input'

import { useAuth } from '../../hooks/auth'

import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'

import { Container,Form, Avatar } from './styles'

export function Profile() {
   const { user } = useAuth()
   const [ name, setName ] = useState(user.name)
   const [ email, setEmail ] = useState(user.email)
   const [ passwordOld, setPasswordOld ] = useState()
   const [ passwordNew, setPasswordNew ] = useState()

    return (
        <Container>
           <header>
            <Link to="/">
            <FiArrowLeft/>
            </Link>
           </header>

           <Form>
            <Avatar>
                <img 
                 src="https://github.com/RaINNxx.png"
                 alt="Foto do usuario"
                 />

                 <label htmlFor="avatar">
                    <FiCamera/>

                    <input
                    id='avatar'
                    type='file'
                    />
                 </label>
            </Avatar>
               <Input 
                  placeholder="nome"
                  type="text"
                  icon={FiUser}
                  value={name}
                  onChange={e => setName(e.target.value)}
               />

                <Input 
                  placeholder="E-mail"
                  type="text"
                  icon={FiMail}
                  value={email}
                  onChange={e => setEmail(e.target.value)}
               />

                <Input 
                  placeholder="Senha Atual"
                  type="password"
                  icon={FiLock}
                  onChange={e => setPasswordOld(e.target.value)}
               />

                <Input 
                  placeholder="Nova Senha"
                  type="password"
                  icon={FiLock}
                  onChange={e => setPasswordNew(e.target.value)}
               />

               <Button
                title="Salvar"
               />

           </Form>
        </Container>
    )
}