$(document).ready(function () {
    var advice = $('#advice_comp')
    var url = "https://api.adviceslip.com/advice"

    async function getAdvice(){
        var res = await axios.get(url)
        var advices = res.data.slip
        $('#id').text(advices.id)
        $('#advice').text(advices.advice)
    }

    getAdvice()

    $('#button').click(function () {
        advice.addClass('scale-110')
        $.getJSON(url, function (data) {
                $('#id').text(data.slip.id)
                $('#advice').text(data.slip.advice)
                advice.removeClass('scale-110')
  
        })
    })
})