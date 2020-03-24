import React from 'react';
import { translate } from "react-translate";


export default translate('home')(({ item, t }) => {
  return (
    <span className="pointer">
      {t(item)}
    </span>
  );
})
