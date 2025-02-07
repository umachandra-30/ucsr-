document.getElementById('toggleButton').addEventListener('click', function() {
    var socialLinks = document.getElementById('socialLinks');
    if (socialLinks.classList.contains('hidden')) {
        socialLinks.classList.remove('hidden');
    } else {
        socialLinks.classList.add('hidden');
    }
});