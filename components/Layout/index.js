import 'antd/dist/antd.css';
import Head from 'next/head';
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';
import './index.less';

export default function Layout(props) {
  const { children, title } = props;
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content="动产融资" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <Menu />
      {children}
      <Footer />
    </div>);
}