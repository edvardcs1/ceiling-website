import React from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
}

export const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  canonical, 
  ogType = 'website',
  ogImage = 'https://picsum.photos/seed/cmacoustic/1200/630'
}) => {
  const fullTitle = `${title} | CM Acoustic LLC - Mesa, AZ`;
  
  return (
    <React.Fragment>
      {/* This would normally be handled by react-helmet or Next.js Head, 
          but for this SPA we will manually update document properties in a useEffect if needed,
          or just provide the structure for the agent to know it's there. */}
      {/* In a real Vite app, we'd use react-helmet-async */}
    </React.Fragment>
  );
};

// Helper to update meta tags in SPA
export const useMeta = (title: string, description: string) => {
  React.useEffect(() => {
    document.title = `${title} | CM Acoustic LLC - Mesa, AZ`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }
  }, [title, description]);
};
