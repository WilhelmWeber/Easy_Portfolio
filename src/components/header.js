import Link from "next/link";

export default function Header() {
    return (
        <header className="sticky top-0 bg-white text-gray-700 border-b border-gray-500">
          <div className="flex container mx-auto p-5 flex-col md:flex-row items-center">
            <Link href={'/'} className="font-medium text-black">
              <span className="text-xl mx-3">Vita Brevis Ars Longa</span>
            </Link>
            <nav className="ml-auto text-base">
              <Link href={'/'} className="mr-5 hover:text-blue-500 duration-300">Home</Link>
              <Link href={'/work'} className="mr-5 hover:text-blue-500 duration-300">Work</Link>
              <Link href={'/hop'} className="mr-5 hover:text-blue-500 duration-300">History of Physics</Link>
              <Link href={'/blog'} className="hover:text-blue-500 duration-300">Blog</Link>
            </nav>
          </div>
        </header>
    );
}