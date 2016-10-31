import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLList,
  GraphQLString,
  GraphQLBoolean,
  GraphQLInt,
  GraphQLFloat,
  GraphQLNonNull
} from 'graphql';

import { ComputerType } from './computerType';
import { PhoneType } from './phoneType';
import { PrinterType } from './printerType';

import ComputerModel from '../models/computers';
import PhoneModel from '../models/phones';
import PrinterModel from '../models/printers';

import computersCtrl from '../controllers/computers'
import phonesCtrl from '../controllers/phones';
import printersCtrl from '../controllers/printers';


let schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            computers: {
                type: new GraphQLList(ComputerType),
                args: {
                    mark: {
                        description: 'The mark of computer',
                        type: GraphQLString
                    }
                },
                resolve: (root, { mark }) => computersCtrl.getAll(mark)
            },
            phones: {
                type: new GraphQLList(PhoneType),
                args: {
                    mark: {
                        type: GraphQLString,
                        description: 'The mark of phone for search.'
                    }
                },
                resolve: (root, { mark }) => phonesCtrl.getAll(mark)
            },
            printers: {
                type: new GraphQLList(PrinterType),
                args: {
                    mark: {
                        type: GraphQLString,
                        description: 'The mark of printer for search.'
                    }
                },
                resolve: (root, { mark }) => printersCtrl.getAll(mark)
            }
        }
    }),

    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: {
            insertComputer: {
                type: ComputerType,
                args: {
                    mark: {
                        type: new GraphQLNonNull(GraphQLString),
                        description: 'The mark of computer',
                    },
                    model: {
                        type: new GraphQLNonNull(GraphQLString),
                        description: 'The model of computer',
                    },
                    color: {
                        type: new GraphQLNonNull(GraphQLString),
                        description: 'The color of computer'
                    },
                    wifi: {
                        type: new GraphQLNonNull(GraphQLString),
                        description: 'The type of wifi'
                    },
                    isLaptop: {
                        type: new GraphQLNonNull(GraphQLBoolean),
                        description: 'The computer is laptop'
                    },
                    diagonal: {
                        type: new GraphQLNonNull(GraphQLFloat),
                        description: 'The monitor diagonal'
                    },
                    coresNumber: {
                        type: new GraphQLNonNull(GraphQLInt),
                        description: 'The cpu core count'
                    },
                    usb2: {
                        type: new GraphQLNonNull(GraphQLInt),
                        description: 'The usb2 ports count'
                    },
                    usb3: {
                        type: new GraphQLNonNull(GraphQLInt),
                        description: 'The usb3 ports count'
                    },
                    ram: {
                        type: new GraphQLNonNull(GraphQLInt),
                        description: 'The ram capacity'
                    },
                    memory: {
                        type: new GraphQLNonNull(GraphQLInt),
                        description: 'The memory capacity'
                    },
                    videocard: {
                        type: new GraphQLNonNull(GraphQLString),
                        description: 'The type of video card in computer'
                    },
                    videomemory: {
                        type: new GraphQLNonNull(GraphQLInt),
                        description: 'The video memory capacity computer'
                    },
                    processor: {
                        type: new GraphQLNonNull(GraphQLString),
                        description: 'The type of processor in computer'
                    },
                    operatingSystem: {
                        type: new GraphQLNonNull(GraphQLString),
                        description: 'The OS on computer'
                    },
                    price: {
                        type: new GraphQLNonNull(GraphQLFloat),
                        description: 'The price of computer'
                    }
                },
                resolve: (obj, computer ) => computersCtrl.add(computer)
            },
            insertPhone: {
                type: PhoneType,
                args: {
                    mark: {
                        type: new GraphQLNonNull(GraphQLString),
                        description: 'The mark of phone.'
                    },
                    model: {
                        type: new GraphQLNonNull(GraphQLString),
                        description: 'The model of phone.'
                    },
                    color: {
                        type: new GraphQLNonNull(GraphQLString),
                        description: 'The color of phone.'
                    },
                    wifi: {
                        type: new GraphQLNonNull(GraphQLString),
                        description: 'The wifi of phone.'
                    },
                    gps: {
                        type: new GraphQLNonNull(GraphQLBoolean),
                        description: 'The gps of phone.'
                    },
                    coresNumber: {
                        type: new GraphQLNonNull(GraphQLInt),
                        description: 'The coresNumber of phone.'
                    },
                    ram: {
                        type: new GraphQLNonNull(GraphQLInt),
                        description: 'The ram of phone.'
                    },
                    memory: {
                        type: new GraphQLNonNull(GraphQLInt),
                        description: 'The memory of phone.'
                    },
                    camera: {
                        type: new GraphQLNonNull(GraphQLInt),
                        description: 'The camera of phone.'
                    },
                    diagonal: {
                        type: new GraphQLNonNull(GraphQLFloat),
                        description: 'The diagonal of phone.'
                    },
                    operatingSystem: {
                        type: new GraphQLNonNull(GraphQLString),
                        description: 'The operatingSystem of phone.'
                    },
                    price: {
                        type: new GraphQLNonNull(GraphQLFloat),
                        description: 'The price of phone.'
                    }
                },
                resolve: (obj, phone) => phonesCtrl.add(phone)
            },
            insertPrinter: {
                type: PrinterType,
                args: {
                    mark: {
                        type: new GraphQLNonNull(GraphQLString),
                        description: 'The mark of printer.'
                    },
                    model: {
                        type: new GraphQLNonNull(GraphQLString),
                        description: 'The model of printer.'
                    },
                    color: {
                        type: new GraphQLNonNull(GraphQLString),
                        description: 'The color of printer.'
                    },
                    wifi: {
                        type: new GraphQLNonNull(GraphQLString),
                        description: 'The wifi of printer.'
                    },
                    isMFP: {
                        type: new GraphQLNonNull(GraphQLBoolean),
                        description: 'The isMFP of printer.'
                    },
                    isBlackWhite: {
                        type: new GraphQLNonNull(GraphQLBoolean),
                        description: 'The isBlackWhite of printer.'
                    },
                    pageVelocityPerMinute: {
                        type: new GraphQLNonNull(GraphQLFloat),
                        description: 'The pageVelocityPerMinute of printer.'
                    },
                    printTechnology: {
                        type: new GraphQLNonNull(GraphQLString),
                        description: 'The printTechnology of printer.'
                    },
                    price: {
                        type: new GraphQLNonNull(GraphQLFloat),
                        description: 'The price of printer.'
                    }
                },
                resolve: (obj, printer) => printersCtrl.add(printer)
            }
        }
    })
});

export default schema;
