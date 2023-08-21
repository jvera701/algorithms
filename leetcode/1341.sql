# Write your MySQL query statement below

(SELECT name AS results FROM MovieRating INNER JOIN MOVIES ON MovieRating.movie_id = Movies.movie_id INNER JOIN Users ON Users.user_id = MovieRating.user_id GROUP BY name ORDER BY COUNT(*) DESC, name LIMIT 1) UNION ALL
(SELECT title AS results FROM MovieRating JOIN Movies ON MovieRating.movie_id=Movies.movie_id WHERE created_at BETWEEN '2020-02-01' and '2020-02-29' GROUP BY title ORDER BY AVG(rating) DESC, title LIMIT 1)