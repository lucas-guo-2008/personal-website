import React from 'react';

interface SocialLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function SocialLink({ href, children }:SocialLinkProps) {
  return (
    <a 
      href={href}
      target="_blank"
      className="text-xs hover:underline underline-offset-4"
    >
      {children}
    </a>
  );
}
