import Link from 'next/link';
import Footer from '@/components/Footer';
import PromoBanner from '@/components/PromoBanner';

const operations = [
  {
    title: 'Day to day finance management',
    description:
      'We maintain income and expense records, reconciliations, and reporting cycles so your numbers stay current.',
    icon: '/about-service-icon-1.svg',
    iconAlt: 'Finance management icon',
  },
  {
    title: 'Accounting software and ERP support',
    description:
      'We set up and structure tools like QuickBooks, Zoho, Odoo, and Dynamics environments based on business needs.',
    icon: '/about-service-icon-2.svg',
    iconAlt: 'Accounting software icon',
  },
  {
    title: 'Compliance readiness and reporting support',
    description:
      'We maintain income and expense records, reconciliations, and reporting cycles so your numbers stay current.',
    icon: '/about-service-icon-3.svg',
    iconAlt: 'Compliance support icon',
  },
];

const principles = [
  {
    label: 'Accuracy',
    detail: 'Details matter. We treat financial records like infrastructure.',
  },
  {
    label: 'Accountability',
    detail: 'Clear responsibility. Clear output. No ambiguity.',
  },
  {
    label: 'Confidentiality',
    detail: 'Client data is handled with care and strict access control.',
  },
  {
    label: 'Consistency',
    detail: 'Numbers stay current through repeatable cadence, not occasional catch ups.',
  },
];

