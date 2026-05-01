import BrandCard from "./BrandCard";

const TopBrands = () => {
    return (
        <div className="space-y-5">
            <h5 className="text-center font-bold text-xl">Top Brands</h5>
            <section className="grid grid-cols-2 md:grid-cols-4 gap-5">
                <BrandCard name={'SunShade Co.'} description={'Premium eyewear and UV protection sunglasses for every style.'}/>

                <BrandCard name={'BeachVibe'} description={'Your go-to source for trendy beach towels and summer accessories.'}/>

                <BrandCard name={'AquaSport'} description={'High-quality swimwear and water gear for the adventurous soul.'}/>

                <BrandCard name={'GlowSkin'} description={'Natural skincare and SPF essentials to keep your skin summer-ready.'}/>
            </section>
        </div>
    );
};

export default TopBrands;