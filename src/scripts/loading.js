// export function hideLoading() {
//     document.getElementById('loading-screen').style.display = 'none'
// }

// export function showLoading() {
//     document.getElementById("loading-screen").style.display = "grid";
// }


// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function simulateLoading() {
//     const minLoadTime = delay(3000);
//     await Promise.all([minLoadTime, document.readyState === 'complete' || new Promise(resolve => window.addEventListener('load', resolve))])
//     document.getElementById('loading-screen').style.display = 'none'
//     sessionStorage.setItem('initialLoadComplete', 'true')
// }

// if (!sessionStorage.getItem('initialLoadComplete')) {
//     //only run the loading simulation on the initial page load
//     window.addEventListener('load', simulateLoading);
// } else {
//     //if it's not the initial page load, hide the loading screen immediately
//     document.getElementById('loading-screen').style.display = 'none'
// }


window.addEventListener('load', function () {
    document.getElementById('loading-screen').style.display = 'none'
})

// window.addEventListener('load', simulateLoading)
