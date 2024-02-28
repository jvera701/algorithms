# Write your MySQL query statement below

SELECT requester_id as id, count(*) AS num FROM (SELECT requester_id FROM RequestAccepted UNION ALL SELECT accepter_id FROM RequestAccepted ) AS T
GROUP BY id ORDER BY num DESC LIMIT 1