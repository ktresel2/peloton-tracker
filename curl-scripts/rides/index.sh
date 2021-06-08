# TOKEN="" sh curl-scripts/rides/index.sh


API="http://localhost:4741"
URL_PATH="/rides"

curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \

  echo
