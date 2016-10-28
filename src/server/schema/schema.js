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

import ComputerModel from '../models/computers';
import PhoneModel from '../models/phones';

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
                resolve: (root, {mark}) => {
                    return new Promise((resolve, reject) => { // move this to separate file for manipulate data from db
                        ComputerModel.find({}, function(err, docs) {
                            if(err) {
                                reject({error: err});
                            } else {
                                if (mark) {
                                    const brand = mark.trim().toLowerCase();

                                    docs = docs.filter(pc => pc.mark.toLowerCase() === brand);
                                }

                                resolve(docs);
                            }
                        });
                    });
                }
            },
            phones: {
                type: new GraphQLList(PhoneType),
                args: {
                    mark: {
                        type: GraphQLString,
                        description: 'The mark of phone for search.'
                    }
                },
                resolve: (root, {mark}) => {
                    return new Promise((resolve, reject) => {
                        PhoneModel.find({}, (err, phones) => {
                            if (!err){
                                if (mark) {
                                    mark = mark.trim().toLowerCase();
                                    phones = phones.filter(p => p.mark.toLowerCase() === mark);
                                }

                                resolve(phones);
                            } else {
                                reject({error: err});
                            }
                        })
                    });
                }
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
                resolve: (obj, newComputer ) => {
                    return new Promise((resolve, reject) => { // Also must be moved to separate file, like and query
                        const newComputerModel = new ComputerModel(newComputer);

                        newComputerModel.save(function(err, docs) {
                            if(err) {
                                console.log('error: ', err);
                                reject({error: err});
                            }
                            else {
                                resolve(newComputerModel);
                            }
                        });
                    });
                }
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
                resolve: (obj, newPhone ) => {
                    return new Promise((resolve, reject) => {
                        const newPhoneModel = new PhoneModel(newPhone);

                        newPhoneModel.save(function(err, docs) {
                            if(err) {
                                console.log('error: ', err);
                                reject({error: err});
                            }
                            else {
                                resolve(newPhoneModel);
                            }
                        });
                    });
                }
            }
        }
    })
});

export default schema;
