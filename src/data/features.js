import ExpertGuidanceSvg from "../components/svg/Features/ExpertGuidanceSvg";
import PropertyListingSvg from "../components/svg/Features/PropertyListingSvg";
import PropertyMatchingSvg from "../components/svg/Features/PropertyMatchingSvg";
import VirtualToursSvg from "../components/svg/Features/VirtualToursSvg";

export const features = [
  {
    id: crypto.randomUUID(),
    icon: PropertyListingSvg,
    title: 'Premium Property Listings',
    description: 'Discover an array of hand-picked properties that meet the highest standards of luxury and comfort.'
  },
  {
    id: crypto.randomUUID(),
    icon: PropertyMatchingSvg,
    title: 'Personalized Property Matching',
    description: 'Our advanced matching system pairs you with properties that align with your specific needs and desires.'
  },
  {
    id: crypto.randomUUID(),
    icon: ExpertGuidanceSvg,
    title: 'Expert Guidance and Support',
    description: 'Benefit from the expertise of our dedicated team of real estate professionals.'
  },
  {
    id: crypto.randomUUID(),
    icon: VirtualToursSvg,
    title: 'Virtual Tours',
    description: 'Take advantage of our cutting-edge virtual tours and 3D walkthroughs to explore properties from the comfort of your home.'
  }
]