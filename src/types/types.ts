export type Profile = {
  label?: string;
  value?: string;
  icon?: React.JSX.Element;
};

export type Experience = {
  location: string;
  name: string;
  description?: string;
  startDate: Date;
  endDate: Date | null;
};
