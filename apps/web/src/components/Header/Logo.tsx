import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
  return (
    <>
      <Link href="/" passHref>
        <Image
          src="/images/logo.svg"
          alt="logo"
          width={200}
          height={80}
          className="cursor-pointer"
        />
      </Link>
    </>
  )
}
