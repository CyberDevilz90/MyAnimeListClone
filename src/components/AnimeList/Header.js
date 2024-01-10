import Link from "next/link"

const Header = ({title, linkHref, linkTitle}) => {
    return (
        <div className="flex flex-row justify-between p-4">
        <h1 className="font-bold text-white md:text-xl text-md">{title}</h1>
        {
          linkHref && linkTitle ? 
            <Link
          className="text-blue-400 underline hover:text-blue-700 hover:font-bold md:text-xl text-md"
          href={linkHref}
        >
          {linkTitle}
        </Link>
        : null
        }
      </div>
    )
}

export default Header