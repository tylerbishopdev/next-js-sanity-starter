import Link from "next/link"
import Image from "next/image"
import React from "react"
import Script from "next/script"

interface FooterNavItem {
  href: string
  name: string
}

interface FooterNav {
  label: string
  items: FooterNavItem[]
}

interface FooterBottomItem {
  href: string
  name: string
}

interface SocialLink {
  href: string
  label: string
  icon: React.ReactNode
}

interface SiteFooterProps {
  navs?: FooterNav[]
  bottomLinks?: FooterBottomItem[]
  socialLinks?: SocialLink[]
  logoSrc?: string
}

export default function Footer({navs, bottomLinks, socialLinks, logoSrc}: SiteFooterProps) {
  // Default navigation data
  const defaultNavs: FooterNav[] = [
    {
      label: "Product",
      items: [
        {href: "/ezoic-ads", name: "Ads"},
        {href: "/ezid", name: "ezID"},
        {href: "/video", name: "Video"},
        {href: "/services", name: "Services"},
        {href: "/cloud", name: "Cloud"},
        {href: "/setup", name: "Setup"},
        {href: "/big-data-analytics", name: "Analytics"}
      ]
    },
    {
      label: "Resources",
      items: [
        {href: "https://login.ezoic.com", name: "Login"},
        {href: "/faq", name: "FAQ"},

        {href: "/events", name: "Events"},
        {href: "https://support.ezoic.com", name: "Support"},
        {href: "/ezoic-reviews", name: "Reviews"},
        {href: "/blog", name: "Blog"},
        {href: "https://docs.ezoic.com", name: "Docs"}
      ]
    },

    {
      label: "Company",
      items: [
        {href: "/about-us", name: "About"},
        {href: "/partners", name: "Partners"},
        {href: "https://ezoic-inc.breezy.hr/", name: "Careers"},
        {href: "/contact-us", name: "Contact"},
        {href: "/ezoic-cares-csr", name: "CSR"},
        {href: "/press", name: "Press"}
      ]
    }
  ]

  // Default bottom links
  const defaultBottomLinks: FooterBottomItem[] = [
    {href: "/privacy-policy", name: "Privacy Policy"},
    {href: "/terms", name: "Terms"}
  ]

  // Default social links
  const defaultSocialLinks: SocialLink[] = [
    {
      href: "https://www.facebook.com/ezoic",
      label: "Facebook",
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      )
    },
    {
      href: "https://x.com/ezoic",
      label: "X",
      icon: (
        <svg viewBox="0,0,256,256" width="26px" height="26px" className="dark:invert-0 invert">
          <g
            fill="#ffffff"
            fillRule="nonzero"
            stroke="none"
            strokeWidth="1"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="10"
            strokeDasharray=""
            strokeDashoffset="0"
            fontFamily="none"
            fontWeight="none"
            fontSize="none"
            textAnchor="none"
            style={{mixBlendMode: "normal"}}
          >
            <g transform="scale(5.12,5.12)">
              <path d="M11,4c-3.85433,0 -7,3.14567 -7,7v28c0,3.85433 3.14567,7 7,7h28c3.85433,0 7,-3.14567 7,-7v-28c0,-3.85433 -3.14567,-7 -7,-7zM11,6h28c2.77367,0 5,2.22633 5,5v28c0,2.77367 -2.22633,5 -5,5h-28c-2.77367,0 -5,-2.22633 -5,-5v-28c0,-2.77367 2.22633,-5 5,-5zM13.08594,13l9.22266,13.10352l-9.30859,10.89648h2.5l7.9375,-9.29297l6.53906,9.29297h7.9375l-10.125,-14.38672l8.21094,-9.61328h-2.5l-6.83984,8.00977l-5.63672,-8.00977zM16.91406,15h3.06445l14.10742,20h-3.06445z"></path>
            </g>
          </g>
        </svg>
      )
    },
    {
      href: "https://www.linkedin.com/company/ezoic-inc-/?",
      label: "LinkedIn",
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
            clipRule="evenodd"
          />
        </svg>
      )
    }
  ]

  // Use passed-in props or fallback to defaults.
  const navData = navs || defaultNavs
  const bottomData = bottomLinks || defaultBottomLinks
  const socialData = socialLinks || defaultSocialLinks
  const logo = logoSrc || "/images/plainezoic.png"

  return (
    <footer>
      <div className="mx-auto w-full max-w-screen-xl justify-centerxl:pb-2 mb-10 mt-20 px-6 ">
        {/* Main Section: Logo with Social Icons and Navigation */}
        <div className="md:flex md:justify-between px-8 p-4 py-16 sm:pb-16 gap-4">
          {/* Logo and Social Icons Column */}
          <div className="mb-12 md:mb-0 flex flex-col justify-together pb-2 lg:pt-10">
            <Link href="/">
              <Image src={logo} alt="Ezoic Logo" width={100} height={32} className="self-center pb-4 opacity-70 mx-auto lg:mx-0 lg:self-start dark:grayscale-0 grayscale invert dark:invert-0" style={{height: "auto"}} />
            </Link>
            <div className="flex justify-center md:justify-start mt-4 md:mt-0">
              {socialData.map((social) => (
                <Link key={social.label} href={social.href} className="mr-4 last:mr-0">
                  <span className="text-foreground hover:text-muted opacity-80">
                    <span className="sr-only">{social.label}</span>
                    {social.icon}
                  </span>
                </Link>
              ))}
            </div>
          </div>
          {/* Navigation Links */}
          <div className="grid grid-cols-1 lg:gap-28 gap-20 sm:grid-cols-3 mx-auto lg:mx-0 text-center lg:text-left">
            {navData.map((nav) => (
              <div key={nav.label}>
                <h2 className="pb-1 border-b-0 lg:border-b border-muted mx-auto lg:mx-0 w-full text-base text-accent tracking-normal">{nav.label}</h2>
                <ul className="gap-2 grid  pt-1 w-full mx-auto lg:mx-0">
                  {nav.items.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href}>
                        <span className="cursor-pointer text-sm hover:text-primary">{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        {/* Bottom Section: Policy Links and Copyright */}
        <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-between px-8 py-2 mt-2  ">
          <div className="flex flex-wrap justify-center lg:justify-start mb-2 lg:mb-0">
            {bottomData.map((link, index) => (
              <React.Fragment key={link.name}>
                <Link href={link.href}>
                  <span className="text-xs opacity-70 hover:brightness-150 cursor-pointer">{link.name}</span>
                </Link>
                {index < bottomData.length - 1 && <span className="mx-2 text-xs opacity-70"></span>}
              </React.Fragment>
            ))}
          </div>
          <span className="text-xs opacity-30 pt-2 font-medium text-center lg:text-right"> {new Date().getFullYear()} Ezoic. All rights reserved.</span>
        </div>
      </div>

      {/* Analytics and Tracking Scripts */}
      <Script id="fathom-event-script" strategy="afterInteractive">
        {`
          document.addEventListener('DOMContentLoaded', function() {
            if (typeof fathom !== 'undefined') {
              fathom.trackEvent(
                "signup",
                "integrated",
                "live",
                "ezoic__signup",
                "newsletter"
              );
            }
          });
        `}
      </Script>

      <Script id="vercel-analytics-init" strategy="afterInteractive">
        {`
          window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
        `}
      </Script>

      <Script id="vercel-analytics-event" strategy="afterInteractive">
        {`
          if (typeof va !== 'undefined') {
            va("event", {
              name: ["signup", "integrated", "live", "newsletter"],
              data: {
                location: "footer"
              }
            });
          }
        `}
      </Script>

      {/* PostAffiliate Pro - Load as a traditional script tag with dangerouslySetInnerHTML to ensure proper self-reference */}
      <div id="pap-container">
        <Script id="postaffiliatepro-script" strategy="afterInteractive">
          {`
            (function() {
              var script = document.createElement('script');
              script.id = 'pap_x2s6df8d';
              script.src = 'https://ezoic.postaffiliatepro.com/scripts/trackjs.js';
              script.onload = function() {
                if (typeof PostAffTracker !== 'undefined') {
                  PostAffTracker.setAccountId('default1');
                  try {
                    PostAffTracker.track();
                  } catch (err) { console.log('PostAffTracker error:', err); }
                }
              };
              document.getElementById('pap-container').appendChild(script);
            })();
          `}
        </Script>
      </div>
    </footer>
  )
}
