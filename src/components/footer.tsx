import { FC } from 'react'
import Socials from './Socials'

const Footer: FC = () => {
  return (
    <footer className="footer p-10 flex justify-between">
      <div>
        <h3 className="text-lg font-primary mb-2">Socials</h3>
        <div className="grid grid-flow-col gap-4">
          <Socials />
        </div>
      </div>
      <div className="grid grid-flow-col gap-4">
        <div className="flex flex-col leading-7 w-28">
          <a className="link link-hover">My Garden</a>
          <a className="link link-hover">Projects</a>
          <a className="link link-hover">Now</a>
        </div>
        <div className="flex flex-col leading-7 w-28">
          <a className="link link-hover">Etymology</a>
          <a className="link link-hover">Notes</a>
          <a className="link link-hover">Resources</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
