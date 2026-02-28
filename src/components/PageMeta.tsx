import { useEffect } from 'react';

interface PageMetaProps {
  title: string;
  description: string;
  canonical: string;
}

export default function PageMeta({ title, description, canonical }: PageMetaProps) {
  useEffect(() => {
    document.title = title;

    let desc = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!desc) {
      desc = document.createElement('meta');
      desc.name = 'description';
      document.head.appendChild(desc);
    }
    desc.content = description;

    let canon = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canon) {
      canon = document.createElement('link');
      canon.rel = 'canonical';
      document.head.appendChild(canon);
    }
    canon.href = canonical;

    return () => {
      document.title = 'NextLvl Protection — Brisbane';
    };
  }, [title, description, canonical]);

  return null;
}
