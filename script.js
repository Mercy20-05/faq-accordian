const questions = document.querySelectorAll(".faq-question");

questions.forEach(function (question) {

    question.addEventListener("click", function () {

        const currentItem = question.parentElement;

        // Close all other FAQ items
        document.querySelectorAll(".faq-item").forEach(function (item) {

            if (item !== currentItem) {
                item.classList.remove("active");
            }

        });

        // Toggle the clicked FAQ item
        currentItem.classList.toggle("active");

    });

});