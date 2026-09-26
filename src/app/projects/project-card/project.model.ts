export interface ProjectData {
  id: number;
  imgPath: string;
  orientation: 'horizontal' | 'horizontal-full-width' | 'vertical';
  title: string;
  description: string;
  githubLink?: string;
  liveWebsiteLink?: string;
}
