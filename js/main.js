function consultaCep(){
    var cep =document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/"
    console.log(url);
    $.ajax({
        url: url,
        type: "GET",
        success : function(response){
            console.log(response);
            // alert(response.localidade);
            $("#localidade").html(response.localidade);
            // document.getElementById("localidade").innerHTML = response.localidade;
            document.getElementById("uf").innerHTML = response.uf;
            $("#titulo_cep").html("CEP " +response.cep);
            $(".cep").show();
        }
    })
}

$(function(){
    $(".cep").hide();
});