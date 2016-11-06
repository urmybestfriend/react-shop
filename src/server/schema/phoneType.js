import {
    GraphQLObjectType,
    GraphQLBoolean,
    GraphQLString,
    GraphQLFloat,
    GraphQLInt,
} from 'graphql';

export const PhoneType = new GraphQLObjectType({
    name: 'phone',
    description: 'A phone.',
    fields: () => ({
        mark: {
            type: GraphQLString,
            description: 'The mark of phone.'
        },
        model: {
            type: GraphQLString,
            description: 'The model of phone.'
        },
        color: {
            type: GraphQLString,
            description: 'The color of phone.'
        },
        wifi: {
            type: GraphQLString,
            description: 'The wifi of phone.'
        },
        gps: {
            type: GraphQLBoolean,
            description: 'The gps of phone.'
        },
        coresNumber: {
            type: GraphQLInt,
            description: 'The coresNumber of phone.'
        },
        ram: {
            type: GraphQLInt,
            description: 'The ram of phone.'
        },
        memory: {
            type: GraphQLInt,
            description: 'The memory of phone.'
        },
        camera: {
            type: GraphQLInt,
            description: 'The camera of phone.'
        },
        diagonal: {
            type: GraphQLFloat,
            description: 'The diagonal of phone.'
        },
        operatingSystem: {
            type: GraphQLString,
            description: 'The operatingSystem of phone.'
        },
        price: {
            type: GraphQLFloat,
            description: 'The price of phone.'
        },
    })
});
