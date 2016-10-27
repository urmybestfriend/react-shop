import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLList,
} from 'graphql';

import { ComputerType } from './computerType';

import ComputerModel from '../models/computers';

let schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            computers: {
                type: new GraphQLList(ComputerType),
                resolve: () => {
                    return new Promise((resolve, reject) => { // move this to separate file for manipulate data from db
                        ComputerModel.find({}, function(err, docs) {
                            if(err) {
                                reject({error: err});
                            } else {
                                resolve(docs);
                            }
                        });
                    });
                }
            }
        }
    })
});

export default schema;
