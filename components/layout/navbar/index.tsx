import Image from "next/image";
import Link from "next/link";
import ActiveNavLink from "./components/active-link";
import ToggleMenuIcon from "./components/toggle-menu-icon";
import { NavbarQuery } from "../../../tina/__generated__/types";


export default function Navbar(props: {
    data: NavbarQuery;
    variables: object;
    query: string;
}) {
    const { logo, menu: menus } = props.data.navbar
    return (
        <nav className="bg-white shadow fixed top-0 w-full z-10">
            <div className="pl-0  pr-2 sm:px-0">
                <div className="container mx-auto flex h-20 justify-between">
                    <div className="flex">
                        <Link href='/' className="flex  flex-shrink-0 items-center cursor-pointer">
                            <Image src={logo || ''} alt="RTech Company Logo" className="w-auto lg:h-full h-auto" width={100} height={100} />
                        </Link>
                    </div>
                    <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                        {
                            menus?.map((menu) => menu && <ActiveNavLink
                                key={menu.label}
                                link={menu.link || ''}
                                className='inline-flex items-center  px-1 pt-1 text-sm font-medium text-gray-900 transition duration-700 ease-in-out border-b-2 border-white hover:border-b-2 hover:border-brandSecondary'
                                activeClassName='border-b-2 border-brandSecondary'
                            >
                                {menu.label}
                            </ActiveNavLink>)
                        }
                    </div>
                    <Link href='#' className="hidden sm:ml-6 sm:flex sm:items-center">
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="25.000000pt" height="25.000000pt" viewBox="0 0 256.000000 256.000000"
 preserveAspectRatio="xMidYMid meet">
    <g transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M160 2320 l0 -80 167 -2 166 -3 113 -680 c102 -612 114 -693 114
-807 0 -119 -1 -127 -21 -133 -37 -12 -92 -69 -115 -120 -44 -94 -27 -183 51
-260 101 -101 229 -101 331 0 59 59 80 117 71 195 l-6 50 370 0 370 0 -7 -50
c-10 -78 11 -136 70 -195 102 -101 230 -101 332 0 59 59 80 117 70 195 l-7 50
86 0 85 0 0 80 0 80 -760 0 -760 0 0 80 0 80 574 0 c532 0 575 1 595 17 15 13
67 155 186 513 91 272 165 505 165 518 0 13 -11 34 -25 47 l-24 25 -820 0
c-772 0 -820 1 -825 18 -2 9 -19 107 -37 217 -28 168 -36 203 -56 222 -22 22
-27 23 -238 23 l-215 0 0 -80z m1916 -957 l-133 -398 -536 -3 -537 -2 -5 22
c-9 41 -125 747 -125 762 0 14 78 16 734 16 l734 0 -132 -397z m-1221 -908
c50 -49 15 -135 -55 -135 -41 0 -80 39 -80 80 0 41 39 80 80 80 19 0 40 -9 55
-25z m1200 0 c50 -49 15 -135 -55 -135 -41 0 -80 39 -80 80 0 41 39 80 80 80
19 0 40 -9 55 -25z"/>
</g>
</svg>
                    </Link>
                    <div className="-mr-2 flex items-center sm:hidden">
                        <ToggleMenuIcon />
                    </div>
                </div>
            </div>

            <div className='hidden' id="mobile-menu">
                <div className="space-y-1 pb-3 pt-2">
                    {
                        menus?.map((menu) => menu && <ActiveNavLink
                            key={menu.label}
                            link={menu.link || ''}
                            className="block py-2 pl-3 pr-4 text-base font-medium"
                            activeClassName='border-indigo-500 text-indigo-700 border-l-4'
                        >
                            {menu.label}
                        </ActiveNavLink>)
                    }
                </div>
                <div className="border-t border-gray-200 pb-3 pt-4">
                    <Link href='#' className="flex items-center px-3">
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="25.000000pt" height="25.000000pt" viewBox="0 0 256.000000 256.000000"
 preserveAspectRatio="xMidYMid meet">
    <g transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M160 2320 l0 -80 167 -2 166 -3 113 -680 c102 -612 114 -693 114
-807 0 -119 -1 -127 -21 -133 -37 -12 -92 -69 -115 -120 -44 -94 -27 -183 51
-260 101 -101 229 -101 331 0 59 59 80 117 71 195 l-6 50 370 0 370 0 -7 -50
c-10 -78 11 -136 70 -195 102 -101 230 -101 332 0 59 59 80 117 70 195 l-7 50
86 0 85 0 0 80 0 80 -760 0 -760 0 0 80 0 80 574 0 c532 0 575 1 595 17 15 13
67 155 186 513 91 272 165 505 165 518 0 13 -11 34 -25 47 l-24 25 -820 0
c-772 0 -820 1 -825 18 -2 9 -19 107 -37 217 -28 168 -36 203 -56 222 -22 22
-27 23 -238 23 l-215 0 0 -80z m1916 -957 l-133 -398 -536 -3 -537 -2 -5 22
c-9 41 -125 747 -125 762 0 14 78 16 734 16 l734 0 -132 -397z m-1221 -908
c50 -49 15 -135 -55 -135 -41 0 -80 39 -80 80 0 41 39 80 80 80 19 0 40 -9 55
-25z m1200 0 c50 -49 15 -135 -55 -135 -41 0 -80 39 -80 80 0 41 39 80 80 80
19 0 40 -9 55 -25z"/>
</g>
</svg>
                    </Link>
                </div>
            </div>
        </nav>

    )
}