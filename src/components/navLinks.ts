export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/aboutUs', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/products', label: 'Products' },
  { href: '/workshops', label: 'Workshops' },
  { href: '/fellowship', label: 'Fellowship' },
  { href: '/contactUs', label: 'Contact Us' },
]

export const isActive = (pathname: string, href: string) =>
  href === '/' ? pathname === '/' : pathname.startsWith(href)
