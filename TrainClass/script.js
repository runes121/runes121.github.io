window.onload = function() {
    const button = document.getElementById("get_info")
    const summaryP = document.getElementById("summary")
    function getInfo() {
        button.disabled = true;
        const trainClass = document.getElementById("class_input").value;

        // Use the Wikipedia API to search for the train class and get the most relevant page
        const searchUrl = `https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&list=search&utf8=1&srsearch='British Rail Class ${trainClass}'`;

        fetch(searchUrl)
            .then(response => response.json())
            .then(data => {
                // Get the first search result (most relevant) from the query
                const pageId = data.query.search[0].pageid;

                // Now retrieve the summary for the relevant page
                const summaryUrl = `https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&pageids=${pageId}&prop=extracts&exintro=true&explaintext=true`;

                fetch(summaryUrl)
                    .then(response => response.json())
                    .then(data => {
                        const summary = data.query.pages[pageId].extract;
                        summaryP.textContent = summary;
                        //console.log(summary);
                    })
                    .catch(error => console.error("Error fetching data:", error))
                    .finally(() => {
                        button.disabled = false;
                    });
            })
            .catch(error => console.error("Error fetching search results:", error));
    }
    button.addEventListener('click', getInfo);
};
