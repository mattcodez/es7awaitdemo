'use strict';

$(async function(){
  const imgSmall = 'testdata/flower-500k.jpg';
  const imgBig = 'testdata/road-3600k.jpg';

  const
    txtBox = $('#text'),
    timeStart,
    //FIXME Need independent time vars
    logStart = () => timeStart = new Date(),
    logEnd = () => {
      txtBox.append((new Date()).valueOf() - timeStart.valueOf());
    };

  //sequential
  logStart();
  await $.get(imgSmall);
  logEnd(imgSmall);

  logStart();
  await $.get(imgBig);
  logEnd(imgBig);

});
