import './App.scss';
import Header from './components/Header/Header';
import ContentLayout from './components/Layout/ContentLayout/ContentLayout';
import MainLayout from './components/Layout/MainLayout/MainLayout';

function App() {
  return (
    <MainLayout>
      <Header />
      <ContentLayout />
    </MainLayout>
  );
}

export default App;
