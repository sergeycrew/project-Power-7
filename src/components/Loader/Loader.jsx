import { InfinitySpin } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <InfinitySpin
      color='${(p) => p.theme.colors.orangeColor}'
      visible={true}
      height={200}
      width={200}
      ariaLabel="infinity-spin-loading"
      
    />
  );
};