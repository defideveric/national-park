import { DiscordIcon, DribbleIcon, FacebookIcon, GitHubIcon, TwitterIcon } from "../assets/icons/Icons";


const Footer = () => {
  return (
  
<footer className="bg-white">
  <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
    <h1 className="text-center text-gray-500 mb-5">Home</h1>
      <div className="text-center lg:flex lg:justify-between">
        <div className="mb-6 lg:mb-0 lg:text-left sm:text-center">
          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
            <ul className="text-gray-500 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Terms &amp; Conditions</a>
              </li>
            </ul>
        </div>
      </div>

      <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />

      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-xs text-gray-500 sm:text-center ml-4 md:ml-2">
            © 2023 <a href="https://www.nps.gov/index.htm" className="hover:underline">National Park Services™</a>. All Rights Reserved.
          </span>
          
          <div className="flex mt-4 space-x-5 sm:justify-end sm:mt-0 ml-24">
              <a href="#" className="icon-style">
                 <FacebookIcon/>
                  <span className="sr-only">Facebook page</span>
              </a>
              <a href="#" className="icon-style">
                  <DiscordIcon/>
                  <span className="sr-only">Discord community</span>
              </a>
              <a href="#" className="icon-style">
                 <TwitterIcon/>
                  <span className="sr-only">Twitter page</span>
              </a>
              <a href="#" className="icon-style">
                 <GitHubIcon/>
                  <span className="sr-only">GitHub account</span>
              </a>
              <a href="#" className="icon-style">
                 <DribbleIcon/>
                  <span className="sr-only">Dribbble account</span>
              </a>
          </div>
        </div>
      </div>
  </footer>

  )
}

export default Footer