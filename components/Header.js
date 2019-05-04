import Link from 'next/link';
import { RouterTitle } from '../configs/constants';

const linkStyle = {
  marginRight: 15
}

export default function Header() {
  return (
    <div>
      {Object.keys(RouterTitle).map(item => (
        <Link href={item} key={item}>
          <a style={linkStyle}>{RouterTitle[item]}</a>
        </Link>
      ))}
    </div>
  );
}