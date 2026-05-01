import HeroSection from "@/pages/home/HeroSection";

export const metadata = {
  title: 'Sun Cart | Summer Essentials Store',
  discription: 'A modern summer eCommerce platform where users can explore and purchase seasonal products.'
}

const Homepage = () => {
  return (
    <div>
      <section>
        <HeroSection/>
      </section>
    </div>
  );
};

export default Homepage;