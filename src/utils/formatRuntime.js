function formatRuntime(runtime) {
  const hours = Math.floor(runtime / 60);

  const minutes = runtime - hours * 60;

  return `${hours}h ${minutes} min`;
}

export default formatRuntime;
