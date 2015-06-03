console.log('This is cool!');


$.getJSON("http://private-44f6d-timeline6.apiary-mock.com/timeline").done(function(items) {

    // console.log('data', items);

    items.timelines.forEach (function(timeline) {

      var m = moment( new Date (timeline.timestamp));
      timeline.date =  m.format("DD/MM/YY");
      timeline.times = m.format("hh:mm");

      // console.log(data)

     return timeline;



    });

$('.container').html(template.kishan(items));

});


      // var title = data.title
      // var content = data.content
      // var icon = data.icon
      // var timeStamp = data.timestamp;
