import {
  DiscordIcon,
  DribbleIcon,
  FacebookIcon,
  GitHubIcon,
  TwitterIcon,
} from "../assets/icons/Icons";

const Footer = () => {
  return (
    <footer role="contentInfo" className="bg-white">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <h2 className="text-center text-gray-500 mb-5">Home</h2>
        <div className="text-center lg:flex lg:justify-between">
          <div className="mb-6 lg:mb-0 lg:text-left sm:text-center">
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
              Legal
            </h2>
            <ul className="text-gray-500 font-medium">
              <li className="mb-4">
                <a
                  href="#"
                  className="hover:underline"
                  title="Privacy Policy"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline"
                  title="Terms & Conditions"
                >
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-xs text-gray-500 sm:text-center ml-4 md:ml-2">
            © 2023{" "}
            <a
              href="https://www.nps.gov/index.htm"
              className="hover:underline"
              title="National Park Services™"
            >
              National Park Services™
            </a>
            . All Rights Reserved.
          </span>

          <div className="flex mt-4 space-x-5 sm:justify-end sm:mt-0 ml-24">
            <a href="#" className="icon-style" aria-label="Facebook page">
              <FacebookIcon aria-hidden="true" />
            </a>
            <a href="#" className="icon-style" aria-label="Discord community">
              <DiscordIcon aria-hidden="true" />
            </a>
            <a href="#" className="icon-style" aria-label="Twitter page">
              <TwitterIcon aria-hidden="true" />
            </a>
            <a href="#" className="icon-style" aria-label="GitHub account">
              <GitHubIcon aria-hidden="true" />
            </a>
            <a href="#" className="icon-style" aria-label="Dribbble account">
              <DribbleIcon aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
