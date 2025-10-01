"use client";
import React from "react";
import Hero from "./components/hero/hero";
import Project from "./components/project/project";
import Description from "./components/description/description";
import Process from "./components/process/process";
import Services from "./components/sevices/services";
import Index from "./components/whyToChooseme";
import Testimonials from "./components/testimonials/testimonials";

export default function HeroSection() {
  
  return (
    <>
    <Hero/>
    <Project/>
    <Description/>
    <Process/>
    <Services/>
    <Index/>
    <Testimonials/>
    </>
  );
}
