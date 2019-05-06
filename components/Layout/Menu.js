import Link from 'next/link';
import { RouterTitle } from '../../configs/constants';

const linkStyle = {
  marginRight: 15
}

export default function Header() {
  return (
    <div className="menu-box">
      {Object.keys(RouterTitle).map(item => (
        <Link href={item} key={item}>
          <a className="menu-item">{RouterTitle[item]}</a>
        </Link>
      ))}
    </div>
  );
}