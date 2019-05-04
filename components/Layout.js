import Header from './Header';
import 'antd/dist/antd.css';


export default function Layout(props) {
  const { children } = props;
  return (
    <div>
      <Header />
      {children}
    </div>);
}