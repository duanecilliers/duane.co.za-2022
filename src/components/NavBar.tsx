import type { FC } from 'react';

const Navbar: FC<{}> = () => {
  return (
    <div className="navbar fixed top-0 z-10 bg-base-100">
      <div className="flex-1">
        <a className="font-primary btn btn-ghost text-xl normal-case tracking-[-0.25em]">
          DC
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          {/* <li tabIndex={0}>
            <a>
              My Garden
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2 bg-base-100">
              <li>
                <a>Notes</a>
              </li>
              <li>
                <a>Library</a>
              </li>
              <li>
                <a>Resources</a>
              </li>
            </ul>
          </li> */}
          {/* <li>
            <a>Projects</a>
          </li> */}
          {/* <li>
            <a>About</a>
          </li> */}
          {/* <li
            className="hidden md:flex flex-col justify-center ml-2 mr-4 tooltip tooltip-bottom"
            data-tip={activeTheme === 'dark' ? 'Light mode' : 'Dark mode'}
          >
            <input
              type="checkbox"
              className="toggle toggle-sm"
              checked={activeTheme === 'dark'}
              onChange={toggleDarkMode}
            />
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
