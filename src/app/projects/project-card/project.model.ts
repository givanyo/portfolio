export interface ProjectData {
  id: number;
  imgPath: string;
  orientation: 'horizontal' | 'vertical';
  title: string;
  description: string;
  githubLink: string;
  liveWebsiteLink?: string;
}
