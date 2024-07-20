import SideBar from '../components/SideBar/SideBar';
import PageContainer from '../components/PageContainer/PageContainer';
import FavoritsList from '../components/FavoritsList/FavoritsList';

const FavoritesPage = () => {
  return (
    <>
      <PageContainer>
        <SideBar />
        <FavoritsList />
      </PageContainer>
    </>
  );
};

export default FavoritesPage;
