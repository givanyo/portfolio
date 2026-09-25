export interface ButtonData {
  text: string;
  fontSize: 'md' | 'lg';
  color: 'purple' | 'green' | 'white';
  link?: string;
  action?: CallableFunction;
}
