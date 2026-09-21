import { useState } from "react";
import { Keyboard, Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import projects from "../data/projects.js";

function Projects() {
  const [swiper, setSwiper] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const updateNavState = (s) => {
    if (!s) return;
    setIsBeginning(s.isBeginning);
    setIsEnd(s.isEnd);
  };

  return (
    <section className="section projects" id="work">
      <div className="projects-header">
        <div className="projects-heading-wrap">
          <div className="section-label">04 - Selected Work</div>
          <div className="section-heading">
            <h2>Responsive websites built with structure, clarity and care.</h2>
          </div>
        </div>

        <div className="slider-nav" aria-label="Slider navigation">
          <button
            type="button"
            className="slider-arrow-btn slider-arrow-prev"
            onClick={() => swiper?.slidePrev()}
            disabled={isBeginning}
            aria-label="Previous project"
            title="Previous project"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
          </button>
          <button
            type="button"
            className="slider-arrow-btn slider-arrow-next"
            onClick={() => swiper?.slideNext()}
            disabled={isEnd}
            aria-label="Next project"
            title="Next project"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </div>

      <Swiper
        className="project-carousel"
        aria-label="Selected website projects"
        modules={[Keyboard, Mousewheel]}
        slidesPerView={1}
        spaceBetween={20}
        speed={650}
        grabCursor
        keyboard={{ enabled: true }}
        mousewheel={{
          forceToAxis: true,
          releaseOnEdges: true,
          sensitivity: 0.7,
        }}
        onSwiper={(s) => {
          setSwiper(s);
          updateNavState(s);
        }}
        onSlideChange={updateNavState}
        onReachBeginning={updateNavState}
        onReachEnd={updateNavState}
        onFromEdge={updateNavState}
        breakpoints={{
          700: {
            slidesPerView: 1.8,
            spaceBetween: 24,
          },
          1100: {
            slidesPerView: 2.8,
            spaceBetween: 28,
          },
        }}
      >
        {projects.map((project, index) => {
          const domain = project.url
            ? project.url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/.*$/, "")
            : "";

          return (
            <SwiperSlide key={project.id}>
              <article className="project-card">
                <div className="project-mockup">
                  <div className="mockup-header">
                    <div className="mockup-dots" aria-hidden="true">
                      <span className="dot dot-red"></span>
                      <span className="dot dot-yellow"></span>
                      <span className="dot dot-green"></span>
                    </div>
                    {domain && (
                      <span className="mockup-domain">
                        <svg
                          className="domain-icon"
                          viewBox="0 0 24 24"
                          width="12"
                          height="12"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <line x1="2" y1="12" x2="22" y2="12" />
                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        </svg>
                        {domain}
                      </span>
                    )}
                  </div>
                  <a
                    className="project-image-link"
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    title={`Visit ${project.name} live`}
                  >
                    <img
                      className="project-img"
                      src={project.image}
                      alt={`${project.name} website preview`}
                      loading="lazy"
                    />
                    <span className="project-image-badge">Open Live Site ↗</span>
                  </a>
                </div>

                <div className="project-content">
                  <div className="project-meta">
                    <span className="project-number">
                      #{String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="project-type-badge">{project.type}</span>
                  </div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <ul className="tag-list">
                    {project.technologies.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>
                  <div className="project-actions">
                    <a
                      className="button primary project-link-btn"
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Site ↗
                    </a>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Projects;
