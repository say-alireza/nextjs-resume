import {FC, memo} from 'react';

import {TimelineItem as TimelineItemType} from '../../../data/dataDef';

const TimelineItem: FC<{item: TimelineItemType}> = memo(({item}) => {
  const {title, date, location, content} = item;
  return (
    <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
      <div className="flex flex-col pb-4">
        {/* عنوان مدرک یا پوزیشن شغلی - مشکی تیره و خوانا */}
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
        <div className="flex items-center justify-center gap-x-2 md:justify-start">
          {/* محل کار/دانشگاه - خاکستری پررنگ */}
          <span className="flex-1 text-sm font-semibold italic text-gray-700 sm:flex-none">{location}</span>
          <span className="text-gray-400">•</span>
          {/* تاریخ - خاکستری متوسط */}
          <span className="flex-1 text-sm font-medium text-gray-600 sm:flex-none">{date}</span>
        </div>
      </div>
      {/* متن توضیحات - خاکستری تیره استاندارد برای مطالعه */}
      <div className="text-base leading-relaxed text-gray-700">
        {content}
      </div>
    </div>
  );
});

TimelineItem.displayName = 'TimelineItem';
export default TimelineItem;