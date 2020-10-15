# pizza-app-back

Node.js + Express + Mongoose + Passport

https://safe-cliffs-71908.herokuapp.com/v1/status

Credentials:

login: user.example@mail.com
password: password

To start locally:

1. Create `.env` file based off `.env.example`

```
JWT_SECRET= // set anything
MONGO_URI= // connection string to your MongoDB database
```

2. Install dependencies

```
yarn install
```

2. Seed DB

```
yarn seed
```

3. Run

```
yarn dev
```
