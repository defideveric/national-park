import { DiscordIcon, DribbleIcon, FacebookIcon, GitHubIcon, TwitterIcon } from '../assets/icons/Icons';

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
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

        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <span className="text-sm text-gray-500 sm:text-center ml-2 mb-4 md:mb-0">
            © 2023 <a href="https://www.nps.gov/index.htm" className="hover:underline">National Park Services™</a>. All Rights Reserved.
          </span>

          <div className="flex mt-4 space-x-5 justify-center md:justify-end">
            <a href="#" className="icon-style" aria-label="Facebook page">
              <FacebookIcon />
            </a>
            <a href="#" className="icon-style" aria-label="Discord community">
              <DiscordIcon />
            </a>
            <a href="#" className="icon-style" aria-label="Twitter page">
              <TwitterIcon />
            </a>
            <a href="#" className="icon-style" aria-label="GitHub account">
              <GitHubIcon />
            </a>
            <a href="#" className="icon-style" aria-label="Dribbble account">
              <DribbleIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
