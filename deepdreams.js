$(document).ready(function() {

  $container = $('#masonry-container');
  

  url = "images/"
  data = ["akilian.jpg",
              "andrew_side_dream.png",
              "andrew-kathleen.jpg",
              "connor.jpg",
              "jenn.png",
              "maran.jpg",
              "tess.jpg",
              "zain.jpg",

              "andrew_side_dream.png",
              "andrew-kathleen.jpg",
              "connor.jpg",
              "jenn.png",
              "maran.jpg",
              "tess.jpg",
              "zain.jpg",

              "andrew_side_dream.png",
              "andrew-kathleen.jpg",
              "connor.jpg",
              "jenn.png",
              "maran.jpg",
              "tess.jpg",
              "zain.jpg",

              "andrew_side_dream.png",
              "andrew-kathleen.jpg",
              "connor.jpg",
              "jenn.png",
              "maran.jpg",
              "tess.jpg",
              "zain.jpg",


              "andrew_side_dream.png",
              "andrew-kathleen.jpg",
              "connor.jpg",
              "jenn.png",
              "maran.jpg",
              "tess.jpg",
              "zain.jpg",

              "andrew_side_dream.png",
              "andrew-kathleen.jpg",
              "connor.jpg",
              "jenn.png",
              "maran.jpg",
              "tess.jpg",
              "zain.jpg",
              ];
  
  for (var i = 0; i < data.length; i++) {
    var $el = $(
        "<div class='box'>" + 
        "<a class='fluidbox' href='" + url + data[i] + "'>" +
        "<img src=" + url + data[i]
          + "></a></div>");

    $container.append($el);
    $('a.fluidbox').fluidbox();
  }

  $container.imagesLoaded( function(){
    $container.masonry({
      itemSelector : '.box',
      columWidth: 200,
      isFitWidth: true
    });
  });

  $('input[name="upload"]').change(function(){
      fileName = $(this).val();
      name = fileName.split('\\').pop()
      name = name.split('/').pop()
      if (name.length > 0) {
        $('#filename').html(
          "<i class='icon ion-checkmark-circled'></i> "
          + name
        );
        $('button.btn-file').addClass('done');
        $('button.btn-dream').prop("disabled", false);
      }


  });

  $('span.easter').click(function() { $(this).text('AWS server running a convolutional neural network in reverse'); });


  // var fileExt = {};
  //     fileExt[0]=".png";
  //     fileExt[1]=".jpg";
  //     fileExt[2]=".gif";
  
  // $.ajax({
  //     //This will retrieve the contents of the folder if the folder is configured as 'browsable'
  //     url: 'images/',
  //     success: function (data) {
  //       $("#fileNames").html('<ul>');
  //       //List all png or jpg or gif file names in the page
  //       $(data).find('a:contains(" + fileExt[0] + "),a:contains(" + fileExt[1] + "),a:contains(" + fileExt[2] + ")').each(function () {
  //           var filename = this.href.replace(window.location.host, "").replace("http:///", "");
  //           // $("#fileNames").append( '<li>'+filename+<'/li'>);
  //           $("body").append($("<img src=" + url + filename + "></img>"));

  //         });
        

  //       // $("#fileNames").append('</ul>');
  //      }     
  //   });




});