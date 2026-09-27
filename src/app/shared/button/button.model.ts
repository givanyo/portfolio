export interface ButtonData {
  text: string;
  fontSize: 'md' | 'lg' | 'xl';
  color: 'purple' | 'green' | 'white';
  link?: string;
  action?: CallableFunction;
  displaySvg: boolean;
}
