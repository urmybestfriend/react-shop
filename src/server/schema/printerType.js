import {
    GraphQLObjectType,
    GraphQLBoolean,
    GraphQLString,
    GraphQLFloat,
} from 'graphql';

export const PrinterType = new GraphQLObjectType({
    name: 'printer',
    description: 'A phone.',
    fields: () => ({
        mark: {
            type: GraphQLString,
            description: 'The mark of printer.'
        },
        model: {
            type: GraphQLString,
            description: 'The model of printer.'
        },
        color: {
            type: GraphQLString,
            description: 'The color of printer.'
        },
        wifi: {
            type: GraphQLString,
            description: 'The wifi of printer.'
        },
        isMFP: {
            type: GraphQLBoolean,
            description: 'The isMFP of printer.'
        },
        isBlackWhite: {
            type: GraphQLBoolean,
            description: 'The isBlackWhite of printer.'
        },
        pageVelocityPerMinute: {
            type: GraphQLFloat,
            description: 'The pageVelocityPerMinute of printer.'
        },
        printTechnology: {
            type: GraphQLString,
            description: 'The printTechnology of printer.'
        },
        price: {
            type: GraphQLFloat,
            description: 'The price of printer.'
        }
    })
})
