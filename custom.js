function fetchWikipediaData() {
    let searchTerm = document.getElementById("searchTerm").value.trim();
    let language = document.getElementById("language").value; // ভাষা নির্বাচন

    if (searchTerm === "") {
        alert("অনুগ্রহ করে একটি পৃষ্ঠার নাম লিখুন!");
        return;
    }

    let xhr = new XMLHttpRequest();
    // URL এর মধ্যে ভাষা যুক্ত করা হচ্ছে
    xhr.open("GET", `https://${language}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(searchTerm)}`, true);

    xhr.onload = function() {
        if (xhr.status === 200) {
            let data = JSON.parse(xhr.responseText);
            let content = data.extract_html || data.extract; 

            document.getElementById("info-container").innerHTML = `
                <h3>${data.title}</h3>
                <ul>
                    <li><strong>শিরোনাম:</strong> ${data.title}</li>
                    <li><strong>সংক্ষিপ্ত বিবরণ:</strong> ${content}</li>
                    <li><strong>পৃষ্ঠার লিঙ্ক:</strong> <a href="https://${language}.wikipedia.org/wiki/${encodeURIComponent(data.title)}" target="_blank">এখানে ক্লিক করুন</a></li>
                </ul>
            `;
        } else {
            document.getElementById("info-container").innerHTML = `<p>দুঃখিত, তথ্য পাওয়া যায়নি!</p>`;
        }
    };

    xhr.onerror = function() {
        document.getElementById("info-container").innerHTML = `<p>একটি ত্রুটি ঘটেছে, আবার চেষ্টা করুন।</p>`;
    };

    xhr.send(); 
}