export default function AboutPage() {
  return (
    <main style={{ paddingTop: 'var(--header-height)' }}>
      <section className="about-page-section">
        <div className="container about-page-container">
          <div className="about-page-intro">
            <svg
              className="about-page-logo"
              width="82"
              height="103"
              viewBox="0 0 82 103"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Aven logo"
              role="img"
            >
              <g filter="url(#aboutLogoFilter)">
                <path
                  d="M76.7269 23.172C73.1362 23.172 70.2227 25.5579 69.6276 28.9751L66.673 46.2428C62.7131 46.2428 58.8762 44.9285 55.6754 42.6841C52.4746 40.4397 49.9098 37.245 48.5146 33.4841L36.3064 0.586376C36.1833 0.242638 35.8345 0 35.4652 0H14.1059C13.7366 0 13.4288 0.242638 13.3878 0.586376L0.0100695 78.817C-0.0720025 79.3225 0.358876 79.828 0.892344 79.828H5.07802C8.66867 79.828 11.5822 77.4421 12.1772 74.0249L15.1318 56.7572C19.0918 56.7572 22.9287 58.0715 26.1295 60.3159C29.3303 62.5603 31.895 65.755 33.2903 69.5159L45.7447 103H67.7195C68.0888 103 68.3966 102.757 68.4376 102.393L82 23.172H76.7269ZM64.4366 59.5071L59.184 89.9178C58.9378 91.2927 57.7888 92.243 56.3525 92.243C54.5879 92.243 53.0286 90.8276 52.8644 89.109V89.0483L50.9973 66.8671C50.8332 64.926 49.7252 63.1062 48.0427 61.9537L26.2116 47.1932C26.2116 47.1932 26.0679 47.0921 26.0064 47.0516C24.9394 46.3844 23.7084 46.0204 22.4978 46.0204H19.6458C18.3121 46.0204 17.2042 44.7668 17.4093 43.4929L22.6619 13.0823C22.9082 11.7073 24.0572 10.757 25.4934 10.757C27.258 10.757 28.8173 12.1724 28.9815 13.891V13.9517L30.8281 35.9509V36.052C31.0333 37.9527 32.1207 39.7523 33.7827 40.8846L55.8806 55.8271C57.0091 56.5954 58.3017 56.9998 59.6149 56.9998H62.2206C63.5543 56.9998 64.6623 58.2534 64.4571 59.5273"
                  fill="#338C73"
                />
              </g>
              <defs>
                <filter
                  id="aboutLogoFilter"
                  x="0"
                  y="0"
                  width="85"
                  height="107"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="3" dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.85 0 0 0 0 0.85 0 0 0 0 0.85 0 0 0 0.25 0"
                  />
                  <feBlend mode="normal" in2="shape" result="effect1_innerShadow_498_664" />
                </filter>
              </defs>
            </svg>
            <h1 className="about-page-title">Financial clarity, built on structure</h1>
            <p className="about-page-subtitle">
              Aven is a remote finance services firm built for operators who want visibility without hiring an
              in house team. We focus on the essentials that keep a business stable: accurate records,
              consistent categorization, reconciliations, and reporting that leadership can actually use.
            </p>
          </div>

          <div className="about-page-services-head">
            <h2 className="about-page-services-title">Finance operations, done properly</h2>
            <Link href="/appointment" className="about-page-services-cta">
              Book Consultation
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="about-page-services-grid">
            {operations.map((item) => (
              <article className="about-service-card" key={item.title}>
                <div className="about-service-icon-wrap">
                  <img src={item.icon} alt={item.iconAlt} className="about-service-icon" />
                </div>
                <h3 className="about-service-title">{item.title}</h3>
                <p className="about-service-desc">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-values-section">
        <div className="container about-values-layout">
          <div className="about-values-left">
            <article className="about-values-block">
              <img src="/about-mission-icon.svg" alt="Mission icon" className="about-values-icon" />
              <h3 className="about-values-heading">Mission</h3>
              <p className="about-values-copy">
                To bring clarity and consistency to business finances through structured systems and
                disciplined reporting.
              </p>
            </article>

            <article className="about-values-block">
              <img src="/about-vision-icon.svg" alt="Vision icon" className="about-values-icon" />
              <h3 className="about-values-heading">Vision</h3>
              <p className="about-values-copy">
                To become the finance team businesses trust when accuracy matters and decisions depend on
                clean numbers.
              </p>
            </article>
          </div>

          <aside className="about-values-panel">
            <h3 className="about-values-panel-title">Our Values</h3>
            <div className="about-values-list">
              {principles.map((item) => (
                <div className="about-values-row" key={item.label}>
                  <span className="about-values-label">{item.label}</span>
                  <span className="about-values-detail">{item.detail}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="about-tools-section">
        <div className="container about-tools-container">
          <img src="/tools.svg" alt="Tools network graphic" className="about-tools-full-svg" />

          <svg
            className="about-tools-logo"
            width="82"
            height="103"
            viewBox="0 0 82 103"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Aven logo"
            role="img"
          >
            <path
              d="M76.7269 23.172C73.1362 23.172 70.2227 25.5579 69.6276 28.9751L66.6731 46.2428C62.7131 46.2428 58.8762 44.9285 55.6754 42.6841C52.4746 40.4397 49.9098 37.245 48.5146 33.4841L36.3064 0.586376C36.1833 0.242638 35.8345 0 35.4652 0H14.1059C13.7366 0 13.4288 0.242638 13.3878 0.586376L0.0100695 78.817C-0.0720025 79.3225 0.358876 79.828 0.892344 79.828H5.07802C8.66867 79.828 11.5822 77.4421 12.1772 74.0249L15.1318 56.7572C19.0918 56.7572 22.9287 58.0715 26.1295 60.3159C29.3303 62.5603 31.895 65.755 33.2903 69.5159L45.7447 103H67.7195C68.0888 103 68.3966 102.757 68.4376 102.393L82 23.172H76.7269ZM64.4366 59.5071L59.184 89.9178C58.9378 91.2927 57.7888 92.243 56.3525 92.243C54.5879 92.243 53.0286 90.8276 52.8644 89.109V89.0483L50.9973 66.8671C50.8332 64.926 49.7252 63.1062 48.0427 61.9537L26.2116 47.1932C26.2116 47.1932 26.0679 47.0921 26.0064 47.0516C24.9394 46.3844 23.7084 46.0204 22.4978 46.0204H19.6458C18.3121 46.0204 17.2042 44.7668 17.4093 43.4929L22.6619 13.0823C22.9082 11.7073 24.0572 10.757 25.4934 10.757C27.258 10.757 28.8173 12.1724 28.9815 13.891V13.9517L30.8281 35.9509V36.052C31.0333 37.9527 32.1207 39.7523 33.7827 40.8846L55.8806 55.8271C57.0091 56.5954 58.3017 56.9998 59.6149 56.9998H62.2206C63.5543 56.9998 64.6623 58.2534 64.4571 59.5273"
              fill="#31374B"
            />
          </svg>

          <h2 className="about-tools-title">Tools we work with</h2>
          <p className="about-tools-desc">
            Aven supports modern accounting platforms and workflows, selected based on business fit. Common
            environments include QuickBooks, Zoho, Odoo, Dynamics setups, and Excel based reporting where
            needed.
          </p>
        </div>
      </section>
      <PromoBanner />
      <Footer />
    </main>
  );
}
