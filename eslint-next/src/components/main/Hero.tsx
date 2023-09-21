import Image from 'next/image'
import { images } from '../../constants'
import Link from 'next/link'

export default function Hero() {
  return (
    <>
      <div className="">
        <Image
          src={images.clinica}
          alt="foto da clinica"
          className="absolute z-0 h-screen object-cover"
        />
        <div className="absolute z-0 h-full w-full bg-[#00000088]" />
      </div>
      <div className="flex-center section-spacing min-h-screen flex-col gap-8 bg-mainPalette-bg">
        <div className="z-10 flex flex-col gap-4">
          <h1 className="text-4xl text-mainPalette-textAlt">
            Instituto de Gastroenterologia de Amparo
          </h1>
          <h2 className="text-mainPalette-textLowlight">
            Especialidade no estudo, diagnóstico e tratamento de doenças no
            sistema digestivo humano
          </h2>
        </div>
        <div className="z-10 flex gap-4">
          <Link
            href={'/login'}
            className="rounded-md bg-mainPalette-primaryColor px-4 py-2"
          >
            Meus exames
          </Link>
          <button className="rounded-md bg-mainPalette-secondaryColor px-4 py-2">
            Contato
          </button>
        </div>
      </div>
    </>
  )
}
