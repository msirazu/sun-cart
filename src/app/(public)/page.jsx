import HeroSection from "@/pages/home/HeroSection";
import SummerTips from "@/pages/home/SummerTips";
import TopBrands from "@/pages/home/TopBrands";
import PopularProducts from "@/pages/products/PopularProducts";

export const metadata = {
  title: 'Sun Cart | Summer Essentials Store',
  discription: 'A modern summer eCommerce platform where users can explore and purchase seasonal products.'
}

const Homepage = () => {
  return (
    <div className="space-y-5">
      <section className="mt-5">
        <HeroSection/>
      </section>

      <section className="space-y-5">
        <h3 className="font-bold text-center text-2xl">Popular Products</h3>
        <div>
          <PopularProducts/>
        </div>
      </section>

      <section>
        <SummerTips/>
      </section>

      <section className="mb-5">
        <TopBrands/>
      </section>
    </div>
  );
};

export default Homepage;