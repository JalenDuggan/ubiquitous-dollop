import express from "express";
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import { PrismaClient } from '@prisma/client';

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

const prisma = new PrismaClient();

const PORT = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


// app.use('/', indexRouter);

// //get users
// app.use('/users', usersRouter);

app.get("/accounts", async (req, res, next) => {
    try {
        const accounts = await prisma.account.findMany({
            where: {
                account_status: 1
            }
        });
        res.status(200).json({ accounts });
        
    } catch (error: any) {
        next(error.message)
    }
})

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
})
