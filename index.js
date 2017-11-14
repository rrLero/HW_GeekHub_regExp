(function () {
    const transform = (str) => str.split(/\s+/).filter((a) => /[A-Z]/.test(a));
    console.log(transform('accept acceptCharset accessKey action allowFullScreen allowTransparency alt async autoComplete autoFocus'))
})();

// (function () {
//     const lis = document.getElementsByTagName('li');
//     const form = document.getElementsByTagName('input')[0];
//     const escapeRegExp = (text) => text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
//     const addClassHidden = (a) => a.className = 'hidden';
//     const removeClassHidden = (a) => a.className = '';
//     const regTest = (str, val) => new RegExp(`\w?${escapeRegExp(str.toLowerCase())}`).test(val.toLocaleLowerCase());
//     const handler = (event) => [].slice.call(lis).forEach((a) => regTest(form.value, a.firstChild.data) ? removeClassHidden(a) : addClassHidden(a));
//     form.addEventListener('input', handler);
// })();

(function () {

    const lis = document.getElementsByTagName('li');
    const form = document.getElementsByTagName('input')[0];
    const escapeRegExp = (text) => text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
    const addClassHidden = (a) => a.className = 'hidden';
    const removeClassHidden = (a) => a.className = '';
    const addHighLight = (li, str) => li.innerHTML = str;
    const regTest = (str, val) => new RegExp(`\w?${escapeRegExp(str.toLowerCase())}`).test(val.toLocaleLowerCase());

    const insertSpan = (str, val) => {
        const index = val.toLowerCase().indexOf(str.toLowerCase());
        return val.slice(0, index) + `<span class="highlight">${val.slice(index, index + str.length)}</span>`
        + val.slice(index + str.length)};

    const getStrWithHighlight = (str, val) => ~val.toLowerCase().indexOf(str.toLowerCase()) ? insertSpan(str, val) : val;

    const handler = (event) => [].slice.call(lis).forEach((a) => {
        regTest(form.value, a.textContent)
        ? addHighLight(a, getStrWithHighlight(form.value, a.textContent), removeClassHidden(a)) : addClassHidden(a)
    });
    form.addEventListener('input', handler);
})();