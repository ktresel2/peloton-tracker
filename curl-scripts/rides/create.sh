# DATE="" DURATION="" MILEAGE="" OUTPUT="" CALORIES="" INSTRUCTOR="" OWNER="" TOKEN="" sh curl-scripts/rides/create.sh


API="http://localhost:4741"
URL_PATH="/rides"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "ride": {
      "date": "'"${DATE}"'",
      "duration": "'"${DURATION}"'",
      "mileage": "'"${MILEAGE}"'",
      "output": "'"${OUTPUT}"'",
      "calories": "'"${CALORIES}"'",
      "instructor": "'"${INSTRUCTOR}"'"
    }
  }'

echo
