import { Outlet , useLocation  } from 'react-router-dom';
import Header from './layout/header';
import Footer from './layout/footer';
function App() {
  const location = useLocation();
  const isChat = location.pathname.startsWith('/chatbot');
  const isProfile = location.pathname.startsWith('/profile');
  const isSettings = location.pathname.startsWith('/settings');
  return (
    <div>
      {(!isChat && !isProfile && !isSettings)&&<Header />}
      <main className="flex-grow">
        <Outlet />
      </main>
      {(!isChat && !isProfile  && !isSettings)&&<Footer />}
    </div>
  );
}

export default App;