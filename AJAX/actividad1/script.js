// This file contains the JavaScript code that handles the AJAX request to fetch the XML data and processes it to display the required information in the HTML.

fetch('cd_catalog.xml')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(data => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, "text/xml");

        const cds = xmlDoc.getElementsByTagName("CD");
        let output = '';

        for (let i = 0; i < cds.length; i++) {
            const title = cds[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue;
            const artist = cds[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue;
            const price = cds[i].getElementsByTagName("PRICE")[0].childNodes[0].nodeValue;
            const country = cds[i].getElementsByTagName("COUNTRY")[0].childNodes[0].nodeValue;
            const year = cds[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue;

            output += `<div>
                <h2>${title}</h2>
                <p>Artist: ${artist}</p>
                <p>Price: ${price}</p>
                <p>Country: ${country}</p>
                <p>Year: ${year}</p>
            </div>`;
        }

        document.getElementById('cds').innerHTML = output;
    })
    .catch(error => {
        console.error('Error fetching the XML data:', error);
    });