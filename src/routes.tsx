import StartPage from '@/views/StartPage';
import { Route, Routes as Router } from 'react-router-dom';

const Routes = () => {
  return (
    <Router>
      <Route path="/" element={<StartPage />} />
    </Router>
  );
};

export default Routes;
