jQuery(document).ready(function ($) {
    $('form.quform').Quform();
    if ($.isFunction($.fn.qtip)) {
        $('.quform-tooltip').qtip({
            content: { text: false }, style: {
                classes: 'qtip-default qtip-shadow quform-tt', width: '180px'
            },
            position: { my: 'left center', at: 'right center', viewport: $(window), adjust: { method: 'shift' } }
        });
    }
    $('#subject').replaceSelectWithTextInput({ onValue: 'Other' });


    const footerContent = `<footer id="footerContent">
            <div class="container">
                <div class="row justify-content-between py-6 py-md-8 py-lg-10">
                    <div class="col-lg-4 col-md-6 text-center mb-2-9 mb-lg-0">
                        <div class="section-title-style1 mb-2-2">
                            <h3 class="text-white h5 font-weight-600">About Us</h3>
                        </div>
                        <p class="text-white opacity8 mb-1-9">We assist you to develop up your flourishing commercial
                            enterprise and solution on your full-size undertakings.</p>
                        <ul class="social-icons-style2">
                            <li><a href="#!"><i class="ti-facebook"></i></a></li>
                            <li><a href="#!"><i class="ti-twitter"></i></a></li>
                            <li><a href="#!"><i class="ti-instagram"></i></a></li>
                            <li><a href="#!"><i class="ti-youtube"></i></a></li>
                            <li><a href="#!"><i class="ti-linkedin"></i></a></li>
                        </ul>
                    </div>
                    <div class="col-lg-4 col-md-6 text-center mb-2-9 mb-lg-0">
                        <div class="bg-img cover-background" data-background="img/bg/bg-11.png">
                            <div class="section-title-style1 mb-2-2"><h3 class="text-white h5 font-weight-600">Contact Us</h3></div>
                            <i class="ti-headphone-alt display-21 text-white"></i>
                            <ul class="list-unstyled p-0 mb-0 mt-3">
                                <li class="text-white opacity8"><a href="https://maps.app.goo.gl/vUWZYziPBjALoQeG8" target="_blank" class="text-white opacity8">103, Radhika Complex, Virani Circle, Kaliyabid, Bhavnagar - 364002</a></li>
                                <li class="text-white opacity8"><a href="tel:+919712982527" class="text-white opacity8">+91 97129 82527</a></li>
                                <li class="text-white opacity8"><a href="mailto:support@krishdevherbal.in" class="text-white opacity8">support@krishdevherbal.in</a></li>
                            </ul></div></div>
                    <div class="col-lg-4 col-md-6 text-center">
                        <div class="pl-lg-4">
                            <div class="section-title-style1 mb-2-2">
                                <h3 class="text-white h5 font-weight-600">Newsletter</h3>
                            </div>
                            <p class="text-white opacity8 mb-1-9">Stay Updated with our latest news. We promise not to
                                spam</p>
                            <form class="quform newsletter-form mx-auto" action="/" method="post" enctype="multipart/form-data" onclick="">
                                <div class="quform-elements">
                                    <div class="row"><div class="col-md-12"><div class="quform-element"><div class="quform-input"><input class="form-control" id="email_address" type="text" name="email_address" placeholder="Subscribe with us"></div></div></div>
                                        <div class="col-md-12">
                                            <div class="quform-submit-inner"><button class="btn btn-white text-primary m-0" type="submit"><i class="ti-share"></i></button></div>
                                            <div class="quform-loading-wrap"><span class="quform-loading"></span></div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border-top border-color-light-white">
                <div class="container">
                    <div class="row py-4">
                        <div class="col-12 mb-2 mb-lg-0 text-center">
                            <p class="text-white opacity8 mb-0 display-32 display-sm-31 letter-spacing-1 text-uppercase">
                                &copy; KrishDev Herbal 2026. All Rights Reserved. Designed by <a href="https://syologics.com/" class="text-white opacity8">Syologics Technology</a>.
                            </p></div></div></div></div></footer>`;
    $('#footerContent').empty().html(footerContent);
});

(function ($) {
    $(window).on('load', function () {
        var images = ['quform/images/close.png', 'quform/images/success.png', 'quform/images/error.png', 'quform/images/default-loading.gif']; if ($('.quform-theme-light-light, .quform-theme-light-rounded').length) { images = images.concat(['quform/themes/light/images/button-active-bg-rep.png', 'quform/themes/light/images/close.png', 'quform/themes/light/images/input-active-bg-rep.png']); }
        if ($('.quform-theme-dark-dark, .quform-theme-dark-rounded').length) {
            images = images.concat(['quform/themes/dark/images/button-active-bg-rep.png', 'quform/themes/dark/images/close.png', 'quform/themes/dark/images/input-active-bg-rep.png', 'quform/themes/dark/images/loading.gif']);
        }
        if ($('.quform-theme-minimal-light').length) { images = images.concat(['quform/themes/minimal/images/close-light.png']); }
        if ($('.quform-theme-minimal-dark').length) { images = images.concat(['quform/themes/minimal/images/close-dark.png', 'quform/themes/minimal/images/loading-dark.gif']); }
        $.preloadImages(images);
    });
})(jQuery);