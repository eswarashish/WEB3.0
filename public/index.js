 
$(document).ready(function() {
  $("#wallet").hide();
  
    $("#connectM").on('click', _event => {
       
        let account;
        ethereum.request({method: 'eth_requestAccounts'}).then(accounts => {
          account = accounts[0];
          console.log(account);
      
        });
      });
      $("#closewallet").on('click', function () {
        
      $("#wallet").hide();
      
        
      });
    $("#menU").hide(); 
$("#womenU").hide();
$("#connect").on("click", function () {
    $("#wallet").show()
})

    $(".menuicon").on("click" , function () {
        $("#menU").toggle();       })
        $("#womenicon").on("click" , function () {
            $("#womenU").toggle();       })
$("#relativeclose").on("click", function () {
    $("#relativemenu").hide();
    
})
$("#sidecart").hide()
$("#carticon").on("click", function () {
    $("#sidecart").show();
})
$("#cartclose").on("click", function () {
    $("#sidecart").hide();

})





        

})

