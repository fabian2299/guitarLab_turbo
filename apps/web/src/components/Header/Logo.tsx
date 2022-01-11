import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
  return (
    <>
      <Link href="/">
        <a>
          <Image
            src="/images/logo.svg"
            alt="logo"
            width={200}
            height={60}
            className="cursor-pointer"
          />
        </a>
      </Link>
    </>
  )
}
