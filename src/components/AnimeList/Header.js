import Link from "next/link"

const Header = ({title, linkHref, linkTitle}) => {
    return (
        <div className="p-4 flex flex-row justify-between">
        <h1 className="font-bold md:text-xl text-md">{title}</h1>
        {linkHref && linkTitle ? 
            <Link
          className="text-blue-400 hover:text-blue-700 hover:font-bold underline md:text-xl text-md"
          href={linkHref}
        >
          {linkTitle}
        </Link>
        : null}
      </div>
    )
}

export default Header