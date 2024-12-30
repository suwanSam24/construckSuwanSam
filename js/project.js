// validate email register
function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
// validate name register
function validateName(name) {
  const regName =
    /^(?:((([^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]'’,\-.\s])){1,}(['’,\-\.]){0,1}){2,}(([^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]'’,\-. ]))*(([ ]+){0,1}(((([^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]'’,\-\.\s])){1,})(['’\-,\.]){0,1}){2,}((([^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]'’,\-\.\s])){2,})?)*)$/;
  return regName.test(name);
}
function validatePhone(phone) {
  // Regex pattern for common phone number formats
  const patt = /^(\+?\d{1,3}[-.\s]?)?(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$/;
  return patt.test(phone);
}
// const pNum = [
//   "123-456-7890",
//   "(123) 456-7890",
//   "+1 123-456-7890",
//   "1234567890",
//   "+91 (123) 456-7890",
// ];

// // Get the modal
// var myModalSupervision = document.getElementById("myModalSupervision");
// var myModalQuality = document.getElementById("myModalQuality");
// var myModalBudget = document.getElementById("myModalBudget");
// var myModalReport = document.getElementById("myModalReport");
// var myModalRenovate = document.getElementById("myModalRenovate");

// // Get the button that opens the modal
// var btnSupervision = document.getElementById("myBtnSupervision");
// var btnQuality = document.getElementById("myBtnQuality");
// var btnBudget = document.getElementById("myBtnBudget");
// var btnReport = document.getElementById("myBtnReport");
// var btnRenovate = document.getElementById("myBtnRenovate");

// // Get the <span> element that closes the modal
// // var span = document.getElementsByClassName("close")[0];
// var spanSupervision = document.getElementsByClassName("closeSupervision")[0];
// var spanQuality = document.getElementsByClassName("closeQuality")[0];
// var spanBudget = document.getElementsByClassName("closeBudget")[0];
// var spanReport = document.getElementsByClassName("closeReport")[0];
// var spanRenovate = document.getElementsByClassName("closeRenovate")[0];

// // When the user clicks on the button, open the modal
// btnSupervision.onclick = function () {
//   myModalSupervision.style.display = "block";
// };
// btnQuality.onclick = function () {
//   myModalQuality.style.display = "block";
// };
// btnBudget.onclick = function () {
//   myModalBudget.style.display = "block";
// };
// btnReport.onclick = function () {
//   myModalReport.style.display = "block";
// };
// btnRenovate.onclick = function () {
//   myModalRenovate.style.display = "block";
// };

// spanSupervision.onclick = function () {
//   myModalSupervision.style.display = "none";
// };
// spanQuality.onclick = function () {
//   myModalQuality.style.display = "none";
// };
// spanBudget.onclick = function () {
//   myModalBudget.style.display = "none";
// };
// spanReport.onclick = function () {
//   myModalReport.style.display = "none";
// };
// spanRenovate.onclick = function () {
//   myModalRenovate.style.display = "none";
// };


// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//   if (event.target == modal) {
//     myModalSupervision.style.display = "none";
//     myModalQuality.style.display = "none";
//     myModalBudget.style.display = "none";
//     myModalReport.style.display = "none";
//     myModalRenovate.style.display = "none";
//   }
// };


function contactmail() {
  // let email_state = true;
  let Namemail = $("#Namemail").val();
  let Phonemail = $("#Phonemail").val();
  let Emailaddress = $("#Emailaddress").val();
  let Messagemail = $("#Messagemail").val();
  // console.log(Namemail);
  // console.log(Phonemail);
  // console.log(Emailaddress);
  // console.log(Messagemail);
  let name_state = true;
  let email_state = true;
  let phone_state = true;
  let message_state = true;

  if (Emailaddress == "") {
    alert("Please enter your email address.");
    email_state = false;
  } else if (Emailaddress != "") {
    if (!validateEmail(Emailaddress.trim())) {
      alert("Invalid Email , Ex.. suwanconstruction@gmail.com");
      email_state = true;
    } else {
      if (!validateName(Namemail.trim())) {
        alert("Please fill in your first and last name.");
        name_state = false;
      } else {
        name_state = true;
      }
      //   pNum.forEach(num => {
      //     console.log(`${num} ` +
      //         `is ${validatePhone(num)
      //           ? 'valid' : 'invalid'}`);
      //   });
      if (!validatePhone(Phonemail.trim())) {
        alert("Please enter your phone number.");
        phone_state = false;
      } else {
        phone_state = true;
      }
      if (Messagemail == "") {
        alert("Please fill in the message.");
        message_state = false;
      } else {
        message_state = true;

        if (
          email_state == true &&
          name_state == true &&
          phone_state == true &&
          message_state == true
        ) {
          // console.log("send email");
          $.ajax({
            method: "post",
            url: "sendmessage.php",
            data: {
              Namemail: Namemail,
              Phonemail: Phonemail,
              Emailaddress: Emailaddress,
              Messagemail: Messagemail,
            },
            success: (response) => {
              //   console.log('good',response);
              alert("Message sent successfully");
            },
            error: function (err) {
              console.log("bad", err);
            },
          });
        }
      }
    }
  }

  // if (emailAddress.length == '') {
  //   emailAddress = false;
  //     $('#emailAddress').parent().removeClass();
  //     $('#emailAddress').parent().addClass('box-passResetEmail error');
  //     $('#box-btn').addClass('box-btn error');
  //     $('#emailAddress').siblings('small').text('Invalid Email');
  // }
  // else if (emailAddress.length != '') {

  //     if (!validateEmail(emailAddress.trim())) {
  //         email_state = false;
  //         $('#emailAddress').parent().removeClass();
  //         $('#emailAddress').parent().addClass('box-passResetEmail error');
  //         $('#box-btn').addClass('box-btn error');
  //         $('#emailAddress').siblings('small').text('Invalid Email , Ex.. photopanda134@gmail.com');
  //     }
  //     else {

  //         $.ajax({
  //             method: 'get',
  //             url: '/model/check_email_RukCom.php',
  //             data: {
  //                 emailUser: emailAddress,
  //             },
  //             success: (response) => {
  //                 // console.log('good',response);

  //                 if (response.RespCode == 200) {
  //                   if (response.RespMessage=='token') {
  //                     email_state = true;
  //                     $('#emailAddress').parent().removeClass();
  //                     $('#emailAddress').parent().addClass('box-passResetEmail success');

  //                     $.ajax({
  //                       method: 'post',
  //                       url: '/api/send_email_resetRukCom.php',
  //                       data: {
  //                         emailAddress: emailAddress,
  //                       },
  //                       success: (response) => {
  //                         // console.log('receiveMail',response);
  //                         if (response.RespCode == 200) {
  //                           if (response.RespMessage=='semtmailsuccess') {
  //                             // console.log("1");
  //                             swal({
  //                                 title: "Semt Mail Success",
  //                                 icon: 'success'
  //                             })
  //                           }
  //                         }
  //                         else if(response.RespCode == 400) {
  //                           if (response.RespMessage=='semtmailerror') {
  //                             swal({
  //                                 title: "Semt mail error. Please resend.",
  //                                 icon: 'error'
  //                             })
  //                           }
  //                         }
  //                       },
  //                       error: function (err) {
  //                         console.log('bad',err)
  //                       }
  //                     })

  //                   }
  //                 }
  //                 else if(response.RespCode == 400) {
  //                     if (response.RespMessage=='not_token') {
  //                         email_state = false;
  //                         $('#emailEdit').parent().removeClass();
  //                         $('#emailEdit').parent().addClass('box-passResetEmail error');
  //                         $('#box-btn').addClass('box-btn error');
  //                         $('#emailAddress').siblings('small').text('Email not available in the system. Please register first.');
  //                     }
  //                 }
  //             },
  //             error: function (err) {
  //                 console.log('bad',err)
  //             }
  //         });

  //         email_state = false;
  //         $('#emailAddress').parent().removeClass();
  //         $('#emailAddress').parent().addClass('box-passResetEmail error');
  //         $('#box-btn').addClass('box-btn error');
  //         $('#emailAddress').siblings('small').text('Email not available in the system. Please register first.');

  //     }

  // }
}

// Get Current Year
// function getCurrentYear() {
//   var d = new Date();
//   var year = d.getFullYear();
//   document.querySelector("#displayDateYear").innerText = year;
// }
// getCurrentYear();

//client section owl carousel
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  navText: [
    '<i class="fa fa-long-arrow-left" aria-hidden="true"></i>',
    '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>',
  ],
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1000: {
      items: 2,
    },
  },
});

// project
$(".portfolio-menu ul li").click(function () {
  $(".portfolio-menu ul li").removeClass("active");
  $(this).addClass("active");

  var selector = $(this).attr("data-filter");
  $(".portfolio-item").isotope({
    filter: selector,
  });
  return false;
});
$(document).ready(function () {
  var popup_btn = $(".popup-btn");
  popup_btn.magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });
});

/** google_map js **/

// function myMap() {
//     var mapProp = {
//         center: new google.maps.LatLng(40.712775, -74.005973),
//         zoom: 18,
//     };
//     var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
// }
