import { Github, Linkedin, Twitter, Youtube, Facebook } from 'lucide-react'
import { href } from 'react-router'

const LinkOfDiv = [
  {
    href:'https://github.com/RahulNaktode/Vegetable-UI-project',
    icon: <Github />,
    name: 'Github',
    },
    {
      href:'https://linkedin.com/RahulNaktode',
      icon: <Linkedin />,
      name: 'LinkedIn'
    },
    {
      href:'https://twitter.com/RahulNaktode',
      icon: <Twitter />,
      name: 'Twitter'
    },
    {
      href:'https://youtube.com/RahulNaktode',
      icon: <Youtube />,
      name: 'YouTube',
    },
    {
      href:'https://facebook.com/RahulNaktode',
      icon: <Facebook />,
      name: 'Facebook',
    }
]

function Footer() {
  return (
    <div className='bg-amber-500 pl-10 flex justify-around py-5'>
      <div>
        Made with ❤️ by Vegetable.
      </div>
      <div className='flex mx-5 gap-4'>
        {LinkOfDiv.map((link) => {
          return (
            <a href={link.href} className='flex items-center'>
              {link.icon}
              {link.name}
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default Footer
