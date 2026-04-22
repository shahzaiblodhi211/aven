import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="hero">
            <div className="container hero-inner">
                <div className="hero-left">
                    <h1 className="hero-title">
                        Your Outsourced
                        <br />
                        Finance Department
                    </h1>

                    <p className="hero-sub">
                        Aven works as your dedicated finance team. We handle bookkeeping, ERP systems, payroll, tax, and reporting so you always know where your business stands.
                    </p>

                    <div className="hero-ctas">
                        <Link className="btn-beam2" href="/appointment">
                            <img src="/book-cons-icon1.svg" alt="" style={{ width: 20, height: 20 }} />
                            <span>BOOK CONSULTATION</span>
                        </Link>

                        <Link className="btn-ghost2" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                <path d="M7.636 0C3.56936 0 0.272344 3.27124 0.272344 7.30687C0.272344 8.68734 0.65846 9.97842 1.32901 11.0799L0 15L4.07692 13.7048C5.13188 14.2836 6.34517 14.6137 7.636 14.6137C11.7032 14.6137 15 11.342 15 7.30687C15 3.27124 11.7032 0 7.636 0ZM11.2977 10.0818C11.1244 10.5113 10.341 10.9032 9.99526 10.9213C9.64992 10.9396 9.64008 11.1889 7.75731 10.371C5.87478 9.55292 4.74218 7.56375 4.65288 7.43565C4.56352 7.30801 3.92364 6.39613 3.95816 5.47845C3.99291 4.5606 4.49545 4.12758 4.67481 3.94748C4.85397 3.76711 5.05939 3.7348 5.18481 3.73276C5.33307 3.73035 5.4291 3.72834 5.53882 3.73239C5.64844 3.73654 5.8131 3.70945 5.95567 4.0886C6.09817 4.46772 6.43925 5.39953 6.48288 5.49449C6.52647 5.58954 6.55346 5.6996 6.48629 5.82164C6.41893 5.94395 6.38444 6.02036 6.28671 6.12576C6.18844 6.23116 6.07999 6.36154 5.99233 6.44213C5.89456 6.53136 5.79244 6.62869 5.89523 6.81944C5.99796 7.01006 6.35237 7.63493 6.8923 8.14989C7.58622 8.81186 8.18464 9.03144 8.36879 9.13148C8.55345 9.23206 8.66364 9.22088 8.77815 9.10038C8.89212 8.97988 9.26829 8.57317 9.40078 8.3916C9.5332 8.20952 9.65729 8.24518 9.82741 8.31362C9.99743 8.38232 10.9041 8.86795 11.0888 8.96823C11.2733 9.0683 11.3966 9.11987 11.4407 9.19925C11.4848 9.27894 11.4708 9.6523 11.2977 10.0818Z" fill="black" />
                            </svg>
                            WHATSAPP US
                        </Link>
                    </div>
                </div>

                <div className="hero-right">
                    <div className="hero-image-wrap">
                        <Image src="/hero.svg" alt="Aven illustration" width={620} height={550} priority />
                    </div>
                </div>
            </div>
        </section>
    );
}
