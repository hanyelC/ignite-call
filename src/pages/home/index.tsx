import { Container, Hero, Preview } from './styles'

import previewImage from '../../assets/app-preview.png'

import { Heading, Text } from '@hanyel-ignite-ui/react'
import Image from 'next/image'

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading as="h1" size="4xl">
          Agendamento descomplicado
        </Heading>
        <Text size="xl">
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre.
        </Text>
      </Hero>

      <Preview>
        <Image
          src={previewImage}
          alt="Calendário preview da aplicação"
          height={400}
          quality={100}
          priority
        />
      </Preview>
    </Container>
  )
}
