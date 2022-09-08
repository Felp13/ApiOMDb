let url = 'http://www.omdbapi.com/?s='

        // A apikey utilizada foi recebida por e-mail após cadastro no site da OMDb.
        let apiKey = '&apikey=c61c47cb'

        function PesquisarFilme(){
            let titulo = $('#titulo').val()
            $.get(url+titulo+apiKey, function (filmes) {
                var trs = "";
                $("#table-films tbody").empty()

                if(filmes.Response == 'False'){
                    trs = "<tr><td colspan='3'>Nenhum filme encontrado</td></tr>"
                }
                else{
                    $.each(filmes.Search, function () {

                        trs +=  "<tr><td>" + this.Title + 
                                "</td><td>" + this.Year + 

                                "</td><td>" + 
                                    "<img src="+ this.Poster + "/>" +
                                "</td></tr>"
                    });
                }
                $("#table-films").append(trs)
            })
        }