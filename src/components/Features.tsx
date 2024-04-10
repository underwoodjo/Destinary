'use client';
import { cn } from '@/app/_lib/utils/cn';

import { HoverEffect } from './ui/card-hover-effect';

export default function Features() {
  return (
    <div className="max-w-5xl mx-auto px-8 h-screen">
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    title: 'Navigation',
    description: `We won't guide you into a lake Flexible Drivable \n\n Flexible Drive Times.`,
    link: '/',
  },
  {
    title: 'Travel How You Want To',
    description:
      "Decide ahead of time when you want to stop and we'll figure out the rest.",
    link: '/',
  },
  {
    title: 'Mobile App to Come Soon',
    description: 'ETA Dunno.',
    link: '/',
  },
  {
    title: 'Find Places to Stay',
    description:
      'Simply put in how long you want to travel that day and let us populate places to stay in the area!',
    link: '/',
  },
  {
    title: 'Gas Stations and Restaurants',
    description:
      "As you travel, we'll find gas stations and restaurants near you!",
    link: '/',
  },
];
