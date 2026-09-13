"use client";

import { useState } from "react";
import HorizontalScrollContainer from "./components/HorizontalScrollContainer";
import StudioHero from "./components/StudioHero";
import StudioServices from "./components/StudioServices";
import StudioTechStack from "./components/StudioTechStack";
import StudioWork from "./components/StudioWork";
import StudioJourney from "./components/StudioJourney";
import StudioAbout from "./components/StudioAbout";
import StudioContact from "./components/StudioContact";
import ResumeModal from "./components/ResumeModal";

export default function Home() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <>
      <HorizontalScrollContainer onOpenResume={() => setResumeOpen(true)}>
        <StudioHero />
        <StudioServices />
        <StudioTechStack />
        <StudioWork />
        <StudioJourney />
        <StudioAbout />
        <StudioContact />
      </HorizontalScrollContainer>

      {/* Interactive Curriculum Vitae Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </>
  );
}
