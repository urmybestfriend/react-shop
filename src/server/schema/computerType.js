import {
    GraphQLObjectType,
    GraphQLBoolean,
    GraphQLString,
    GraphQLFloat,
    GraphQLInt,
} from 'graphql';

export const ComputerType = new GraphQLObjectType({
    name: 'Computer',
    description: 'A computer',
    fields: () => ({
        mark: {
            type: GraphQLString,
            description: 'The mark of computer',
        },
        model: {
            type: GraphQLString,
            description: 'The model of computer',
        },
        color: {
            type: GraphQLString,
            description: 'The color of computer'
        },
        wifi: {
            type: GraphQLString,
            description: 'The type of wifi'
        },
        isLaptop: {
            type: GraphQLBoolean,
            description: 'The computer is laptop'
        },
        diagonal: {
            type: GraphQLFloat,
            description: 'The monitor diagonal'
        },
        coresNumber: {
            type: GraphQLInt,
            description: 'The cpu core count'
        },
        usb2: {
            type: GraphQLInt,
            description: 'The usb2 ports count'
        },
        usb3: {
            type: GraphQLInt,
            description: 'The usb3 ports count'
        },
        ram: {
            type: GraphQLInt,
            description: 'The ram capacity'
        },
        memory: {
            type: GraphQLInt,
            description: 'The memory capacity'
        },
        videocard: {
            type: GraphQLString,
            description: 'The type of video card in computer'
        },
        videomemory: {
            type: GraphQLInt,
            description: 'The video memory capacity computer'
        },
        processor: {
            type: GraphQLString,
            description: 'The type of processor in computer'
        },
        operatingSystem: {
            type: GraphQLString,
            description: 'The OS on computer'
        },
        price: {
            type: GraphQLFloat,
            description: 'The price of computer'
        },
    })
});
