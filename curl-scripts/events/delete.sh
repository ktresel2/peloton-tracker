# ID="" TOKEN="" sh curl-scripts/rides/delete.sh


API="http://localhost:4741"
URL_PATH="/rides"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \

  echo
