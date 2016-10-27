import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLList,
  GraphQLString
} from 'graphql';

import { ComputerType } from './computerType';

import ComputerModel from '../models/computers';

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
            }
        }
    })
});

export default schema;
