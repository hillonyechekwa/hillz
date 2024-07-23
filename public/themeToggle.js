const getInitialTheme = () => {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
        return localStorage.getItem('theme')
    }

    if (typeof window !== 'undefined' & window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    }
    return 'light';
};


const theme = getInitialTheme()

if (typeof document !== 'undefined') {
    const root = document.documentElement;
    if(theme === 'light') {
        root.classList.remove('dark')
    } else {
        root.classList.add('dark')
    }
}


if (typeof localStorage !== 'undefined') {
    localStorage.setItem('theme', theme);
}