import SideBar from '../components/SideBar/SideBar';
import PageContainer from '../components/PageContainer/PageContainer';
import AllAdverts from '../components/AllAdverts/AllAdverts';

const CatalogPage = () => {
  return (
    <>
      <PageContainer>
        <SideBar />
        <AllAdverts />
      </PageContainer>
    </>
  );
};

export default CatalogPage;
