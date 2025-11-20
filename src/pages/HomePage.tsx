import { Hero } from '@/components/sections/Hero';
import { Challenge } from '@/components/sections/Challenge';
import { StagesOverview } from '@/components/sections/StagesOverview';
import { Stage1 } from '@/components/sections/Stage1';
import { Stage2 } from '@/components/sections/Stage2';
import { Stage3 } from '@/components/sections/Stage3';
import { ToolsPricing } from '@/components/sections/ToolsPricing';
import { NextSteps } from '@/components/sections/NextSteps';

export function HomePage() {
  return (
    <>
      <Hero />
      <Challenge />
      <StagesOverview />
      <Stage1 />
      <Stage2 />
      <Stage3 />
      <ToolsPricing />
      <NextSteps />
    </>
  );
}
