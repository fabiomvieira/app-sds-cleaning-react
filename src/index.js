import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import FloatButton from './components/FloatButton/FloatButton';
import './styles/main.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
      <Header />
        <main>
          <RouterProvider router={router} />
          <FloatButton />
        </main>
      <Footer />
  </div>
);
