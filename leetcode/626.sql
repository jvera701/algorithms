# Write your MySQL query statement below
SELECT CASE 
    WHEN id % 2 = 0 THEN id -1 
    WHEN id % 2 = 1 AND id+1 NOT IN (SELECT id FROM seat) then id
    ELSE id+1 end AS id ,student
FROM Seat ORDER BY id