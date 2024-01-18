export function getEnergy(year, month) {
  return fetch(
    `http://localhost:3006/energy/${year}/${month}`
  ).then((res) => res.json());
}
