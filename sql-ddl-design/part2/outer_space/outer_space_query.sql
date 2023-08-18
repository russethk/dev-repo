SELECT planet, star as orbits_around, orbital_period_in_years, COUNT(moon) as moon_count,  galaxy
FROM planets 
    JOIN stars USING (star)
    LEFT JOIN moons USING (planet)
GROUP BY planet, star
ORDER BY planet;