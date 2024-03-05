import heroImg from "@/assets/hero_three.png";
import Image from "next/image";

export default function HeroSection(params) {
    return (
        <section className="hero-section">
            <div className="container">
                <div className="hero-text-section">
                    <h1>Elevate Your Code, Empower Your Projects!</h1>
                    <p>
                        Whether you're a coding novice or a seasoned pro, our platform is
                        designed to fuel your passion and drive your projects to new
                        heights.
                    </p>
                    <button className="explore-btn">EXPLORE</button>
                </div>
                <div className="hero-img-section">
                    <Image src={heroImg} alt="" />
                </div>
            </div>
        </section>
    )

};
