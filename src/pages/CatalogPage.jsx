import SideBar from '../components/SideBar/SideBar';
import PageContainer from '../components/PageContainer/PageContainer';
import AllAdverts from '../components/AllAdverts/AllAdverts';
import DocumentTitle from '../components/DocumentTitle/DocumentTitle';

const CatalogPage = () => {
  return (
    <>
      <DocumentTitle>Adverts Catalog Page</DocumentTitle>
      <PageContainer>
        <SideBar />
        <AllAdverts />
      </PageContainer>
    </>
  );
};

export default CatalogPage;
