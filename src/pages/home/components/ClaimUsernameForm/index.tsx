import { Form } from './styles'

import { Button, TextInput } from '@hanyel-ignite-ui/react'
import { ArrowRight } from 'phosphor-react'

export function ClaimUsernameForm() {
  return (
    <Form as="form">
      <TextInput
        as="input"
        prefix="ignite.com/"
        placeholder="seu-usuário"
        variants={{ size: 'sm' }}
      />
      <Button size="sm" type="submit">
        Reservar
        <ArrowRight />
      </Button>
    </Form>
  )
}
