import type { FC } from 'react';
import type { SvgPropTypes } from '@/types/SvgPropTypes';
import { ICON_MAP, type IconName } from './constants';


type IconData = SvgPropTypes & {
  name: IconName;
}

export const Icon: FC<IconData> = ({ name, ...rest }) => {
  const IconComponent = ICON_MAP[name];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent {...rest} />;
};
