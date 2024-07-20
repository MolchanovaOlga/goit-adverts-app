import SideBar from '../components/SideBar/SideBar';
import PageContainer from '../components/PageContainer/PageContainer';
import FavoritsList from '../components/FavoritsList/FavoritsList';
import FavoritesTitle from '../components/FavoritesTitle/FavoritesTitle';

const FavoritesPage = () => {
  return (
    <>
      <FavoritesTitle />
      <PageContainer>
        <SideBar />
        <FavoritsList />
      </PageContainer>
    </>
  );
};

export default FavoritesPage;
