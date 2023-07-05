# ShopSavvy

ShopSavvy is a demo ecommerce app created to play around with [SvelteKit](https://kit.svelte.dev/) and [FastAPI](https://fastapi.tiangolo.com/).

# Running locally

To run the ShopSavy db/backend locally with some test data, first `cd backend` and create a new `.env` file, copying over the contents from `env.example`.

Then, run these commands:

```zsh
pip3 install -r requirements.txt
docker-compose up -d
uvicorn src.main:app --reload
```

To run the frontend, `cd` into the frontend folder and run:

```zsh
npm i
npm run dev
```
