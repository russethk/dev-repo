SELECT flight_num, first_name, last_name, seat, departure, arrival, airline, from_city, to_city
FROM tickets
	JOIN flights USING (id)
ORDER BY flight_num;