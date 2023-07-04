# ShopSavvy

ShopSavvy is a demo ecommerce app created to play around with [SvelteKit](https://kit.svelte.dev/) and [FastAPI](https://fastapi.tiangolo.com/).

# Running locally

To run the ShopSavy db/backend locally with some test data, first create a new `.env` file and copy over the contents from `env.example`.

Then, run these commands:

```zsh
pip3 install -r requirements.txt
make run-db
alembic upgrade head
uvicorn src.main:app --reload
```

To run the frontend, `cd` into the frontend folder and run:

```zsh
npm i
npm run dev
```
