import { Flex, Link } from '@chakra-ui/react'

export function Nav() {
  const links = [
    {
      label: 'Início',
      href: '#Inicio',
    },
    {
      label: 'Buscar',
      href: '#Buscar',
    },
    {
      label: 'Suas bibliotecas',
      href: '#lib',
    },
  ]
  return (
    <Flex as="nav" gap={14} fontSize={18}>
      {links.map((link, i) => (
        <Link
          _hover={{
            textDecoration: 'underline',
            textDecorationColor: 'green',
            textUnderlineOffset: '6px',
            textDecorationThickness: '2px',
          }}
          key={i}
          href={link.href}
        >
          {link.label}
        </Link>
      ))}
    </Flex>
  )
}
