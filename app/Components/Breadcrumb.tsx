"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import "../Styles/Breadcrumb.css";

const Breadcrumb = () => {
    const router = useRouter();
    const pathnames = router.asPath.split('/').filter((x) => x);

    return (
        <section className="breadcrumb-section set-bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="breadcrumb__text">
                            <h2>{pathnames[pathnames.length - 1] || 'Home'}</h2>
                            <div className="breadcrumb__option">
                                <Link href="/">Home</Link>
                                {pathnames.map((value, index) => {
                                    const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                                    const isLast = index === pathnames.length - 1;
                                    return (
                                        isLast ? (
                                            <span key={routeTo}>{value}</span>
                                        ) : (
                                            <Link key={routeTo} href={routeTo}>{value}</Link>
                                        )
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Breadcrumb;
