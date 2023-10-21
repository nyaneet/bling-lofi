import StartPage from '@/views/StartPage';
import { Route, Routes as Router } from 'react-router-dom';
import EventPage from './views/EventPage';
import NewEventPage from './views/NewEventPage';

const Routes = () => {
  return (
    <Router>
      <Route path="/" element={<StartPage />} />
      <Route path="/new" element={<NewEventPage />} />
      <Route path="/event" element={<EventPage />} />
    </Router>
  );
};

export default Routes;
