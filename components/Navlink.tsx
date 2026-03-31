import Link from "next/link";

interface NavlinkProps {
  href: string;
  title: string;
  children: React.ReactNode;
}

export default function Navlink({ href, children }: NavlinkProps) {
  return (
    <Link href={href} className="text-foreground hover:text-primary">
      {children}
    </Link>
  );
}
