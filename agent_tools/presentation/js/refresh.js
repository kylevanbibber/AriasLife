function getLocalStorageKey() {
    // Using the pathname part of the URL as a unique key
    // You can modify this to use another unique identifier per page
    return 'lastRefresh_' + window.location.pathname;
}

function checkRefresh() {
    const key = getLocalStorageKey();
    const lastRefresh = localStorage.getItem(key);
    const currentDate = new Date();

    if (!lastRefresh) {
        // No timestamp found for this page, set it and do a hard refresh
        localStorage.setItem(key, currentDate);
        window.location.reload(true);
    } else {
        const lastRefreshDate = new Date(lastRefresh);
        const diff = currentDate - lastRefreshDate;
        const oneDay = 24 * 60 * 60 * 1000; // milliseconds in one day

        if (diff > oneDay) {
            // More than a day has passed for this page, update the timestamp and do a hard refresh
            localStorage.setItem(key, currentDate);
            window.location.reload(true);
        }
    }
}

// Call the function on page load
checkRefresh();