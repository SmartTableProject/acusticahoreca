import { homeCollage } from "@/data/home-collage";

/** Foto curate — allineate al collage home */
export type ShowcaseSlide = {
  id: string;
  src: string;
  title: string;
  objectPosition?: string;
};

export const showcaseSlides: ShowcaseSlide[] = homeCollage.map((t) => ({
  id: t.id,
  src: t.src,
  title: t.title,
  objectPosition: t.objectPosition,
}));
