import { Container, Form, Header } from './styles'

import {
  Button,
  Heading,
  MultiStep,
  Text,
  TextInput,
} from '@hanyel-ignite-ui/react'
import { ArrowRight } from 'phosphor-react'

export default function Register() {
  return (
    <Container>
      <Header>
        <Heading as="strong">Bem-vindo ao Ignite Call!</Heading>
        <Text>
          Precisamos de algumas informações para criar seu perfil! Ah, você pode
          editar essas informações depois.
        </Text>

        <MultiStep as="div" size={4} currentStep={1} />

        <Form as="form">
          <label>
            <Text size="sm">Nome de usuário</Text>
            <TextInput
              as="input"
              prefix="ignite.com/"
              placeholder="seu-usuário"
              variants={{ size: 'md' }}
            />
          </label>

          <label>
            <Text size="sm">Nome completo</Text>
            <TextInput
              as="input"
              placeholder="Seu nome"
              variants={{ size: 'md' }}
            />
          </label>
          <Button>
            Próximo passo
            <ArrowRight />
          </Button>
        </Form>
      </Header>
    </Container>
  )
}
