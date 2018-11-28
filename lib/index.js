const {
    nodeEnv
} = require('./util');
console.log(`Running in ${nodeEnv} mode...`);
const app = require('express')()

const ncSchema = require('../schema');
const graphqlHTTP = require('express-graphql');
const {
    graphql
} = require('graphql');


app.use('/graphql', graphqlHTTP({
    schema: ncSchema,
    graphiql: true
}))

const PORT = process.env.PORT || 5060
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
