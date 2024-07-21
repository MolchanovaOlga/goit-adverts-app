import SideBar from '../components/SideBar/SideBar';
import PageContainer from '../components/PageContainer/PageContainer';
import FavoritsList from '../components/FavoritsList/FavoritsList';
import FavoritesTitle from '../components/FavoritesTitle/FavoritesTitle';
import DocumentTitle from '../components/DocumentTitle/DocumentTitle';

const FavoritesPage = () => {
  return (
    <>
      <DocumentTitle>Adverts Favorites Page</DocumentTitle>
      <FavoritesTitle />
      <PageContainer>
        <SideBar />
        <FavoritsList />
      </PageContainer>
    </>
  );
};

export default FavoritesPage;
