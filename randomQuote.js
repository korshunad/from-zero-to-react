$(document).ready(function() {      $.getJSON("https://raw.githubusercontent.com/korshunad/from-zero-to-react/master/quotes.json", function(dataset) {
   dataset.push({quote:" <iframe class=\"embed-responsive-item\" src=\"//www.youtube.com/embed/wr6itOBLVQA\"></iframe>"})
  $("#getMessage").on("click", function(){
        var i=Math.floor((Math.random() * dataset.length) + 0)
        var quote=dataset[i]["quote"]
        $(".quote").html(quote);
    
        var url="https://twitter.com/intent/tweet?text="
    $("#twitterButton").attr("href",(url+encodeURIComponent(quote+" Viktor Frankl")))
      });
 
    });

  });
