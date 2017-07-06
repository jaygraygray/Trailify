DELETE FROM favorited
WHERE user_id = $1 and
unique_id = $2
