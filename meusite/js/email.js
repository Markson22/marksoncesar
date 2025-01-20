<><script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script><script type="text/javascript">
    (function() {
        // https://dashboard.emailjs.com/admin/account
        emailjs.init({
            publicKey: "EoX_b7cNVihKGFSjF",
        })};
    })();
</script><script type="text/javascript">
        window.onload = function() {document.getElementById('contact-form').addEventListener('submit', function (event) {
            event.preventDefault();
            // these IDs from the previous steps
            emailjs.sendForm('contact_service', 'contact_form', this)
                .then(() => {
                    console.log('SUCCESS!');
                }, (error) => {
                    console.log('FAILED...', error);
                });
        })};
        }
    </script></>