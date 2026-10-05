import {NextPage} from 'next';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {memo, PropsWithChildren} from 'react';

import {HomepageMeta} from '../../data/dataDef';

const Page: NextPage<PropsWithChildren<HomepageMeta>> = memo(({children, title, description}) => {
  const {asPath: pathname} = useRouter();
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const siteUrl = 'https://cv.alirezarp.ir';
  const canonicalUrl = `${siteUrl}${pathname === '/' ? '' : pathname}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: 'Alireza Rahimapanah Portfolio',
        description:
          'Personal resume and portfolio of Alireza Rahimapanah (علیرضا رحیماپناه), Frontend & Full-Stack Developer.',
        inLanguage: ['en', 'fa'],
      },
      {
        '@type': 'ProfilePage',
        '@id': `${canonicalUrl}#profilepage`,
        url: canonicalUrl,
        name: title,
        description,
        mainEntity: {
          '@id': `${siteUrl}/#person`,
        },
      },
      {
        '@type': 'Person',
        '@id': `${siteUrl}/#person`,
        name: 'Alireza Rahimapanah',
        alternateName: [
          'علیرضا رحیماپناه',
          'علی رضا رحیم پناه',
          'علیرضا رحیم پناه',
          'Alireza Rahimpanah',
          'say-alireza',
        ],
        url: siteUrl,
        image: `${siteUrl}/profilepic.jpg`,
        jobTitle: 'Frontend & Full-Stack Developer',
        worksFor: {
          '@type': 'Organization',
          name: 'Freelance Software Engineer',
        },
        alumniOf: {
          '@type': 'EducationalOrganization',
          name: 'University of Birjand',
          alternateName: 'دانشگاه بیرجند',
        },
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Mashhad',
          addressRegion: 'Razavi Khorasan',
          addressCountry: 'IR',
        },
        sameAs: [
          'https://github.com/say-alireza',
          'https://t.me/say_alirexa',
          'https://linkedin.com/in/alireza-rahimpanah-b7010a301',
        ],
        knowsAbout: [
          'React',
          'Next.js',
          'TypeScript',
          'JavaScript',
          'Tailwind CSS',
          'Front-End Development',
          'Web Applications',
          'Python',
          'Django',
          'Telegram Bots',
        ],
      },
    ],
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={description} name="description" />
        <meta
          content="علیرضا رحیماپناه, علیرضا رحیم پناه, علی رضا رحیم پناه, Alireza Rahimapanah, Alireza Rahimpanah, توسعه دهنده فرانت اند, برنامه نویس Next.js, برنامه نویس مشهد, React Developer, Frontend Developer Mashhad, say-alireza"
          name="keywords"
        />
        <meta content="Alireza Rahimapanah" name="author" />
        <meta content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" name="robots" />

        {/* Canonical */}
        <link href={canonicalUrl} key="canonical" rel="canonical" />

        {/* Favicons */}
        <link href={`${basePath}/favicon.ico`} rel="icon" sizes="any" />
        <link href={`${basePath}/icon.svg`} rel="icon" type="image/svg+xml" />
        <link href={`${basePath}/apple-touch-icon.png`} rel="apple-touch-icon" />
        <link href={`${basePath}/site.webmanifest`} rel="manifest" />

        {/* Open Graph */}
        <meta content={title} property="og:title" />
        <meta content={description} property="og:description" />
        <meta content={canonicalUrl} property="og:url" />
        <meta content="profile" property="og:type" />
        <meta content={`${siteUrl}/og-image.jpg`} property="og:image" />
        <meta content="1200" property="og:image:width" />
        <meta content="630" property="og:image:height" />
        <meta content="Alireza Rahimapanah Resume and Portfolio" property="og:image:alt" />
        <meta content="Alireza" property="profile:first_name" />
        <meta content="Rahimapanah" property="profile:last_name" />
        <meta content="say-alireza" property="profile:username" />

        {/* Twitter */}
        <meta content="summary_large_image" name="twitter:card" />
        <meta content={title} name="twitter:title" />
        <meta content={description} name="twitter:description" />
        <meta content={`${siteUrl}/og-image.jpg`} name="twitter:image" />

        {/* Structured Data (Schema.org) */}
        <script
          dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
          key="person-jsonld"
          type="application/ld+json"
        />
      </Head>
      {children}
    </>
  );
});

Page.displayName = 'Page';
export default Page;
