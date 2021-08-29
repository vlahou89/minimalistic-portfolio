import Link from "next/link";
function NavLinkMobile({ href, children, role }) {
  return (
    <div>
      <Link href={href}>
        <a className="text-xs font-semibold text-white hover:text-gray-900 transition duration-150 ease-in-out text-center tracking-2 focus:text-p1">
          {children}
        </a>
      </Link>
    </div>
  );
}

export default NavLinkMobile;
