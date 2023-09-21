'use client'

import { Facebook, Instagram } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import LinkNavigation from '../general/LinkNavigation'

const navLinks: { id: string; name: string }[] = [
  { id: '/', name: 'Início' },
  { id: 'about', name: 'Sobre nós' },
  { id: 'services', name: 'Exames' },
  { id: 'contact', name: 'Contato' },
]

export default function Navbar() {
  const [toggle, setToggle] = useState(false)
  const [showNavbar, setShowNavbar] = useState(false)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const router = useRouter()
  const handleLinkClick = (id: string) => {
    router.push(`/#${id}`)
  }

  useEffect(() => {
    setToggle(false)
    if (document.documentElement.scrollTop === 0) {
      setShowNavbar(true)
    }

    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      setShowNavbar(
        (prevScrollPos > currentScrollPos && currentScrollPos > 0) ||
          currentScrollPos === 0,
      )
      setPrevScrollPos(currentScrollPos)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos])

  return (
    // Logic to display or not the navbar
    <div
      className={`${
        showNavbar ? 'top-0 ' : '-top-[96px]'
      } font-main fixed left-0 right-0 z-20 h-20 shadow-md transition-all duration-700 lg:block lg:h-24`}
    >
      <nav className="flex h-full w-full ">
        <div
          className={`${
            !toggle && prevScrollPos === 0
              ? 'bg-transparent'
              : 'bg-mainPalette-bgAlt'
          } ${
            toggle ? 'bg-mainPalette-bgAlt' : ''
          } z-40 flex h-full w-full items-center justify-around px-6 transition-all duration-700`}
        >
          <div className="h-full gap-1 lg:w-[260px]">
            <LinkNavigation
              id="/"
              className={`flex-center h-full gap-3 text-2xl`}
            >
              <span className="text-mainPalette-accentColor">Dr.</span>
              <span
                className={`text-3xl transition-all duration-700 ${
                  prevScrollPos === 0
                    ? 'text-mainPalette-textAlt'
                    : 'text-mainPalette-primaryColor'
                } `}
              >
                {' '}
                Jose Nilton
              </span>
            </LinkNavigation>
          </div>

          <ul className="hidden gap-10 text-base tracking-wider lg:flex">
            {navLinks.map((item, i) => (
              <li
                key={i}
                className={`text-mainPalette-textAlt transition-all duration-700 lg:hover:text-mainPalette-textLowlight lg:hover:duration-300`}
              >
                <>
                  <LinkNavigation id={item.id}>{item.name}</LinkNavigation>
                </>
              </li>
            ))}
          </ul>

          <div className="flex-center lg:w-[260px]">
            <Link
              rel="noopener noreferrer"
              href="/demo"
              className={`${
                prevScrollPos === 0
                  ? 'bg-transparent lg:hover:bg-mainPalette-primaryColor'
                  : 'bg-mainPalette-primaryColor lg:hover:bg-mainPalette-secondaryColor'
              } hidden rounded px-8 py-4 uppercase tracking-widest text-mainPalette-textAlt shadow-md transition-all lg:block lg:hover:duration-300`}
            >
              Reservas
            </Link>
          </div>

          {/* Mobile */}
          <div
            className={`${
              prevScrollPos === 0
                ? 'text-mainPalette-text'
                : 'text-mainPalette-textAlt'
            } ${showNavbar ? 'top-0 ' : '-top-[110%]'} lg:hidden`}
          >
            {/* Hamburguer & X icon */}
            <div
              className=""
              onClick={() => {
                setToggle(!toggle)
              }}
            >
              <div
                className={`duration-400 flex h-[22px] w-[22px] flex-col gap-2.5 transition-all`}
              >
                <span
                  className={`${
                    prevScrollPos === 0
                      ? 'bg-mainPalette-text'
                      : 'bg-mainPalette-bg'
                  } h-0.5 w-[30px] origin-top-left 
                transition-all duration-700 ${toggle ? 'rotate-45' : ''}`}
                ></span>
                <span
                  className={`${
                    prevScrollPos === 0
                      ? 'bg-mainPalette-text'
                      : 'bg-mainPalette-bg'
                  } h-0.5 transition-all duration-700 ${
                    toggle ? 'w-0' : 'w-[30px]'
                  }`}
                ></span>
                <span
                  className={`${
                    prevScrollPos === 0
                      ? 'bg-mainPalette-text'
                      : 'bg-mainPalette-bg'
                  } h-0.5 w-[30px] origin-bottom-left transition-all duration-700 ${
                    toggle ? '-rotate-45' : ''
                  }`}
                ></span>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${
            toggle ? 'top-[79px] shadow-md' : '-top-[100%] shadow-none'
          } fixed left-0 right-0 z-10 flex flex-col items-start justify-evenly bg-mainPalette-bgAlt transition-all duration-700 lg:hidden`}
        >
          {/* List */}
          <ul
            className={`flex-center w-full flex-col px-6 py-2 text-xl text-mainPalette-textAlt`}
          >
            {navLinks.map((item, i) => (
              <li key={i} className={`transition-all duration-300`}>
                <Link
                  onClick={() => {
                    setToggle(false)
                    handleLinkClick(item.id)
                  }}
                  href={`#`}
                >
                  <p className={`p-2`}>{item.name}</p>
                </Link>
              </li>
            ))}
          </ul>
          {/* Links */}
          <div className="flex w-full items-center justify-center gap-5 text-mainPalette-textAlt">
            <Link
              href="https://api.whatsapp.com/send?phone=+5519971122115&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20Canto%20do%20Sitio."
              target="_blank"
            >
              <div
                className={`flex items-center justify-center rounded-full p-2.5 transition-all duration-300`}
              >
                <FaWhatsapp size={20} />
              </div>
            </Link>

            <Link
              href="https://www.instagram.com/cantodositio/?hl=pt"
              target="_blank"
            >
              <div
                className={`${
                  toggle ? '' : 'text-transparent'
                } flex-center bg-palette-outerSpace rounded-full p-2.5 transition-all duration-300`}
              >
                <Instagram size={20} />
              </div>
            </Link>

            <Link href="https://www.facebook.com/cantodositio" target="_blank">
              <div
                className={`${
                  toggle ? '' : 'text-transparent'
                } flex-center bg-palette-outerSpace rounded-full p-2.5 transition-all duration-300`}
              >
                <Facebook size={20} />
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}
