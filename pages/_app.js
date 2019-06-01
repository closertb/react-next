// /pages/_app.js

import App, {Container} from 'next/app';
import { Provider } from 'react-redux';
import Layout from '../components/Layout';
import { RouterTitle } from '../configs/constants';
import createStore from '../store';
// import { } from '../store/reducer';

const store = createStore();

export default class MyApp extends App {
 constructor(props) {
    super(props);
    const { Component, pageProps, router } = props;
    this.state = { Component, pageProps, router };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { Component, pageProps, router } = nextProps;
    if (Component !== prevState.Component
      || pageProps !== prevState.pageProps
      || router !== prevState.router) {
      return {
        Component,
        pageProps,
        router
      };
    }
    return null;
  }
  
  render () {
    const { Component, pageProps, router } = this.props;
    
    return (
      <Container>
        <Provider store={store}>
          <Layout title={RouterTitle[router.pathname]}>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </Container>
    );
  }
}
