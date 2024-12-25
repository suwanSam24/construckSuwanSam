function contactmail() {

    // let email_state = true;
    let Namemail = $('#Namemail').val();
    let Phonemail = $('#Phonemail').val();
    let Emailaddress = $('#Emailaddress').val();
    let Messagemail = $('#Messagemail').val();
    console.log(Namemail);
    console.log(Phonemail);
    console.log(Emailaddress);
    console.log(Messagemail);

    // if (Emailaddress == '') {
    //     alert("Please enter your email address.");
    // }
    // else if (Emailaddress !='') {
    //     $.ajax({
    //         method: 'post',
    //         url: '/api/send_email_resetRukCom.php',
    //         data: {
    //             Emailaddress: Emailaddress,
    //         },
    //         success: (response) => {
    //             // console.log('good',response);

    //             // if (response.RespCode == 200) {
    //             //     if (response.RespMessage=='token') {
    //             //     email_state = true;
    //             //     $('#emailAddress').parent().removeClass();
    //             //     $('#emailAddress').parent().addClass('box-passResetEmail success');
                    
    //             //     $.ajax({
    //             //         method: 'post',
    //             //         url: '/api/send_email_resetRukCom.php',
    //             //         data: {
    //             //         emailAddress: emailAddress,
    //             //         },
    //             //         success: (response) => {
    //             //         // console.log('receiveMail',response);
    //             //         if (response.RespCode == 200) {
    //             //             if (response.RespMessage=='semtmailsuccess') { 
    //             //             // console.log("1");
    //             //             swal({
    //             //                 title: "Semt Mail Success",
    //             //                 icon: 'success'
    //             //             })
    //             //             }
    //             //         }
    //             //         else if(response.RespCode == 400) {
    //             //             if (response.RespMessage=='semtmailerror') {
    //             //             swal({
    //             //                 title: "Semt mail error. Please resend.",
    //             //                 icon: 'error'
    //             //             })
    //             //             }
    //             //         }
    //             //         },
    //             //         error: function (err) {
    //             //         console.log('bad',err)
    //             //         }
    //             //     })

    //             //     }
    //             // } 
    //             // else if(response.RespCode == 400) {
    //             //     if (response.RespMessage=='not_token') {
    //             //         email_state = false;
    //             //         $('#emailEdit').parent().removeClass();
    //             //         $('#emailEdit').parent().addClass('box-passResetEmail error');
    //             //         $('#box-btn').addClass('box-btn error');
    //             //         $('#emailAddress').siblings('small').text('Email not available in the system. Please register first.');
    //             //     }
    //             // }
    //         },
    //         error: function (err) {
    //             console.log('bad',err)
    //         }
    //     });
    // }

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
function getCurrentYear() {
    var d = new Date();
    var year = d.getFullYear();
    document.querySelector("#displayDateYear").innerText = year;
}
getCurrentYear()

//client section owl carousel
$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: [
        '<i class="fa fa-long-arrow-left" aria-hidden="true"></i>',
        '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'
    ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});

/** google_map js **/

// function myMap() {
//     var mapProp = {
//         center: new google.maps.LatLng(40.712775, -74.005973),
//         zoom: 18,
//     };
//     var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
// }