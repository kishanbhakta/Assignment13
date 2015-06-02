console.log('This is cool!');

$('.container').html(template.example({
  value: 'Hello, World!!'
}));

$.getJSON("http://private-44f6d-timeline6.apiary-mock.com/timeline").done(function(items) {

    console.log('data', items);

    $('.container').html(template.ipsum(items));

});


