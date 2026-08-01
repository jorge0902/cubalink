import { Link } from 'react-router-dom'
import MaterialIcon from './MaterialIcon'

// Footer de CubaLink (diseño original de la landing page)
export default function Footer() {
  return (
    <footer className="w-full bg-primary text-on-primary py-12 px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="space-y-4">
          <span className="text-headline-lg font-headline-lg text-secondary-fixed">CubaLink</span>
          <p className="font-body-md text-body-md opacity-80 max-w-xs">
            Elevando el potencial del profesional cubano en el mercado global.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          <a className="font-label-sm text-label-sm text-on-primary opacity-80 hover:text-secondary-fixed-dim transition-colors" href="#">
            Privacy Policy
          </a>
          <a className="font-label-sm text-label-sm text-on-primary opacity-80 hover:text-secondary-fixed-dim transition-colors" href="#">
            Terms of Service
          </a>
          <a className="font-label-sm text-label-sm text-on-primary opacity-80 hover:text-secondary-fixed-dim transition-colors" href="#">
            Help Center
          </a>
          <a className="font-label-sm text-label-sm text-on-primary opacity-80 hover:text-secondary-fixed-dim transition-colors" href="#">
            Contact Us
          </a>
        </div>
      </div>
      <div className="max-w-container-max mx-auto mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-label-sm text-label-sm opacity-60">© 2024 CubaLink Professional. All rights reserved.</p>
        <div className="flex gap-6">
          <MaterialIcon name="language" className="cursor-pointer opacity-80 hover:opacity-100" />
          <MaterialIcon name="share" className="cursor-pointer opacity-80 hover:opacity-100" />
        </div>
      </div>
    </footer>
  )
}
