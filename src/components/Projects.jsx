import { useState } from "react";
import { Keyboard, Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import projects from "../data/projects.js";
import { IconArrowUpRight, IconSparkle } from "./Icons.jsx";


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
    <section className="section projects" id="work" >
      <div className="projects-header">
        <div className="projects-heading-wrap">
          <div className="section-label">05 — Selected Work</div>
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
                {/* Visual Showcase / Image Container */}
                <div className="project-card-media">
                  <a
                    className="project-media-link"
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    title={`Open ${project.name} live website`}
                  >
                    <div className="project-image-container">
                      <img
                        className="project-card-img"
                        src={project.image}
                        alt={`${project.name} website preview`}
                        loading="lazy"
                      />
                      <div className="project-image-gradient" aria-hidden="true" />
                    </div>

                    {/* Top Floating Badges */}
                    <div className="project-floating-bar" aria-hidden="true">
                      {domain ? (
                        <div className="project-domain-pill">
                          <span className="domain-live-dot" />
                          <span className="domain-text">{domain}</span>
                        </div>
                      ) : (
                        <div className="project-domain-pill">
                          <span className="domain-live-dot" />
                          <span className="domain-text">Live Project</span>
                        </div>
                      )}
                      <span className="project-index-pill">
                        #{String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Hover Floating Action */}
                    <div className="project-hover-pill">
                      <span>Visit Website</span>
                      <IconArrowUpRight size={13} />
                    </div>
                  </a>
                </div>

                {/* Card Content Information */}
                <div className="project-card-content">
                  {/* Category & AI Tag Row */}
                  <div className="project-card-meta">
                    <span className="project-cat-badge">{project.type}</span>
                    {project.isAiPowered && (
                      <span className="project-ai-badge">
                        <IconSparkle size={11} />
                        <span>{project.aiBadge || "AI Accelerated"}</span>
                      </span>
                    )}
                  </div>

                  {/* Title with Interactive External Arrow */}
                  <h3 className="project-card-heading">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="project-heading-link"
                    >
                      <span>{project.name}</span>
                      <IconArrowUpRight size={16} className="heading-arrow" />
                    </a>
                  </h3>

                  {/* Description */}
                  <p className="project-card-description">{project.description}</p>

                  {/* Tech Stack Pills */}
                  <div className="project-card-tags">
                    <ul className="project-pills-list">
                      {project.technologies.map((technology) => {
                        const isAi =
                          technology.includes("Claude") ||
                          technology.includes("Codex") ||
                          technology.includes("AI");
                        return (
                          <li
                            key={technology}
                            className={`project-pill ${isAi ? "pill-is-ai" : ""}`}
                          >
                            {isAi && (
                              <IconSparkle
                                size={10}
                                style={{ marginRight: "4px", verticalAlign: "middle" }}
                              />
                            )}
                            <span>{technology}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* Modern Action Footer */}
                  <div className="project-card-footer">
                    <a
                      className="project-explore-btn"
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Visit ${project.name} live website`}
                    >
                      <span className="btn-text">Explore Live Site</span>
                      <span className="btn-arrow-circle" aria-hidden="true">
                        <IconArrowUpRight size={13} />
                      </span>
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
