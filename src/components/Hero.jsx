import heroImg from "../assets/hero.svg";
const Hero = () => {
    return (
        <section className='hero'>
            <div className='hero-center'>
                <div className='hero-title'>
                    <h1>Contentful CMS</h1>
                    <p>
                        Fingerstache banh mi ethical, af williamsburg copper mug
                        selfies keffiyeh asymmetrical offal forage food truck
                        lyft keytar. Etsy succulents ascot blue bottle kinfolk
                        air plant tumeric snackwave bodega boys asymmetrical
                        sriracha umami. Sustainable yr edison bulb, leggings
                        fixie blog kogi taxidermy distillery kitsch meditation
                    </p>
                </div>
                <div className='img-container'>
                    <img
                        src={heroImg}
                        alt='woman and the browser'
                        className='img'
                    />
                </div>
            </div>
        </section>
    );
};
export default Hero;
