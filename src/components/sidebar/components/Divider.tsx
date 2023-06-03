type Props = {
  additionalClasses?: string;
};

const Divider = ({ additionalClasses }: Props) => (
  <hr className={`sidebar-divider ${additionalClasses}`} />
);

export default Divider;
