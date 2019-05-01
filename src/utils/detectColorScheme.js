const detectColorScheme = () => {
  if (!window.matchMedia) {
    return 'light';
  }

  const { matches } = window.matchMedia('(prefers-color-scheme: dark)');
  return matches ? 'dark' : 'light';
}

export default detectColorScheme;