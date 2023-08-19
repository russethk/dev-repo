SELECT DISTINCT song_title, duration_in_seconds, release_date, album, 
string_agg (DISTINCT artist_name, ', ') AS artists, string_agg (DISTINCT producer, ', ') AS producers
FROM 
songs
  JOIN songs_producers ON songs_producers.song_id = songs.id 
  JOIN producers ON producers.id = songs_producers.producer_id 
  
  JOIN songs_artists ON songs_artists.song_id = songs.id 
  JOIN artists ON artists.id = songs_artists.artist_id 
  
GROUP BY song_title, duration_in_seconds, release_date, album
ORDER BY song_title;