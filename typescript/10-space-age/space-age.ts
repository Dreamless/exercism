type Planet = 'mercury' | 'venus' | 'earth' | 'mars' | 'jupiter' | 'saturn' | 'uranus' | 'neptune';
type PlanetOrbitalPeriods = Record<Planet, number>;

const EARTH_YEAR_SECONDS = 31557600;
const ORBITAL_PERIODS: PlanetOrbitalPeriods = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1.0,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132
};

export function age(planet: Planet, seconds: number): number {
  const orbitalPeriod = ORBITAL_PERIODS[planet];
  const earthYears = seconds / EARTH_YEAR_SECONDS;
  const planetAge = earthYears / orbitalPeriod;

  return parseFloat(planetAge.toFixed(2));
}
