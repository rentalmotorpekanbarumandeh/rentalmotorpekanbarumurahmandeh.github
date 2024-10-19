function validateForm() {
    var name = document.getElementById("name").value;
    var motor = document.getElementById("motor").value;
    var days = document.getElementById("days").value;
    var phone = document.getElementById("phone").value;

    if (name == "" || motor == "" || days == "" || phone == "") {
        alert("Harap lengkapi semua bidang.");
        return false;
    }

    if (days < 1) {
        alert("Durasi sewa minimal 2 hari.");
        return false;
    }

    alert("Terima kasih " + name + ", Anda telah berhasil menyewa motor " + motor + " selama " + days + " hari. Kami akan menghubungi Anda melalui nomor " + phone + ".");
    return true;
}