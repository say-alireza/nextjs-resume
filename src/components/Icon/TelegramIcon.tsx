import {FC, memo} from 'react';

const TelegramIcon: FC<{className?: string}> = memo(({className}) => (
  <svg className={className || 'h-5 w-5'} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.56 8.16l-2.02 9.52c-.15.68-.55.85-1.12.53l-3.08-2.27-1.49 1.43c-.16.16-.3.3-.62.3l.22-3.13 5.7-5.15c.25-.22-.05-.34-.38-.12l-7.05 4.44-3.04-.95c-.66-.21-.67-.66.14-.98l11.89-4.58c.55-.2 1.03.13.85.96z" />
  </svg>
));

TelegramIcon.displayName = 'TelegramIcon';
export default TelegramIcon;
