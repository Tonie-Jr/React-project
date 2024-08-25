export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title"> Hey, I'm Antony</p>
                    <h1 className="her--section--title">
                    <span className="hero--section-title--color">Front End Developer &</span>{" "}
                    <br />
                    Data Analyst
                    </h1>
                    <p className="hero--section--description">
                        This is my first Portfolio website I'm building using reactjs.
                        <br />
                        I love coding and working on Data
                    </p>
                </div>
                <button className="btn btn-primary">Get In Touch</button>
            </div>
            <div className="hero--section--img">
                <img src="./img/hero4.jpg" alt="Hero section" />
            </div>
        </section>
    );
}