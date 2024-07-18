import SideBar from "../components/SideBar/SideBar";
import PageContainer from "../components/PageContainer/PageContainer";
import AdvertsList from "../components/AdvertsList/AdvertsList";

const CatalogPage = () => {
  return (
    <>
      <PageContainer>
        <SideBar />
        <AdvertsList />
      </PageContainer>
    </>
  );
};

export default CatalogPage;
