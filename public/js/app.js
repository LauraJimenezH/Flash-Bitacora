$(document).ready(function() {
  var $insertChart = $('#letter');
  var $insertFile = $('#file');
  $insertChart.click(clean);
  $insertFile.click(clean);

  function clean() {
    $('input:text').val('');
    $('#textarea1').val('');
  }

  $('.modal').modal({
    dismissible: true, // Modal can be dismissed by clicking outside of the modal
    opacity: 0.5, // Opacity of modal background
    inDuration: 300, // Transition in duration
    outDuration: 200, // Transition out duration
    startingTop: '4%', // Starting top style attribute
    endingTop: '10%', // Ending top style attribute
  });

  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year,
    today: 'Today',
    clear: 'Clear',
    close: 'Ok',
    closeOnSelect: false // Close upon selecting a date,
  });

  var $chart = $('#btn-chart');
  var $file = $('#btn-file');
  var $video = $('#btn-video');
  var $evento = $('#btn-evento');

  $chart.click(charts);

  function charts() {
    $('#modal1').modal('close');
    $inputVal = $('#modal1 input:text').val();
    $textareaVal = $('#textarea1').val();

    $('main').append(
      `<div class="row">
        <div class="col s12 m8 offset-m2">
          <div class="card horizontal hoverable">
            <div class="card-stacked">
              <div class="card-content center-align">
                <h4>${$inputVal}</h4>
                <p>${$textareaVal}</p>
              </div>
            </div>
          </div>
        </div>
      </div>`);
  }

  $('#filesimg').change(function() {
    var filest = (this.files[0].name).toString();
    var fileReader = new FileReader();
    fileReader.onload = function(e) {
      $('#modal2 img').attr('src', e.target.result);
    };
    fileReader.readAsDataURL(this.files[0]);
  });

  function postImagen() {
    $inputVal2 = $('#modal2 input:text').val();
    let imgSrc = $('#thumb');
    $('#modal2').modal('close');
    $('main').append(`<div class="row">
              <div class="col s12 m8 offset-m2">
                <div class="card horizontal hoverable">
                  <div class="card-stacked">
                    <div class="card-content col m12">
                      <h4>${inputVal2}</h4>
                      <img src="${imgSrc[0].src}">
                    </div>
                  </div>
                </div>
              </div>
            </div>`);
  }

  $file.on('click', postImagen);
