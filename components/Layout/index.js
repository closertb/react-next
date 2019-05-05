import 'antd/dist/antd.css';
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';
import './index.less';

export default function Layout(props) {
  const { children } = props;
  return (
    <div>
      <Header />
      <Menu />
      {children}
      <Footer />
    </div>);
}