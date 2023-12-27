function getLocalStorageKey() {
    // Using the pathname part of the URL as a unique key
    return 'lastRefresh_' + window.location.pathname;
}

function checkRefresh() {
    const key = getLocalStorageKey();
    const lastRefresh = localStorage.getItem(key);
    const currentDate = new Date();

    if (!lastRefresh) {
        // No timestamp found for this page, set it and do a hard refresh
        console.log("No last refresh timestamp found. Performing a hard refresh.");
        localStorage.setItem(key, currentDate.toISOString());
        window.location.reload(true);
    } else {
        const lastRefreshDate = new Date(lastRefresh);
        const diff = currentDate.getTime() - lastRefreshDate.getTime();
        const oneDay = 24 * 60 * 60 * 1000; // milliseconds in one day

        if (diff > oneDay) {
            // More than a day has passed for this page, update the timestamp and do a hard refresh
            console.log("More than a day has passed since the last refresh. Performing a hard refresh.");
            localStorage.setItem(key, currentDate.toISOString());
            window.location.reload(true);
        } else {
            // Refresh not needed, log the time remaining until the next refresh
            const hoursElapsed = (diff / (1000 * 60 * 60)).toFixed(2);
            console.log(`Last refreshed ${hoursElapsed} hours ago. No refresh needed.`);
        }
    }
}

// Call the function on page load
checkRefresh();