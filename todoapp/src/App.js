import { Route,Routes } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import FavouritesPage from './pages/Favourites';
import NewMeetupPage from './pages/NewMeetup';
import Layout from './components/layout/Layout';

function App() {
  return ( <Layout>
    <Routes>
    <Route path="/" element={<AllMeetupsPage />} exact={true}/>
    <Route path='/new-meetup' element={<NewMeetupPage />} />
    <Route path='/favourites' element={<FavouritesPage />} />
    </Routes>
  </Layout>
  );
}

export default App;