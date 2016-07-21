$('#locations').on('change',function (event) {
  var location = $(this).val();
  //console.log(location)
  if (location === 'Denver'){
    $('#background').css('backgroundImage', 'url(http://marketingvisible.com/wp-content/uploads/2016/02/denver-colorado.jpg)')
  }
  else if (location === 'Whistler'){
    $('#background').css('backgroundImage', 'url(http://static1.squarespace.com/static/544826ade4b0ac06f58301ed/t/545c09a9e4b03a44d11069df/1415317934269/p2p.jpg?format=2500w)')
  }
  else if (location === 'Las Vegas'){
    $('#background').css('backgroundImage', 'url(http://www.billboard.com/files/styles/article_main_image/public/media/Adele-2015-Alasdair-McLellan-billboard-650.jpg)')
  }
  else if (location === 'NYC'){
    $('#background').css('backgroundImage', 'url(http://nycparkingauthority.com/wp-content/uploads/2014/05/nyc-monthly-parking.jpg)')
  }
  else if (location === 'Santa Monica'){
    $('#background').css('backgroundImage', 'url(http://inception-app-prod.s3.amazonaws.com/MTY0MmRhOGEtMjY3NS00NzExLTk2NDAtZTEwZWI2MWU4NDll/media/2015/06/santa-monica-pier-at-sunset.jpg)')
  }
  else if (location === 'selectOne'){
    $('#background').css('height', 0)
  }
});
