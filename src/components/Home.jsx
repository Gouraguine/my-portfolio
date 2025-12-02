import React from "react";
import Hero from "./Hero";

export default function Home() {
  return (
    <>
      <section className="home-hero">
         <div className="hero-right">
          <div className="photo-frame">
            <img src="https://vast-brown-aaegtinls0-oi5csdxbyr.edgeone.dev/profile.jpeg" alt="Profile" className="profile-img" />
            <div className="photo-overlay" />
          </div>
        </div>
        <div className="hero-left">
          <Hero />
        </div>

       
      </section>
    </>
  );
}
