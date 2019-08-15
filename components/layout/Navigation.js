import Link from 'next/link';

export default function Navigation() {
    return (
        <ul id="main-navigation">
            <li className="active">
                <Link href='/'>
                    <a><i className="fa fa-home"></i></a>
                </Link>
            </li>
            <li>
                <a><i className="fa fa-bell"></i></a>
            </li>
            <li className="btn-create">
                <Link href='/create'>
                    <a><i className="fa fa-plus"></i></a>
                </Link>
            </li>
            <li>
                <a><i className="fa fa-user"></i></a>
            </li>

            <li>
                <Link href='/list'>
                    <a><i className="fa fa-bars"></i></a>
                </Link>
            </li>
        </ul>
    );
};