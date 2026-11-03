// التأكد من تحميل الصفحة
document.addEventListener("DOMContentLoaded", function () {

    // صفحة حجز الموعد
    const bookingForm = document.querySelector("#booking-form");

    if (bookingForm) {
        bookingForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const appointment = {
                name: bookingForm.elements["name"].value,
                phone: bookingForm.elements["phone"].value,
                email: bookingForm.elements["email"].value,
                date: bookingForm.elements["date"].value,
                time: bookingForm.elements["time"].value,
                notes: bookingForm.elements["notes"].value
            };

            let appointments =
                JSON.parse(localStorage.getItem("appointments")) || [];

            appointments.push(appointment);

            localStorage.setItem(
                "appointments",
                JSON.stringify(appointments)
            );

            alert("تم حجز موعدك بنجاح");

            bookingForm.reset();
        });
    }

    // صفحة عرض المواعيد
    const appointmentsList =
        document.querySelector("#appointments-list");

    if (appointmentsList) {

        let appointments =
            JSON.parse(localStorage.getItem("appointments")) || [];

        if (appointments.length === 0) {
            appointmentsList.innerHTML =
                "<p>لا توجد مواعيد محجوزة حالياً.</p>";
        } else {

            appointments.forEach(function (appointment, index) {

                appointmentsList.innerHTML += `
                    <hr>
                    <h3>الموعد رقم ${index + 1}</h3>
                    <p>اسم الزبونة: ${appointment.name}</p>
                    <p>رقم الهاتف: ${appointment.phone}</p>
                    <p>البريد الإلكتروني: ${appointment.email}</p>
                    <p>تاريخ الموعد: ${appointment.date}</p>
                    <p>وقت الموعد: ${appointment.time}</p>
                    <p>الملاحظات: ${appointment.notes}</p>
                `;

            });
        }
    }

    // صفحة التواصل معنا
    const contactForm = document.querySelector("#contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            alert("تم إرسال رسالتك بنجاح، شكراً لتواصلك معنا.");

            contactForm.reset();
        });
    }

    // صفحة تسجيل الدخول
    const loginForm = document.querySelector("#login-form");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            alert("تم استلام بيانات تسجيل الدخول.");

            loginForm.reset();
        });
    }

});