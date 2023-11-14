echo "FETCHING DATA..."
git fetch

echo "PULLING UPDATES..."
git pull

echo "UPDATING PACKAGES..."
bun update

echo "CREATING .env"
rm .env
mv .env.example .env

echo "BUILDING APPLICATION..."
bun run build

