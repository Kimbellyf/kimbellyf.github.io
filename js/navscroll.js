<script>
        /* SCRIPT JQUERY PARA TROCAR DE COR NAVBAR */
        $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('.navbar').css("background-color", "#edecec")
            } else {
                $('.navbar').css("background-color", "transparent")
            }
        });
    </script>