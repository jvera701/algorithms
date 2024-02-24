SELECT *, (Case 
         When x + y > z AND x + z > y AND y + z > x Then 'Yes'
         else
             'No'
     end) as triangle  FROM Triangle ;