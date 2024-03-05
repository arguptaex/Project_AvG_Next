import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "@/components/hero-section/hero-section";
import cssCompo from "@/assets/css_compo.jpg";
import projectSecImg from "@/assets/project-section-img.jpg";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <section className="resources">
        <div className="container">
          <div className="resources-head-text">
            <h1>RESOURCES</h1>
            <p>
              Browse through our collection of coding resources, course answers,
              and HTML/CSS components for all your programming needs.
            </p>
          </div>

          <div className="available-resources">
            <div className="resource-card">
              <div className="resource-info">
                <h1>HTML CSS Components</h1>
                <a href="">
                  <ion-icon name="chevron-up-circle-outline"></ion-icon>
                  Open
                </a>
              </div>
              <div className="resource-img">
                <Image src={cssCompo} alt="" />
              </div>
            </div>
            <div className="resource-card black-card">
              <div className="resource-info">
                <h1>HTML CSS Components</h1>
                <a href="">
                  <ion-icon name="chevron-up-circle-outline"></ion-icon>
                  Open
                </a>
              </div>
              <div className="resource-img">
                <Image src={cssCompo} alt="" />
              </div>
            </div>
            <div className="resource-card black-card second-black-card">
              <div className="resource-info">
                <h1>HTML CSS Components</h1>
                <a href="">
                  <ion-icon name="chevron-up-circle-outline"></ion-icon>
                  Open
                </a>
              </div>
              <div className="resource-img">
                <Image src={cssCompo} alt="" />
              </div>
            </div>
            <div className="resource-card">
              <div className="resource-info">
                <h1>HTML CSS Components</h1>
                <a href="">
                  <ion-icon name="chevron-up-circle-outline"></ion-icon>
                  Open
                </a>
              </div>
              <div className="resource-img">
                <Image src={cssCompo} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="explore-projects">
        <div className="container">

          <div className="info-container">
            <h1>
              Unlock Your Projects with Ready-to-Use
              <span className="green-span">Code</span> !
            </h1>
            <p>
              Explore a collection of project codes for your personal endeavors.
              Request the code you need and bring your ideas to life!
            </p>
            <a href="" className="explore-project-btn">
              <button>Explore Projects</button>
            </a>
          </div>
          <div className="img-container">
            <Image src={projectSecImg} alt="" />
          </div>

        </div>
      </section>

      <script src="https://unpkg.com/ionicons@latest/dist/ionicons.js"></script>

    </main>
  );
}
