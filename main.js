'use strict';

$(async function(){
  const imgSmall = 'testdata/flower-500k.jpg';
  const imgBig = 'testdata/road-3600k.jpg';

  const
    txtBox = $('#text'),
    logStart = function(label){
      let timeStart = new Date();
      return () => {
        txtBox.append(
          `<h3>${label}: ${(new Date()).valueOf() - timeStart.valueOf()}</h3>`
        );
      };
    }

  //sequential
  let logSeqTotalEnd = logStart('sequential total');

  let logEnd1 = logStart(`sequential ${imgSmall}`);
  await $.get(imgSmall, {cache:false});
  logEnd1();

  let logEnd2 = logStart(`sequential ${imgBig}`);
  await $.get(imgBig, {cache:false});
  logEnd2();

  logSeqTotalEnd();

  //concurrent
  let logConcTotalEnd = logStart('concurrent total');
  await* [$.get(imgSmall, {cache:false}), await $.get(imgBig, {cache:false})];
  logConcTotalEnd();
});
