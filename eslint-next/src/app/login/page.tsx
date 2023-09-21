import { Input } from '@/components/ui/input'

import { User } from 'lucide-react'
import { PiPassword } from 'react-icons/pi'

export default function Dashboard() {
  return (
    <div className="flex-center h-screen">
      <form className="flex w-3/4 flex-col gap-7 indent-1 text-lg text-mainPalette-text lg:w-2/3 2xl:w-1/2">
        <div className="flex-center min-w-full flex-wrap gap-10 py-4 tracking-wide">
          <div className="contact-input-container">
            <div className="flex items-center">
              <User size={18} className="opacity-80" />
              <label htmlFor="contact-name">CPF</label>
            </div>
            <Input
              type="number"
              placeholder="Insira o seu cpf"
              id="contact-name"
            />
          </div>

          <div className="contact-input-container">
            <div className="flex items-center">
              <PiPassword size={18} className="opacity-80" />
              <label htmlFor="contact-email">Senha</label>
            </div>
            <Input
              id="contact-email"
              placeholder="Insira sua senha"
              className="contact-input"
            />
          </div>
        </div>
        <button className="self-center rounded bg-mainPalette-primaryColor px-6 py-2 text-lg font-semibold uppercase tracking-wider text-mainPalette-text">
          Entrar
        </button>
      </form>
    </div>
  )
}
