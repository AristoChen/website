import React from "react"
import { Link } from "gatsby"
import tw, { styled } from "twin.macro"
import { FaGithub } from "react-icons/fa"
import Search from "./search"

const searchIndices = [{ name: `Tools`, title: `Tools`, hitComp: `ToolsHit` }]

const NavLink = styled(props => <Link {...props} />)`
  ${tw`transition-all duration-300 hover:bg-gray-400 rounded py-2 my-1 px-4 mx-1 hover:mx-0 hover:py-3 hover:my-0 hover:px-5`}
`

export default ({ children }) => {
  return (
    <div>
      <nav tw="w-full py-4 bg-color3 shadow">
        <div tw="w-full container mx-auto flex flex-wrap items-center justify-between">
          <nav>
            <ul tw="flex items-center justify-between font-bold text-sm text-white uppercase no-underline ml-5">
              <li>
                <FaGithub tw="float-left mt-1" />
                <a
                  tw="hover:text-gray-200 hover:underline px-2"
                  href="https://github.com/analysis-tools-dev/static-analysis"
                >
                  Github
                </a>
              </li>
              <li tw="float-right">
                <Link tw="hover:text-gray-200 hover:underline px-2" to="/about">
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </nav>

      <header tw="w-full flex-row container mx-auto">
        <div tw="md:flex items-center">
          <Link to="/" tw="w-2/6 h-1 md:h-auto">
            <img
              src="/logo.svg"
              tw="w-2/6 mx-auto md:w-full"
              alt="Analysis tools logo"
            />
          </Link>

          <div tw="mx-5 mb-5 md:mb-0 md:w-4/6">
            <Search tw="w-full" collapse indices={searchIndices} />
          </div>
        </div>
      </header>

      <nav tw="w-full py-4 border-t border-b bg-gray-100">
        <div tw="w-full">
          <div tw="w-full container mx-auto flex flex-col sm:flex-row items-center justify-center text-sm font-bold uppercase mt-0 px-6 py-2">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/tools">Tools</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/videos">Videos</NavLink>
            <NavLink to="/sponsor">Sponsor</NavLink>
            <a
              href="https://github.com/analysis-tools-dev/static-analysis/blob/master/CONTRIBUTING.md"
              tw="transition-all duration-300 hover:bg-gray-400 rounded py-2 my-1 px-4 mx-1 hover:mx-0 hover:py-3 hover:my-0 hover:px-5"
            >
              Contribute
            </a>
          </div>
        </div>
      </nav>

      <div tw="container mx-auto flex flex-wrap py-6">
        <section tw="w-full md:w-2/3 flex flex-col px-3">{children}</section>

        <aside tw="w-full md:w-1/3 flex flex-col items-center px-3">
          <div tw="w-full bg-white shadow flex flex-col my-4 p-6">
            <p tw="text-xl font-semibold pb-5">Write better software</p>
            <p tw="pb-2">
              On this page you can find static- and dynamic code analysis tools
              and linters that will help you improve your code quality. All
              tools are peer-reviewed by fellow developers to meet high
              standards.
            </p>
            <p>
              {" "}
              You can help to improve this list{" "}
              <a href="https://github.com/analysis-tools-dev/static-analysis/blob/master/CONTRIBUTING.md">
                {" "}
                on Github{" "}
              </a>
              and join our open community around code quality and solid
              engineering standards!
            </p>
            <img src="/hero/hero.svg" alt="People analysing charts" />
            <Link
              to="/about"
              tw="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 duration-300 transition-all flex items-center justify-center px-2 py-3 mt-4"
            >
              Learn more
            </Link>
          </div>

          <div tw="w-full bg-white shadow flex flex-col my-4 p-6">
            <p tw="text-xl font-semibold pb-5">Popular Languages</p>
            <div tw="grid grid-cols-3 gap-3">
              <a href="/tag/python">
                <img
                  tw="hover:opacity-75"
                  alt="Python"
                  src="/logos/python.svg"
                />
              </a>
              <a href="/tag/ruby">
                <img tw="hover:opacity-75" alt="Ruby" src="/logos/ruby.svg" />
              </a>
              <a href="/tag/php">
                <img tw="hover:opacity-75" alt="PHP" src="/logos/php.svg" />
              </a>
              <a href="/tag/c">
                <img tw="hover:opacity-75" alt="C" src="/logos/c.svg" />
              </a>
              <a href="/tag/javascript">
                <img
                  tw="hover:opacity-75"
                  alt="JavaScript"
                  src="/logos/javascript.svg"
                />
              </a>
              <a href="/tag/go">
                <img tw="hover:opacity-75" alt="Go" src="/logos/go.svg" />
              </a>
            </div>
          </div>
        </aside>
      </div>

      <footer tw="w-full border-t bg-white pb-12">
        <div tw="w-full container mx-auto flex flex-col items-center">
          <div tw="flex flex-col md:flex-row text-center md:text-left md:justify-between py-6">
            <a href="/about" tw="uppercase px-3">
              About Us
            </a>
          </div>
          <div>
            Beautiful icons provided by{" "}
            <a href="https://icons8.com/icon/pack/files/dusk">icons8</a>
            &nbsp;&middot;&nbsp;
            <a href="https://www.freepik.com/free-photos-vectors/background">
              Hero vector illustration created by pch.vector - www.freepik.com
            </a>
          </div>
          <div tw="uppercase pb-6">&copy; analysis-tools.dev</div>
        </div>
      </footer>
    </div>
  )
}
