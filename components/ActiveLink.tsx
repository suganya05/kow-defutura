import { useRouter } from "next/router";
import { ReactNode } from "react";

function ActiveLink({ children, href }: { children: ReactNode; href: string }) {
  const router = useRouter();

  const handleClick = (e: any) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} className={router.asPath === href ? "active" : undefined}>
      {children}
    </a>
  );
}

export default ActiveLink;
