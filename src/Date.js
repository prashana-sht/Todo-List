import React, { useState, useEffect } from 'react';

const Dates = () => {
  const [currentDay, setCurrentDay] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const currentDateObject = new Date();
    const dayIndex = currentDateObject.getDay(); 
    const monthIndex = currentDateObject.getMonth();
    const day = currentDateObject.getDate();
    const year = currentDateObject.getFullYear();

    setCurrentDay(daysOfWeek[dayIndex]);
    setCurrentDate([`${day}`, `${months[monthIndex]}`,`${year}`]);
  }, []); 

  return (
    <div className='dateAndDay'>
        {/* <div className='flex date'>
            <div className='flex currentdate'>
              {setCurrentDate[0]}
            </div>
            <div className='flex monthyear flex-col'>
              <div className='month'>
                {setCurrentDate[1]}
              </div>
              <div className='year'>
                {setCurrentDate[2]}
              </div>
            </div>
        </div> */}
        <div className='daate'>
          <p>{currentDate}</p>
        </div>
        <div className='day'>
          <p>{currentDay}</p>
        </div>
        
    </div>
  );
};

export default Dates;