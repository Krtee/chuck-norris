import ContentBody from "@/components/ContentBody";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getVisitorCount } from "@/utils/visitorCountUtils";

const Home = async () => {
  const initialVisitorCount = await getVisitorCount();
  return (
    <div className=" min-h-screen m-8 p-8 bg-white rounded-xl">
      <Header />
      <ContentBody />
      <Footer initialVisitorCount={initialVisitorCount} />
    </div>
  );
};

export default Home;
