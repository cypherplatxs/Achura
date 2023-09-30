'use client'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Popover,
  PopoverContent,
  PopoverTrigger,
  User
} from '@nextui-org/react'
import useWallet from '@/hooks/useWallet'
import { UserTwitterCard } from '../userCard'

const navigation = [
  { name: 'Acerca de ', href: '/about' },
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Mas info', href: '/sign-in' }
]

export default function Nav () {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)
  const { accountId } = useWallet()

  return (
    <Navbar
      maxWidth='full'
      isBordered
      isBlurred
      onMenuOpenChange={setMobileMenuOpen}
      shouldHideOnScroll
      className='bg-transparent'
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          className='sm:hidden'
        />
        <NavbarBrand className='w-full'>
          <Link href='/'>
            <p className='text-5xl'>🦙</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className='hidden sm:flex' justify='center'>
        {navigation.map((item, index) => (
          <NavbarItem key={index}>
            <Link
              href={item.href}
              className='text-sm font-semibold leading-6 text-withe'
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify='end'>
        {accountId ? (
          <NavbarItem>
            <Popover showArrow placement='bottom'>
              <PopoverTrigger>
                <User
                  as='button'
                  name={accountId}
                  description='Product Designer'
                  className='transition-transform'
                  avatarProps={{
                    src: 'https://i.pravatar.cc/'
                  }}
                />
              </PopoverTrigger>
              <PopoverContent className='p-1'>
                <UserTwitterCard
                 />
              </PopoverContent>
            </Popover>
          </NavbarItem>
        ) : (
          <>
            <NavbarItem className='hidden lg:flex'>
              <Link href='/log-in'>Login</Link>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} color='primary' href='/sign-up' variant='flat'>
                Sign up
              </Button>
            </NavbarItem>
          </>
        )}
      </NavbarContent>
      <NavbarMenu>
        {navigation.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? 'primary'
                  : index === navigation.length - 1
                  ? 'danger'
                  : 'foreground'
              }
              className='w-full'
              href='#'
              size='lg'
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
