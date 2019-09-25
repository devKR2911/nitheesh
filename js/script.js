(function () {
    window.onload = function () {
        new WOW().init();
        getMyExperience();
    };
})()


function getMyExperience() {
    var startDate = new Date(2014, 06, 07);
    var currentDate = new Date();
    var diff_date = currentDate - startDate;

    var num_years = Math.floor(diff_date / 31536000000);
    var num_months = Math.floor((diff_date % 31536000000) / 2628000000);
    // var num_days = Math.floor(((diff_date % 31536000000) % 2628000000)/86400000);

    var expStr = '';
    expStr += num_years + ' years';
    expStr += num_months > 0 ? ' and ' + num_months + ' months' : '';
    document.getElementById('total-experience').innerHTML = expStr
}

function goToSite(url) {
    window.open(url, '_blank');
}

function sendMail() {
    window.location = "mailto:ramakrishnan.nitheesh@gmail.com";
}