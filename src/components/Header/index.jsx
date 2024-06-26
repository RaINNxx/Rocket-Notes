import {RiShutDownLine} from 'react-icons/ri'
import { useAuth } from '../../hooks/auth'

import { Container, Profile, Logout } from './styles'

export function Header() {
  const {signOut} = useAuth()

  return (
    <Container>
      <Profile to='/profile'>
        <img
          src="https://github.com/RaINNxx.png"
          alt="Foto do usuário"
        />

        <div>
          <span>Bem-vindo</span>
          <strong>Cauã Henrique</strong>
        </div>
      </Profile>

      <Logout onClick={signOut}>
        <RiShutDownLine/>
      </Logout>
    </Container>
  )
}