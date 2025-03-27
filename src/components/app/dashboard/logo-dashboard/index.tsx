import Image from "next/image";
import Link from "next/link";

export default function LogoDashboard() {
  return (
    <Link href="/" className="flex items-center h-20 gap-2 border-r cursor-pointer min-h-20">
      <Image
        src="/logo.svg"
        alt="Logo"
        width={30}
        height={30}
        priority
        className="mx-2" />
      <span className="text-xl">Rental Cars </span>
    </Link>
  )
}
